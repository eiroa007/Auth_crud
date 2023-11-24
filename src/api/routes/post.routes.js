const express = require("express");
const {
  getPost,
  publishPost,
  loginPost,
} = require("../controllers/post.controller");
const {
  isAuth,
} = require("/Users/UsuarioM/Desktop/Desarrollo_Web/Auth_crud/src/middlewares/auth");

const PostRouter = express.Router();

PostRouter.get("/", getPost);
PostRouter.post("/usuario", publishPost);
PostRouter.post("/login", loginPost);

module.exports = PostRouter;
