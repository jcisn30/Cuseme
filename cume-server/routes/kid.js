// --------- Kid Section API Routes -------- //

const express = require("express");
const router = express.Router({ mergeParams: true});


const { createKid, getKid, deleteKid, updateKid, getKidById} = require("../handlers/kid");

//prefix - /api/kid
router.route('/')
 .get(getKid)
   
  

 .post(createKid)

//prefix - /api/kid/kidid
router
.route("/:kidId")
.get(getKidById)
.put(updateKid)
.delete(deleteKid);

module.exports = router;