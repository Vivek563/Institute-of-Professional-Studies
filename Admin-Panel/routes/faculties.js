const express = require('express');
const router = express.Router();
const faculties = require('../controllers/faculties')

const catchAsync = require('../utils/catchAsync');

const {validateFaculty} = require('../middleware');

router.route('/')
    .get(catchAsync(faculties.index))
    .post(validateFaculty, catchAsync(faculties.createFaculty));

router.get('/new', faculties.renderNewForm)

router.route('/:id')
    .get(catchAsync(faculties.showFaculty))
    .put(validateFaculty, catchAsync(faculties.updateFaculty))
    .delete(catchAsync(faculties.deleteFaculty));

router.get('/:id/edit', catchAsync(faculties.renderEditForm));


module.exports = router;