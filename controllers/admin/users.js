const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require('../../models/user');

module.exports.renderRegister = (req, res) => {
    res.render('users/register')
};

module.exports.register = async (req, res) => {
    try {
    const { firstname, lastname, email, password } = req.body;

    if (!(email && password && firstname && lastname)) {
        // res.status(400).send("All fields are required");
        res.redirect('/admin/register');
    }

    const existingUser = await User.findOne({ email }); // PROMISE

    if (existingUser) {
        res.send("User already exists");
    }

    const myEncPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        firstname,
        lastname,
        email: email.toLowerCase(),
        password: myEncPassword,
    });

    //token
    const token = jwt.sign(
        { user_id: user._id, email },
        process.env.SECRET_KEY,
        {
        expiresIn: "2h",
        }
    );
    user.token = token;
    //update or not in DB

    // handle password situation
    user.password = undefined;

    // send token or send just success yes and redirect - choice
    res.render('dashboard');
    } catch (err) {
    return next(err);
    }
};

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
};

module.exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!(email && password)) {
        // res.status(400).send("Field is missing");
        return res.redirect('/admin/login');

      }
  
      const user = await User.findOne({ email });
  
      // if(!user){
      //   res.status(400).send("You are not registered in our router")
      // }
  
      if (user && (bcrypt.compare(password, user.password))) {
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.SECRET_KEY,
          {
            expiresIn: "2h",
          }
        );
        user.token = token;
        user.password = undefined;
        // res.status(200).json(user);
  
        // if you want to use cookies
        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        };
  
        res.render('dashboard');
      }
  
      // res.status(400).send("email or password is incorrect");
      return res.redirect('/admin/login');;
    } catch (err) {
      return next(err);
    }
};

module.exports.logout = (req, res, next) => {
    req.logout(err => {
        if(err) return next(err);
        res.redirect('/admin/login');
    });
};