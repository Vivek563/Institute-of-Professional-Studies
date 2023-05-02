const express = require('express');
const router = express.Router();

const catchAsync = require('../utils/catchAsync');



router.route('/')
    .get(catchAsync( async (req, res, next) => {
        res.render('dashboard')
    }))


module.exports = router;