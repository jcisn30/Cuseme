// --------- Kid Message/Comments API Routes -------- //

const express = require("express");
const router = express.Router({ mergeParams: true});

const { createKidMessage, getMessageById, deleteKidMessage } = require("../handlers/messages");

//prefix - /api/kid/:id1/user/:id2/messages
router.route("/").post(createKidMessage);


//prefix - /api/kid/:id1/user/:id2/messages/message_id
router
.route("/:messageId")
.get(getMessageById)
.delete(deleteKidMessage);

module.exports = router;