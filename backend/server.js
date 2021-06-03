import express from "express";
import dotenv from "dotenv";
import rooms from "./data/rooms.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is Running.......");
});

app.get("/api/rooms", (req, res) => {
  res.json(rooms);
});

app.get("/api/rooms/:id", (req, res) => {
  const room = rooms.find((room) => room.id === parseInt(req.params.id));
  res.json(room);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port 5000`)
);
