var db = require('../models');

exports.getKid = function(req, res){
    db.Kid.find()
    .then(function(kid){
        res.json(kid);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createKid = function(req, res){
  db.Kid.create(req.body)
  .then(function(newKid){
      res.status(201).json(newKid);
  })
  .catch(function(err){
      res.send(err);
  })
}


exports.getKidById = function(req, res){
   db.Kid.findById(req.params.kidId)
   .then(function(foundKid){
       res.json(foundKid);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updateKid =  function(req, res){
   db.Kid.findOneAndUpdate()
   .then(function(kid){
       res.json(kid);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteKid = function(req, res){
   db.Kid.remove({_id: req.params.kidId}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;