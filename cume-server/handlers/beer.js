var db = require('../models');

exports.getBeer = function(req, res){
    db.Beer.find()
    .then(function(beer){
        res.json(beer);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createBeer = function(req, res){
  db.Beer.create(req.body)
  .then(function(newBeer){
      res.status(201).json(newBeer);
  })
  .catch(function(err){
      res.send(err);
  })
}


exports.getBeerById = function(req, res){
   db.Beer.findById(req.params.beerId)
   .then(function(foundBeerId){
       res.json(foundBeerId);
      
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updateBeer =  function(req, res){
   db.Beer.findOneAndUpdate({_id: req.params.beerId}, req.body, {new: true})
   .then(function(beer){
       res.json(beer);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteBeer = function(req, res){
   db.Beer.remove({_id: req.params.beerId}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;