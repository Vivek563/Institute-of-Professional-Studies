const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    },
    centreCode:{
        type: String,
        required: true
    },
    pdfUrl:{
        type: String,
        required: true
    },
    description:{
        type: String 
    },
    duration:{
        type: Number,
        required: true
    }

}, {timestamps: true})

const Course = mongoose.model('Course', courseSchema); 

module.exports = Course;