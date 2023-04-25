const Pages = require('../models/page');
const Events = require('../models/Event');
const Announcements = require('../models/announcement');
const News = require('../models/News');
const NavbarItems = require('../models/navbarItem');
const notifications = require('../models/notification');
const faculties = require('../models/faculty');

const JsonExtra = require('../pages.json');


module.exports.index = async (req, res) => {
    const page = await Pages.findOne({code : 'home'});
    const events = await Events.find({}).limit(2).sort({updatedAt: 'desc'});
    const announcements = await Announcements.find({}).limit(4).sort({updatedAt: 'desc'});
    const news = await News.find({}).limit(6).sort({updatedAt: 'desc'});
    const navbarItems = await NavbarItems.find({});
    const jsonExtra =  JsonExtra['home'];
    console.log(req.params)
    res.render('home', {page, news, events, announcements, navbarItems, ...jsonExtra})
};

module.exports.template = async (req, res) => {
    const {template} = req.params;
    const page = await Pages.findOne({code : 'home'});
    const navbarItems = await NavbarItems.find({});
    const jsonExtra =  JsonExtra[`${template}`];
    // console.log(jsonExtra)
     res.render(`template/${template}`, {page, navbarItems, ...jsonExtra})
};

module.exports.renderCentre = async (req, res) =>{
    const {centre} = req.params;

    const navbarItems = await NavbarItems.find({});
    
    const page = await Pages.findOne({code : `${centre}`})
        .populate('notifications')
        .populate('faculties')
    if(!page){
        return res.redirect('../');
    }
    const notifications = page.notifications; //for sorting taking out notifications array and redefining same array in page object after sorting
    // its better to do aggregation instead of this, need to match, lookup, unwind, sort, group, project.
    notifications.sort((a, b) => {
        let da = new Date(a.updatedAt),
            db = new Date(b.updatedAt);
        return db - da;
    });
    page.notifications = notifications;
    
    res.render('centre', {page, navbarItems})
};