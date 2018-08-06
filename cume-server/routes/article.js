// --------- Article Section API Routes -------- //

const express = require("express");
const router = express.Router({ mergeParams: true});


const { createArticle, getArticle, deleteArticle, updateArticle, getArticleById} = require("../handlers/article");

//prefix - /api/article
router.route('/')
 .get(getArticle)
   
  

 .post(createArticle)

//prefix - /api/article/articleid
router
.route("/:articleId")
.get(getArticleById)
.put(updateArticle)
.delete(deleteArticle);

module.exports = router;