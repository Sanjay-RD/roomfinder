import express from "express";
import asyncHandler from "express-async-handler";
import Room from "../models/roomModels.js";

const router = express.Router();

// @desc    Fetch all Rooms
// @route   GET api/rooms
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const rooms = await Room.find({}).populate("user", "userName");
    // .populate("user");
    res.json(rooms);
  })
);

// @desc    Fetch Room by id
// @route   GET api/rooms/:id
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const room = await Room.findById(req.params.id).populate("user");
    if (room) {
      res.json(room);
    } else {
      res.status(404);
      res.json({ message: "Room Not Found" });
    }
  })
);

export default router;
