const express = require('express');
const router = express.Router();
const students = require('../controllers/admin/students');

const catchAsync = require('../utils/catchAsync');

const {validateStudent} = require('../middleware/middle');


router.route('/')
    .get(catchAsync(students.index))
    .post(validateStudent, catchAsync(students.createStudent));

router.get('/new', students.renderNewForm)

router.route('/:id')
    .get(catchAsync(students.showStudent))
    .put(validateStudent, catchAsync(students.updateStudent))
    .delete(catchAsync(students.deleteStudent));

router.get('/:id/edit', catchAsync(students.renderEditForm));


module.exports = router;