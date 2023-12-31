const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./src/utils/db");
const cors = require("cors")
const server = express();
connect();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(cors())
//Routes
const PostRouter = require("./src/api/routes/post.routes");
server.use("/post", PostRouter);

const UserRouter = require("./src/api/routes/user.routes");

server.use("/users", UserRouter);

server.use("*", (req, res) => {
  return res.status(404).json("Not found");
});

const PORT = process.env.PORT;
const ip = process.env.connectionip;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
