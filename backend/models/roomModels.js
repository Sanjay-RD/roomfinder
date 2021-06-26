import mongoose from "mongoose";
import User from "./userModels.js";

const roomSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    bedroom: {
      type: Number,
      required: true,
      default: 0,
    },
    bathroom: {
      type: Number,
      required: true,
      default: 0,
    },
    sqft: {
      type: Number,
      required: true,
      default: 0,
    },
    garage: {
      type: Boolean,
      required: true,
      default: true,
    },
    mainImage: {
      type: String,
      required: true,
    },
    image1: {
      type: String,
    },
    image2: {
      type: String,
    },
    image3: {
      type: String,
    },
    image4: {
      type: String,
    },
    image5: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
