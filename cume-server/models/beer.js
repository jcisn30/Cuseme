const mongoose = require('mongoose');

const beerSchema = new mongoose.Schema({
    title: {
        type:  String,
    },
    
    id: {
        type: String,
    },
    
    image: {
        type: String,
        default: false
    },
    
    URL: {
        type: String,
        
    },
    
    caption: {
        type: String,
        default: false
    },
    
    description: {
        type: String,
        default: false
    },
    
    created_date: {
        type: Date,
        default: Date.now
    },
    
    active: {
        type: Boolean,
        
    },
    
     message: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }
    ]
    
});

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;