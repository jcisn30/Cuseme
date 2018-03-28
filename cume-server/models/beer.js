const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
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

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;