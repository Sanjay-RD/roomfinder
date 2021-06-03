const express = require("express");
const app = express();
const rooms = require("./data/rooms.js");

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

app.listen(5000, console.log("Server Running on port 5000"));
