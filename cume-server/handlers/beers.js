// ----- Hold my Beer section database CRUD actions ------  //


const db = require("../models");


exports.getBeer = async function(req, res, next){
	try {
    db.Beer.find()
    .then(function(beer){
        res.json(beer);
    });
    }catch(err) {
		return next(err);
    }
};


exports.createBeer = async function(req, res, next){
    try{
  db.Beer.create(req.body)
  .then(function(newBeer){
      res.status(200).json(newBeer);
  })
  }catch(err) {
		return next(err);
  }
};


exports.getBeerById = async function(req, res, next){
    try{
  db.Beer.findById(req.params.beerId)
  .then(function(foundBeerId){
      res.json(foundBeerId);
      
  })
  }catch(err){
      return next(err);
  }
}

exports.updateBeer = async function(req, res, next){
    try{
   db.Beer.findOneAndUpdate({_id: req.params.beerId}, req.body, { "new": true })
   .then(function(beer){
       res.json(beer);
   })
   }catch(err){
       return next(err);
   }
};

exports.deleteBeer = async function(req, res, next){
    try{
   db.Beer.remove({_id: req.params.beerId}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   }catch(err){
       return next(err);
   }
}


module.exports = exports;