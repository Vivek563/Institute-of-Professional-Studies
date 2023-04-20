const express = require('express');
const router = express.Router();
const navbarItems = require('../controllers/navbarItems');

const catchAsync = require('../utils/catchAsync');

const {validateNavbarItem} = require('../middleware');

router.route('/')
    .get(catchAsync(navbarItems.index))
    .post(validateNavbarItem, catchAsync(navbarItems.createNavbarItem));

router.get('/new', navbarItems.renderNewForm);

router.route('/:id')
    .get(catchAsync(navbarItems.showNavbarItem))
    .put(validateNavbarItem, catchAsync(navbarItems.updateNavbarItem))
    .delete(catchAsync(navbarItems.deleteNavbarItem));

router.get('/:id/edit', catchAsync(navbarItems.renderEditForm));


module.exports = router;

