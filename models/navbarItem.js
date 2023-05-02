const mongoose = require('mongoose');

const navbarItemSchema = new mongoose.Schema({
    item:{
        type: String,
        required: true
    },
    serialNo:{
        type: Number,
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

const NavbarItem = mongoose.model('NavbarItem', navbarItemSchema); 

module.exports = NavbarItem;