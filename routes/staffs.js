const express = require('express');
const router = express.Router();
const staffs = require('../controllers/admin/staffs');

const catchAsync = require('../utils/catchAsync');

const {validateStaff} = require('../middleware/middle');

router.route('/')
    .get(catchAsync(staffs.index))
    .post(validateStaff, catchAsync(staffs.createStaff));

router.get('/new', staffs.renderNewForm)

router.route('/:id')
    .get(catchAsync(staffs.showStaff))
    .put(validateStaff, catchAsync(staffs.updateStaff))
    .delete(catchAsync(staffs.deleteStaff));

router.get('/:id/edit', catchAsync(staffs.renderEditForm));


module.exports = router;