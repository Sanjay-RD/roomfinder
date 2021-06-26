import asyncHandler from "express-async-handler";
import Room from "../models/roomModels.js";

// @desc    Fetch all Rooms
// @route   GET api/rooms
// @access  Public
const getRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find({}).populate("user", "userName");
  res.json(rooms);
});

// @desc    Fetch Room by id
// @route   GET api/rooms/:id
// @access  Public
const getRoomById = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id).populate("user");
  if (room) {
    res.json(room);
  } else {
    res.status(404);
    res.json({ message: "Room Not Found" });
  }
});

const createRoom = asyncHandler(async (req, res) => {
  const {
    address,
    city,
    description,
    price,
    bedroom,
    bathroom,
    garage,
    mainImage,
    image1,
    image2,
    image3,
    image4,
    image5,
  } = req.body;
  const room = new Room({
    user: req.user._id,
    address,
    city,
    description,
    price,
    bedroom,
    bathroom,
    garage,
    mainImage,
    image1,
    image2,
    image3,
    image4,
    image5,
  });

  const createdRoom = await room.save();
  res.status(201).json(createdRoom);
});

const deleteRoom = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);
  if (room) {
    await room.remove();
    res.status(200).json({
      message: "Room Deleted",
    });
  } else {
    res.status(400);
    throw new Error("There is no room with this id");
  }
});

const updateRoom = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);
  if (room) {
    room.address = req.body.address || room.address;
    room.city = req.body.city || room.city;
    room.description = req.body.description || room.description;
    room.price = req.body.price || room.price;
    room.bedroom = req.body.bedroom || room.bedroom;
    room.bathroom = req.body.bathroom || room.bathroom;
    room.garage = req.body.garage || room.garage;
    room.mainImage = req.body.mainImage || room.mainImage;
    room.image1 = req.body.image1 || room.image1;
    room.image2 = req.body.image2 || room.image2;
    room.image3 = req.body.image3 || room.image3;
    room.image4 = req.body.image4 || room.image4;
    room.image5 = req.body.image5 || room.image5;

    const updatedRoom = await room.save();
    res.status(201).json(updatedRoom);
  } else {
    res.status(404);
    throw new Error("Room Not Found");
  }
});

export { getRooms, getRoomById, createRoom, deleteRoom, updateRoom };
