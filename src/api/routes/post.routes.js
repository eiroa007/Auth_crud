const express = require("express");
const {
  getPost,
  publishPost,
  loginPost,
} = require("../controllers/post.controller");

const PostRouter = express.Router();

PostRouter.get("/", getPost);
PostRouter.post("/publicar", publishPost);

module.exports = PostRouter;
