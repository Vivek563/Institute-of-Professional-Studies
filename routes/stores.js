const express = require('express');
const router = express.Router();
const stores = require('../controllers/admin/stores');

router.route('/')
    .get(stores.renderNewStore)
	.post(stores.createStore);
	

module.exports = router;