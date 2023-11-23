const express = require("express");
const { getPost, publishPost } = require("../controllers");
const {
  isAuth,
} = require("/Users/UsuarioM/Desktop/Desarrollo_Web/Auth_crud/src/middlewares/auth");

const PostRouter = express.Router();

PostRouter.get("/", [isAuth], getPost);
PostRouter.post("/usuario", publishPost);
PostRouter.post("/login", loginPost);

module.exports = UserRouter;
