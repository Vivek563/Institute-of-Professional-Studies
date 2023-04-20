const express = require('express');
const router = express.Router();

const pages = require('../controllers/pages');

// const {validatePage} = require('../middleware');

const catchAsync = require('../utils/catchAsync');


router.route('/:template')
    .get(catchAsync(pages.template));


module.exports = router;