const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const ExpressError = require('./utils/ExpressError');
const methodOverride = require('method-override');
const morgan = require('morgan');


const firstPageRoutes = require('./routes/firstPageRoutes');
const homeRoutes = require('./routes/homeRoutes');
const centreRoutes = require('./routes/centreRoutes');

// app.use(morgan('tiny'));

// const Centres = require('./models/centres');

mongoose.connect('mongodb://127.0.0.1:27017/IPS');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


const Pages = require('./models/page');
const NavbarItems = require('./models/navbarItem');


// -----------------------------------------first page page routes starts----------------------------------
app.use('/', firstPageRoutes)
// -----------------------------------------first page routes ends------------------------------------

// -----------------------------------------Home page routes starts----------------------------------
app.use('/home', homeRoutes)
// -----------------------------------------Home page routes ends------------------------------------

// -----------------------------------------cetre page routes starts----------------------------------
app.use('/home/centre', centreRoutes)
// -----------------------------------------centre page routes ends------------------------------------



app.all('*', (req, res, next) => {
  next(new ExpressError('Requested Page Not Found', 404)) 
})






app.use(async (err, req, res, next) => {
    console.log("************************************")
    console.log("**************ERROR*****************")
    console.log("************************************")
    
    const page = await Pages.findOne({code : 'home'});
    const navbarItems = await NavbarItems.find({});

    const {statusCode = 500} = err;
    if(!err.message) err.message = 'Oh No, Something Went Wrong!';
    res.status(statusCode).render('notfound', {page, navbarItems, err})
})





app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000") 
})