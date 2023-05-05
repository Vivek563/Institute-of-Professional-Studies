const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String   
    },
    pdfUrl:{
        type: String,
        required: true
    }
   
}, {timestamps: true})

const News = mongoose.model('News', newsSchema); 

module.exports = News;