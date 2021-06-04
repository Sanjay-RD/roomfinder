import mongoose from "mongoose";

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
    imageOne: {
      type: String,
      required: true,
    },
    imageTwo: {
      type: String,
      required: true,
    },
    imageThree: {
      type: String,
      required: true,
    },
    imageFour: {
      type: String,
      required: true,
    },
    imageFive: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
