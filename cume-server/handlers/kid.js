// ----- Kids section database CRUD actions ------  //


const db = require("../models");


exports.getKid = async function(req, res, next){
	try {
    db.Kid.find()
    .then(function(kid){
        res.json(kid);
    });
    }catch(err) {
		return next(err);
    }
};


exports.createKid = async function(req, res, next){
    try{
  db.Kid.create(req.body)
  .then(function(newKid){
      res.status(200).json(newKid);
  })
  }catch(err) {
		return next(err);
  }
};


exports.getKidById = async function(req, res, next){
    try{
  db.Kid.findById(req.params.kidId)
  .then(function(foundKidId){
      res.json(foundKidId);
      
  })
  }catch(err){
      return next(err);
  }
}

exports.updateKid = async function(req, res, next){
    try{
   db.Kid.findOneAndUpdate({_id: req.params.kidId}, req.body, { "new": true })
   .then(function(kid){
       res.json(kid);
   })
   }catch(err){
       return next(err);
   }
};

exports.deleteKid = async function(req, res, next){
    try{
   db.Kid.remove({_id: req.params.kidId}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   }catch(err){
       return next(err);
   }
}


module.exports = exports;