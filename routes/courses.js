const express = require('express');
const router = express.Router();
const courses = require('../controllers/admin/courses');

const catchAsync = require('../utils/catchAsync');

const {validateCourse} = require('../middleware');

router.route('/')
    .get(catchAsync(courses.index))
    .post(validateCourse, catchAsync(courses.createCourse));

router.get('/new', courses.renderNewForm)

router.route('/:id')
    .get(catchAsync(courses.showCourse))
    .put(validateCourse, catchAsync(courses.updateCourse))
    .delete(catchAsync(courses.deleteCourse));

router.get('/:id/edit', catchAsync(courses.renderEditForm));


module.exports = router;