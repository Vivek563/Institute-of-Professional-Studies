require("dotenv").config();
require("./config/database").connect();


const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const cookieParser = require("cookie-parser");


const ExpressError = require('./utils/ExpressError');
const mongoSanitize = require('express-mongo-sanitize');

const morgan = require('morgan');


const firstPageRoutes = require('./routes/firstPageRoutes');
const homeRoutes = require('./routes/homeRoutes');
const centreRoutes = require('./routes/centreRoutes');

const announcementsRoutes = require('./routes/announcements');
const coursesRoutes = require('./routes/courses');
const eventsRoutes = require('./routes/events');
const facultiesRoutes = require('./routes/faculties');
const navbarItemsRoutes = require('./routes/navbarItems');
const newsRoutes = require('./routes/news');
const notificationsRoutes = require('./routes/notifications');
const pagesRoutes = require('./routes/pages');
const uploadsRoutes = require('./routes/uploads');
const staffsRoutes = require('./routes/staffs');
const studentsRoutes = require('./routes/students');
const usersRoutes = require('./routes/users');



// app.use(morgan('tiny'));

const app = express();


app.use(express.static(path.join(__dirname, 'public')))
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(mongoSanitize());


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

//------------------------------------------- Admin / User routes starts----------------------------------------
app.use('/admin', usersRoutes)
//------------------------------------------- Admin / User routes ends----------------------------------------

//------------------------------------------- Announcements routes starts----------------------------------------
app.use('/admin/announcements', announcementsRoutes)
//------------------------------------------- Announcements routes ends----------------------------------------

//------------------------------------------- Courses routes starts----------------------------------------
app.use('/admin/courses', coursesRoutes)
//------------------------------------------- Courses routes ends----------------------------------------

//------------------------------------------- Events routes starts----------------------------------------
app.use('/admin/events', eventsRoutes)
//------------------------------------------- Events routes ends----------------------------------------

//------------------------------------------- Faculties routes starts----------------------------------------
app.use('/admin/faculties', facultiesRoutes)
//------------------------------------------- Faculties routes ends----------------------------------------

//------------------------------------------- NavbarItems routes starts----------------------------------------
app.use('/admin/navbarItems', navbarItemsRoutes)
//------------------------------------------- NavbarItems routes ends----------------------------------------

//------------------------------------------- News routes starts----------------------------------------
app.use('/admin/news', newsRoutes)
//------------------------------------------- News routes ends----------------------------------------

//------------------------------------------- Events routes starts----------------------------------------
app.use('/admin/notifications', notificationsRoutes)
//------------------------------------------- Events routes ends----------------------------------------

//------------------------------------------- Pages routes starts----------------------------------------
app.use('/admin/pages', pagesRoutes)
//------------------------------------------- Pages routes ends----------------------------------------

//------------------------------------------- Students routes starts----------------------------------------
app.use('/admin/staffs', staffsRoutes)
//------------------------------------------- Students routes ends----------------------------------------

//------------------------------------------- Students routes starts----------------------------------------
app.use('/admin/students', studentsRoutes)
//------------------------------------------- Students routes ends----------------------------------------

//------------------------------------------- Faculties routes starts----------------------------------------
app.use('/admin/uploads', uploadsRoutes)
//------------------------------------------- Faculties routes ends----------------------------------------


app.all('*', (req, res, next) => {
  next(new ExpressError('Requested Page Not Found', 404)) 
})



app.use(async (err, req, res, next) => {
    console.log("************************************")
    console.log("**************ERROR*****************")
    console.log("************************************")
    
    const page = await Pages.findOne({centreCode : 'home'});
    const navbarItems = await NavbarItems.find({});
    const {statusCode = 500} = err;
    if(!err.message) err.message = 'Oh No, Something Went Wrong!';
    res.status(statusCode).render('notfound', {page, navbarItems, err})
})


module.exports = app;