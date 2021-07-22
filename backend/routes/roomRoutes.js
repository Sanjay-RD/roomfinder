import express from "express";
import {
  getRooms,
  getRoomById,
  createRoom,
  deleteRoom,
  updateRoom,
  getUserRooms,
} from "../controllers/roomController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getRooms).post(protect, createRoom);
router.route("/userRooms").get(protect, getUserRooms);
router
  .route("/:id")
  .get(getRoomById)
  .delete(protect, deleteRoom)
  .put(protect, updateRoom);

export default router;
