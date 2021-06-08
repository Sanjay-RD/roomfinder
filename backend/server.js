import express from "express";
import dotenv from "dotenv";
import rooms from "./data/rooms.js";
import connectDB from "./config/db.js";
import colors from "colors";
import roomRoutes from "./routes/roomRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

// connection to the database
connectDB();

app.use("/api/rooms", roomRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port 5000`.yellow.bold
  )
);
