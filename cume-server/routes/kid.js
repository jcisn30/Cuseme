var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../handlers/kid");


router.route('/')
 .get(helpers.getKid)
 .post(helpers.createKid)
 
router.route('/:kidId')
  .get(helpers.getKidById)
  .put(helpers.updateKid)
  .delete(helpers.deleteKid)
  
module.exports = router;