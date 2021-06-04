import mongoose from "mongoose";

const roomSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    contact: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
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
      type: Nuumber,
      required: true,
      default: 0,
    },
    contact: {
      type: String,
      required: true,
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
    mainOne: {
      type: String,
      required: true,
    },
    mainTwo: {
      type: String,
      required: true,
    },
    mainThree: {
      type: String,
      required: true,
    },
    mainFour: {
      type: String,
      required: true,
    },
    mainfive: {
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
