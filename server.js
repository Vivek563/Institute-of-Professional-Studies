const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

const ExpressError = require('./utils/ExpressError');
const mongoSanitize = require('express-mongo-sanitize');

const morgan = require('morgan');


const firstPageRoutes = require('./routes/firstPageRoutes');
const homeRoutes = require('./routes/homeRoutes');
const centreRoutes = require('./routes/centreRoutes');

const announcementsRoutes = require('./routes/announcements');
const eventsRoutes = require('./routes/events');
const facultiesRoutes = require('./routes/faculties');
const navbarItemsRoutes = require('./routes/navbarItems');
const newsRoutes = require('./routes/news');
const notificationsRoutes = require('./routes/notifications');
const pagesRoutes = require('./routes/pages');
const storesRoutes = require('./routes/stores');
const studentsRoutes = require('./routes/students');
const usersRoutes = require('./routes/users');



// app.use(morgan('tiny'));

// const Centres = require('./models/centres');

mongoose.connect('mongodb://127.0.0.1:27017/IPS');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();


app.use(express.static(path.join(__dirname, 'public')))
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
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

//------------------------------------------- Faculties routes starts----------------------------------------
app.use('/admin/stores', storesRoutes)
//------------------------------------------- Faculties routes ends----------------------------------------

//------------------------------------------- Students routes starts----------------------------------------
app.use('/admin/students', studentsRoutes)
//------------------------------------------- Students routes ends----------------------------------------



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