const express = require('express');
const router = express.Router();
const news = require('../controllers/news');

const catchAsync = require('../utils/catchAsync');

const {validateNews} = require('../middleware');

router.route('/')
    .get(catchAsync(news.index))
    .post(validateNews, catchAsync(news.createNews));

router.get('/new', news.renderNewForm);

router.route('/:id')
    .get(catchAsync(news.showNews))
    .put(validateNews, catchAsync(news.updateNews))
    .delete(catchAsync(news.deleteNews));

router.get('/:id/edit', catchAsync(news.renderEditForm));


module.exports = router;