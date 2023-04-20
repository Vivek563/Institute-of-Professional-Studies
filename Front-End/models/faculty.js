const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
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
    researchPaperCount:{
        type: Number,
        required: true
    }

}, {timestamps: true})

const Faculty = mongoose.model('Faculty', facultySchema); 

module.exports = Faculty;