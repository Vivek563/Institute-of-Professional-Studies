const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    emailId:{
        type: String,
        required: true
    },
    education:{
        type: String,
        required: true
    },
    photo:{
        type: String
    },
    centreCode:{
        type: String,
        required: true
    }

}, {timestamps: true})

const Staff = mongoose.model('Staff', staffSchema); 

module.exports = Staff;