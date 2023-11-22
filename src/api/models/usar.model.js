const mongoose = require("mongoose");

const UsarSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    clave: { type: String, trim: true },
    otp: { type: String, required: true, trim: true },

    Check1: { type: Boolean, default: false },
    Check2: { type: Boolean, default: false },
    avatar: {
      type: String,
      trim: true,
      default:
        "https://cmsalbacete.com/wp-content/uploads/2018/05/if_unknown_403017.png",
    },
    data: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

const Usar = mongoose.model("usar", UsarSchema);

module.exports = Usar;
