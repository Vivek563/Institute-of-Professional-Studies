const express = require('express');
const router = express.Router();

const pages = require('../controllers/website/pages');

// const {validatePage} = require('../middleware');

const catchAsync = require('../utils/catchAsync');


router.route('/:loadmore')
    .get(catchAsync(pages.renderLoadmore));



module.exports = router;