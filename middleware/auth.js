const jwt = require("jsonwebtoken");
const User = require('../models/user');


const isLoggedIn = async (req, res, next) => {
  
  const token = req.cookies.access_token ;
    
  if (!token) {
    // return res.status(403).send("token is missing");
    return res.status(403).redirect('/admin/login');
  }

  try {
    const {userID} = jwt.verify(token, process.env.SECRET_KEY);
    
    
    req.user = await User.findById(userID).select('-password');
 
    next();
    // bring in info from DB
  } catch (error) {
    // return res.status(401).send("Invalid Token");
    return res.status(401).redirect('/admin/login');
  }
};

module.exports = isLoggedIn;
