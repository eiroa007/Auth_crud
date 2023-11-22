const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    imagen: { type: String, required: true, trim: true },
    titulo: { type: String, required: true, trim: true },
    contenido: { type: String, required: true, trim: true },
    usuario: { type: mongoose.Types.ObjectId, ref: "users" },
    Categoria: { type: String, enum: [discapacidad.mayores] },
    publicado: { type: Boolean, required: true, default: false },
    data: { type: String, trim: true },
  },

  {
    timestamps: true,
  }
);

const Post = mongoose.model("users", PostSchema);

module.exports = Post;
