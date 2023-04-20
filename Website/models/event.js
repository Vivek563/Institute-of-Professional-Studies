const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    pdfUrl:{
        type: String,
        required: true
    }
  
},{timestamps: true})

const Event = mongoose.model('Event', eventSchema); 

module.exports = Event;