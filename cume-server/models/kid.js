var mongoose = require('mongoose');

var kidSchema = new mongoose.Schema({
    Title: {
        type:  String,
    },
    
    Image: {
        type: String,
        default: false
    },
    
    URL: {
        type: String,
        default: false
    },
    
    Caption: {
        type: String,
        default: false
    },
    
    Description: {
        type: String,
        default: false
    },
    
    Created_date: {
        type: Date,
        default: Date.now
    },
    
    Active: {
        type: Boolean,
        
    }
    
    
});

var Kid = mongoose.model('Kid', kidSchema);

module.exports = Kid;