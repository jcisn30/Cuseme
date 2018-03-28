var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../handlers/beer");


router.route('/')
 .get(helpers.getBeer)
 .post(helpers.createBeer)
 
router.route('/:beerId')
  .get(helpers.getBeerById)
  .put(helpers.updateBeer)
  .delete(helpers.deleteBeer)
  
module.exports = router;