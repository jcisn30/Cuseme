const express = require("express");
const router = express.Router({ mergeParams: true});

const { createMessage, getMessageById, deleteBeerMessage } = require("../handlers/messages");

//prefix - /api/beer/:id1/user/:id2/messages
router.route("/").post(createMessage);

//prefix - /api/beer/:id1/user/:id2/messages/message_id
router
.route("/:messageId")
.get(getMessageById)
.delete(deleteBeerMessage);

module.exports = router;