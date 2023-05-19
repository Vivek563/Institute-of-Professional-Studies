const mongoose = require('mongoose');
// const Faculty = require('./faculty');
// const NavbarItem = require('./navbarItem');

const Schema = mongoose.Schema;

const pageSchema = new mongoose.Schema({
    title: String,
    favicon: String,
    centreCode: String,
    shortDescription: String,
    about: String,
    navbarItems:[
        {
            type: Schema.Types.ObjectId,
            ref: 'NavbarItem'
        }
    ],
    faculties:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Faculty'
        }
    ],
    notifications:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Notification'
        }
    ]
  
},{timestamps: true})


const Page = mongoose.model('Page', pageSchema); 

module.exports = Page;