const express = require('express');
const path = require('path');
const methodOverride = require('method-override')
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');

const announcementsRoutes = require('./routes/announcements');
const eventsRoutes = require('./routes/events');
const facultiesRoutes = require('./routes/faculties');
const navbarItemsRoutes = require('./routes/navbarItems');
const newsRoutes = require('./routes/news');
const pagesRoutes = require('./routes/pages');


mongoose.connect('mongodb://127.0.0.1:27017/IPS');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.render('dashboard')
});


//------------------------------------------- Announcements routes starts----------------------------------------
app.use('/announcements', announcementsRoutes)
//------------------------------------------- Announcements routes ends----------------------------------------

//------------------------------------------- Events routes starts----------------------------------------
app.use('/events', eventsRoutes)
//------------------------------------------- Events routes ends----------------------------------------

//------------------------------------------- Faculties routes starts----------------------------------------
app.use('/faculties', facultiesRoutes)
//------------------------------------------- Faculties routes ends----------------------------------------

//------------------------------------------- NavbarItems routes starts----------------------------------------
app.use('/navbarItems', navbarItemsRoutes)
//------------------------------------------- NavbarItems routes ends----------------------------------------

//------------------------------------------- News routes starts----------------------------------------
app.use('/news', newsRoutes)
//------------------------------------------- News routes ends----------------------------------------

//------------------------------------------- Pages routes starts----------------------------------------
app.use('/pages', pagesRoutes)
//------------------------------------------- Pages routes ends----------------------------------------


app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
});

app.use((err, req, res, next) => {

    const {statusCode = 500} = err;
    if(!err.message) err.message = 'Oh No, Something Went Wrong!';
    res.status(statusCode).render('error', { err })
})

app.listen(5000, () => {
    console.log("ON PORT 5000!")
})






















