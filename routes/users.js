const express = require('express');
const router = express.Router();

const catchAsync = require('../utils/catchAsync');



const isLoggedIn = require("../middleware/auth");
const authen = require('../controllers/admin/users');


router.route('/')
    .get( (req, res) => {
    res.send("<h1>Hello from auth system - LCO</h1>");
  });
 
router.route('/register')
    .get( authen.renderRegister)  
    .post( catchAsync(authen.register));

router.route('/login')
    .get(authen.renderLogin)
    .post(catchAsync(authen.login));
  
router.get('/logout', authen.logout);
  
router.get("/dashboard", isLoggedIn, (req, res) => {
    res.render('dashboard');
  });


module.exports = router;