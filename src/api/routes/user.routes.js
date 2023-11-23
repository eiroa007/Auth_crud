const express = require("express");
const {
  getUsers,
  loginUser,
  registerUser,
} = require("../controllers/user.controller");
const {
  isAuth,
} = require("/Users/UsuarioM/Desktop/Desarrollo_Web/Auth_crud/src/middlewares/auth");

const UserRouter = express.Router();

UserRouter.get("/", [isAuth], getUsers);
UserRouter.post("/login", loginUser);
UserRouter.post("/register", registerUser);

module.exports = UserRouter;
