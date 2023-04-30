const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    enrollmentNumber:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    semster:{
        type: Number,
        required: true
    },
    doa:{
        type: Date,
        required: true
    },
    dob:{
        type: Date,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    }    
}, {timestamps: true})

const Student = mongoose.model('Student', studentSchema); 

module.exports = Student;