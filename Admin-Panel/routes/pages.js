const express = require('express');
const router = express.Router();
const pages = require('../controllers/pages');
const catchAsync = require('../utils/catchAsync');

const {validatePage} = require('../middleware');

router.route('/')
    .get(catchAsync(pages.index))
    .post(validatePage, catchAsync(pages.createPage));

router.get('/new', pages.renderNewForm);

router.route('/:id')
    .get(catchAsync(pages.showPage))
    .put(validatePage, catchAsync(pages.updatePage))
    .delete(catchAsync(pages.deletePage));

router.get('/:id/edit', catchAsync(pages.renderEditForm));


module.exports = router;