const Post = require("../models/post.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../utils/token");

const getPost = async (req, res, next) => {
  try {
    const post = await Post.find();
    return res.status(200).json(post);
  } catch (error) {
    return next(error);
  }
};

const publishPost = async (req, res, next) => {
  try {
    const newPost = new Post(req.body);
    // const existingPost = await Post.findOne({ usuario: newPost.usuario });
    // if (existingPost) {
    //   return next(new Error("Post already created"));
    // }
    await newPost.save();
    //Opcion guardar contraseña nullear
    //newUser.password = null;
    return res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};


module.exports = { getPost, publishPost };
