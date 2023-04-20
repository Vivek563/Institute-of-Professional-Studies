const Pages = require('../models/page');
const Events = require('../models/Event');
const Announcements = require('../models/announcement');
const News = require('../models/News');
const NavbarItems = require('../models/navbarItem');

const JsonExtra = require('../pages.json');


module.exports.index = async (req, res) => {
    const page = await Pages.findOne({code : 'home'});
    const events = await Events.find({}).limit(2).sort({updatedAt: 'desc'});
    const announcements = await Announcements.find({}).limit(4).sort({updatedAt: 'desc'});
    const news = await News.find({}).limit(6).sort({updatedAt: 'desc'});
    const navbarItems = await NavbarItems.find({});
    const jsonExtra =  JsonExtra['home'];

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
    const page = await Pages.findOne({code : `${centre}`});
    const navbarItems = await NavbarItems.find({});

    res.render('centre', {page, navbarItems})
};