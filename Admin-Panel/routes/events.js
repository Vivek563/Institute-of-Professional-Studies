const express = require('express');
const router = express.Router();
const events = require('../controllers/events');

const catchAsync = require('../utils/catchAsync');

const {validateEvent} = require('../middleware');

router.route('/')
    .get(catchAsync(events.index))
    .post(validateEvent, catchAsync(events.createEvent));

router.get('/new', events.renderNewForm)

router.route('/:id')
    .get(catchAsync(events.showEvent))
    .put(validateEvent, catchAsync(events.updateEvent))
    .delete(catchAsync(events.deleteEvent));

router.get('/:id/edit', catchAsync(events.renderEditForm));


module.exports = router;