const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');


// app.use(morgan('tiny'));

const pages = require('./pages.json'); //getting pages from pages.json
const ExpressError = require('./utils/ExpressError');

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

app.set('view engine', 'ejs'); // (property, value)
app.set('views', path.join(__dirname, '/views'))

// app.use(express.urlencoded({extended: true}))
// app.use(methodOverride('_method'))

function wrapAsync(fn){
    return function(req, res, next){
        fn(req, res, next).catch(e => next(e))
    }
}


app.get('/home', wrapAsync(async (req, res, next) => {
        const home = await pages["home"];
        res.render('home.ejs', { ...home })
    }))

app.get('/home/:centre',  wrapAsync(async (req, res, next) =>{
    const navbarItems = { ...pages["home"] }.navbarItems;
    const {centre} = req.params;
    const page = await pages[centre];
    if(!page){
        const path = "../"
        const style = "css/centre.css"
        const script = "js/centre.js"
        const title = "error"
    res.render('notfound.ejs', {path, style, title,  script, navbarItems, centre })}
    else{
    res.render('centre.ejs', { ...page, navbarItems})} //spreading the object so that we can access individual property in .ejs
}))

app.get('/*', (req, res, next) => {
  next(new ExpressError('Requested Page Not Found', 404));  
})


app.use((err, req, res, next) => {
    console.log("************************************")
    console.log("**************ERROR*****************")
    console.log("************************************")
    const {status = 500, message = 'Something went wromg'} = err;
    res.status(status).send(message)
})





app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000") // setting the path so that it can run from outside of the folder
})