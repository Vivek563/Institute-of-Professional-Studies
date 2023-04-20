const express = require('express');
const router = express.Router();

const pages = require('../controllers/pages');

// const {validatePage} = require('../middleware');

const catchAsync = require('../utils/catchAsync');


router.route('/')
    .get(catchAsync(pages.index));

router.get('/home', catchAsync(pages.index))


module.exports = router;