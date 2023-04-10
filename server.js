const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const ExpressError = require('./utils/ExpressError');
const methodOverride = require('method-override');
const morgan = require('morgan');


const homeRoutes = require('./routes/homeRoutes');
const centreRoutes = require('./routes/centreRoutes');

// app.use(morgan('tiny'));

const pages = require('./pages.json'); 
const navbarItems = { ...pages["home"] }.navbarItems;

// const Centres = require('./models/centres');

// mongoose.connect('mongodb://127.0.0.1:27017/IPS')
//  .then(() => {
//     console.log("CONNECTION OPEN!!!")
//  })
// .catch(err => {
//     console.log("OH NO ERROR!!!")
//     console.log(err)
// })

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, '/views'))

// app.use(express.urlencoded({extended: true}))
// app.use(methodOverride('_method'))








app.use('/', homeRoutes)
app.use('/home', centreRoutes)




app.all('*', (req, res, next) => {
  next(new ExpressError('Requested Page Not Found', 404)) 
})


app.use((err, req, res, next) => {
    console.log("************************************")
    console.log("**************ERROR*****************")
    console.log("************************************")
    
    const path = "../"
    const style = "css/centre.css"
    const script = "js/centre.js"
    const title = "Error"


    const {statusCode = 500} = err;
    if(!err.message) err.message = 'Oh No, Something Went Wrong!';
    res.status(statusCode).render('notfound', {path, style, title,  script, navbarItems, err })
})





app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000") 
})