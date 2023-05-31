const Pages = require('../../models/page');
const Events = require('../../models/event');
const Announcements = require('../../models/announcement');
const Courses = require('../../models/course');
const News = require('../../models/news');
const NavbarItems = require('../../models/navbarItem');
const Notifications = require('../../models/notification');
const Faculties = require('../../models/faculty');
const Staffs = require('../../models/staff');
const Students = require('../../models/student');

const JsonExtra = require('../../pages.json');


module.exports.index = async (req, res) => {
    const page = await Pages.findOne({centreCode : 'home'});
    const events = await Events.find({}).limit(6).sort({updatedAt: 'desc'});
    const announcements = await Announcements.find({}).limit(6).sort({updatedAt: 'desc'});
    const news = await News.find({}).limit(6).sort({updatedAt: 'desc'});
    const navbarItems = await NavbarItems.find({}).sort({serialNo: 'asc'});
    const count = await Students.aggregate([{$match : { centreCode : { $eq : 'cms'}}},{ $count : "count"}]);
    const fCount = await Faculties.aggregate([{$match : { centreCode : { $eq : 'cms'}}},{ $count : "count"}]);
    const staCount = await Staffs.aggregate([{$match : { centreCode : { $eq : 'cms'}}},{ $count : "count"}]);
    count.push(...fCount, ...staCount);
    const jsonExtra =  JsonExtra['home'];
    count[0].count = 1200; //default students Count is set (need to be removed in last)
    count[1].count = 60; //default faculties Count is set (need to be removed in last)
    count[2].count = 40; //default staffs Count is set (need to be removed in last);
    res.render('home', {page, news, events, announcements, navbarItems, ...jsonExtra, count})
};

module.exports.template = async (req, res) => {
    const {template} = req.params;
    const page = await Pages.findOne({centreCode : `${template}`});
    const navbarItems = await NavbarItems.find({});
    const courses = await Courses.find();
    
     res.render(`template/${template}`, {page, navbarItems, courses})
};

module.exports.renderCentre = async (req, res) =>{
    const {centre} = req.params;

    const navbarItems = await NavbarItems.find({});
    const courses = await Courses.find({centreCode : `${centre}`});
   
    const page = await Pages.findOne({centreCode : `${centre}`})
        .populate('notifications')
        .populate('faculties')
    if(!page){
        return res.redirect('/home');
    }
    const notifications = page.notifications; //for sorting taking out notifications array and redefining same array in page object after sorting
    // its better to do aggregation instead of this, need to match, lookup, unwind, sort, group, project.
    notifications.sort((a, b) => {
        let da = new Date(a.updatedAt),
            db = new Date(b.updatedAt);
        return db - da;
    });
    page.notifications = notifications;
    
    res.render('centre', {page, navbarItems, courses, n_limit: 8 , f_limit : 4})
};


module.exports.renderLoadmore = async (req, res) =>{
    let {loadmore} = req.params;

    const page = await Pages.findOne({centreCode : "loadmore" });

    const navbarItems = await NavbarItems.find({});

    let pageHeading = ""
    let fullList = []

    if(loadmore === "announcements")
    {
        pageHeading = "All Announcements"
        fullList = await Announcements.find({}).sort({updatedAt: 'desc'});
    }
    else if(loadmore === "events")
    {
        pageHeading = "All Events"
        fullList = await Events.find({}).sort({updatedAt: 'desc'});
    }
    else if(loadmore === "cce" || loadmore === "cft" ||loadmore === "cfdt" || loadmore === "cms" )
    {
        pageHeading = "All Notifications"
        fullList = await Notifications.find({centreCode : `${loadmore}`}).sort({updatedAt: 'desc'});
    }
    else if(loadmore === "faculty-cce" || loadmore === "faculty-cft" ||loadmore === "faculty-cfdt" || loadmore === "faculty-cms" )
    {
        pageHeading = "All Faculties"
        loadmore = loadmore.split("-").pop();
        fullList = await Faculties.find({centreCode : `${loadmore}`}).sort({updatedAt: 'desc'});
    }
    else
    {
        pageHeading= "All News"
        fullList = await News.find({}).sort({updatedAt: 'desc'});
    }
    
    res.render('loadmore', {page, navbarItems, fullList, pageHeading})
};