const Post = require("../models/post.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/token");

const getPost = async (req, res, next) => {
  try {
    const post = await Post.find();
    return res.status(200).json(posts);
  } catch (error) {
    return next(error);
  }
};

const publishPost = async (req, res, next) => {
  try {
    const newPost = new Post(req.body);
    const existingPost = await Post.findOne({ usuario: newPost.usuario });
    if (existingPost) {
      return next(new Error("Post already created"));
    }
    await newPost.save();
    //Opcion guardar contraseña nullear
    newUser.password = null;
    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const loginPost = async (req, res, next) => {
  try {
    const post = await Post.findOne({ email: req.body.email });
    if (!post) {
      return next(new Error("Email not valid"));
    }
    if (bcrypt.compareSync(req.body.password, post.password)) {
      const token = generateToken(post._id, post.email);
      return res.status(200).json({
        email: post.email,
        token: token,
      });
    } else {
      return next(new Error("Password not valid"));
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { getPost, publishPost, loginPost };
