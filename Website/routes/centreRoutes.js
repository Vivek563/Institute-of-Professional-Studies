const express = require('express');
const router = express.Router();

const pages = require('../controllers/pages');

// const {validatePage} = require('../middleware');

const catchAsync = require('../utils/catchAsync');


router.route('/:centre')
    .get(catchAsync(pages.renderCentre));

// router.get('/:centre/about', catchAsync(async (req, res) => {
//     const about = await pages['about'];
//     const navbarItems = await { ...pages["home"] }.navbarItems;
//     const {centre} = req.params;
//     const page = await pages[centre];
//     page.path = "../../"
//     res.render('template/about.ejs', {...page, navbarItems})
// }))

// router.get('/:centre/courses', catchAsync(async (req, res) => {
//     const courses = await pages['courses'];
//     const navbarItems = await { ...pages["home"] }.navbarItems;
//     const {centre} = req.params;
//     const page = await pages[centre];
//     page.path = "../../"
//     res.render('template/courses.ejs', {...page, navbarItems})
// }))

// router.get('/:centre/faculty', catchAsync(async (req, res) => {
//     const faculty = await pages['faculty'];
//     const navbarItems = await { ...pages["home"] }.navbarItems;
//     const {centre} = req.params;
//     const page = await pages[centre];
//     page.path = "../../"
//     res.render('template/faculty.ejs', {...page, navbarItems})
// }))

// router.get('/:centre/gallery', catchAsync(async (req, res) => {
//     const gallery = await pages['gallery'];
//     const navbarItems = await { ...pages["home"] }.navbarItems;
//     const {centre} = req.params;
//     const page = await pages[centre];
//     page.path = "../../"
//     res.render('template/gallery.ejs', {...page, navbarItems})
// }))

// router.get('/:centre/notice', catchAsync(async (req, res) => {
//     const notice = await pages['notice'];
//     const navbarItems = await { ...pages["home"] }.navbarItems;
//     const {centre} = req.params;
//     const page = await pages[centre];
//     page.path = "../../"
//     res.render('template/notice.ejs', {...page, navbarItems})
// }))



module.exports = router;