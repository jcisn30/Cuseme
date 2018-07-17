const express = require("express");
const router = express.Router({ mergeParams: true});

const { createArticleMessage, getMessageById, deleteArticleMessage } = require("../handlers/messages");

//prefix - /api/article/:id1/user/:id2/messages
router.route("/").post(createArticleMessage);


//prefix - /api/article/:id1/user/:id2/messages/message_id
router
.route("/:messageId")
.get(getMessageById)
.delete(deleteArticleMessage);

module.exports = router;