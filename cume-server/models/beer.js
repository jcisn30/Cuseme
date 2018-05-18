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
        default: false
        
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
    
    likes: {
        type: Number
    },
    
    
    
    active: {
        type: Boolean,
        default: false
        
    },
    
      
   
    message: [
        {
            
        }
        
        ]
       
        
    
    
        
         
        
         
        
         
         

});

const Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;