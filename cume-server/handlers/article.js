const db = require("../models");


exports.getArticle = async function(req, res, next){
	try {
    db.Article.find()
    .then(function(article){
        res.json(article);
    });
    }catch(err) {
		return next(err);
    }
};


exports.createArticle = async function(req, res, next){
    try{
  db.Article.create(req.body)
  .then(function(newArticle){
      res.status(200).json(newArticle);
  })
  }catch(err) {
		return next(err);
  }
};


exports.getArticleById = async function(req, res, next){
    try{
  db.Article.findById(req.params.articleId)
  .then(function(foundArticleId){
      res.json(foundArticleId);
      
  })
  }catch(err){
      return next(err);
  }
}

exports.updateArticle = async function(req, res, next){
    try{
   db.Article.findOneAndUpdate({_id: req.params.articleId}, req.body, { "new": true })
   .then(function(article){
       res.json(article);
   })
   }catch(err){
       return next(err);
   }
};

exports.deleteArticle = async function(req, res, next){
    try{
   db.Article.remove({_id: req.params.articleId}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   }catch(err){
       return next(err);
   }
}


module.exports = exports;