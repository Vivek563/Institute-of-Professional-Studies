const express = require('express');
const router = express.Router();
const notifications = require('../controllers/admin/notifications');

const catchAsync = require('../utils/catchAsync');

const {validateNotification} = require('../middleware/middle');

router.route('/')
    .get(catchAsync(notifications.index))
    .post(validateNotification, catchAsync(notifications.createNotification));

router.get('/new', notifications.renderNewForm)

router.route('/:id')
    .get(catchAsync(notifications.showNotification))
    .put(validateNotification, catchAsync(notifications.updateNotification))
    .delete(catchAsync(notifications.deleteNotification));

router.get('/:id/edit', catchAsync(notifications.renderEditForm));


module.exports = router;