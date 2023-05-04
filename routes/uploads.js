const express = require('express');
const router = express.Router();
const uploads = require('../controllers/admin/uploads');


router.route('/')
    .get(uploads.index)
	.post( uploads.createUpload);

router.get('/new', uploads.renderNewForm)

module.exports = router;