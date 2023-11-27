const express = require("express");
const {
  getUsers,
  loginUser,
  registerUser,
} = require("../controllers/user.controller");
<<<<<<< HEAD
=======
const {
  isAuth,
} = require("../../middlewares/auth");
>>>>>>> c80dfdd0e997fe78aaeccf625291014f31bb69f0

const UserRouter = express.Router();

UserRouter.get("/",  getUsers);
UserRouter.post("/login", loginUser);
UserRouter.post("/register", registerUser);

module.exports = UserRouter;
