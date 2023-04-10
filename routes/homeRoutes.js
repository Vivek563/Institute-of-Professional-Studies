const express = require('express');
const router = express.Router();

const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');

const pages = require('../pages.json'); 
const navbarItems = { ...pages["home"] }.navbarItems;


router.get('/', catchAsync(async (req, res) => {
    const home = await pages["home"];
    res.render('home.ejs', { ...home })
}))

router.get('/:template', catchAsync(async (req, res) => {
const {template} = req.params;
const home = await pages["home"];
res.render(`template/${template}.ejs`, {...home})
}))


module.exports = router;