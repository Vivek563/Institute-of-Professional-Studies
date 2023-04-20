const express = require('express');
const router = express.Router();
const announcements = require('../controllers/announcements');

const catchAsync = require('../utils/catchAsync');

const {validateAnnouncement} = require('../middleware');


router.route('/')
    .get(catchAsync(announcements.index))
    .post(validateAnnouncement, catchAsync(announcements.createAnnouncement));

router.get('/new', announcements.renderNewForm)

router.route('/:id')
    .get(catchAsync(announcements.showAnnouncement))
    .put(validateAnnouncement, catchAsync(announcements.updateAnnouncement))
    .delete(catchAsync(announcements.deleteAnnouncement));

router.get('/:id/edit', catchAsync(announcements.renderEditForm));


module.exports = router;