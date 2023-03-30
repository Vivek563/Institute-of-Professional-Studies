const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');


app.use(morgan('tiny'));

const pages = require('./pages.json'); //getting pages from pages.json


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



app.get('/', (req, res) => {
        const home = pages["home"];
        res.render('home.ejs', { ...home });
    })

app.get('/home/:centre',  async (req, res) =>{
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
})

// app.get('*', (req, res) =>{
//     const { centre } = req.params;
//     res.render('notfound.ejs', {centre})
// })

// app.use((req, res) => {
//     res.status(404).send('NOT FOUND!')
// })

// app.use((err, req, res, next) => {
//     console.log("************************************")
//     console.log("**************ERROR*****************")
//     console.log("************************************")
//     // console.error(err.stack)
//     // console.log(err)
//     res.status(500).send('Something broke!')
// })

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000") // setting the path so that it can run from outside of the folder
})