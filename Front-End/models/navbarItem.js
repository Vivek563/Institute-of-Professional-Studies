const mongoose = require('mongoose');

const navbarItemSchema = new mongoose.Schema({
    item:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    subItems:[
        {
            type: String
        }
    ],
    subLinks:[
        {
            type: String
        }
    ]

}, {timestamps: true})

const NavbarItems = mongoose.model('NavbarItems', navbarItemSchema); 

module.exports = NavbarItems;