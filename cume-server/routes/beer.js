// --------- Beer Section API Routes -------- //

const express = require("express");
const router = express.Router({ mergeParams: true});


const { createBeer, getBeer, deleteBeer, updateBeer, getBeerById} = require("../handlers/beers");

//prefix - /api/beers
router.route('/')
 .get(getBeer)
   
  

 .post(createBeer)

//prefix - /api/beers/beerid
router
.route("/:beerId")
.get(getBeerById)
.put(updateBeer)
.delete(deleteBeer);

module.exports = router;