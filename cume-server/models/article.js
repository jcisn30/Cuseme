// ------ Article Section Schema ------ //

const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
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

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;