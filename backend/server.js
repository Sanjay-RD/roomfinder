import express from "express";
import dotenv from "dotenv";
import path from "path";
import rooms from "./data/rooms.js";
import connectDB from "./config/db.js";
import colors from "colors";
import roomRoutes from "./routes/roomRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();

// body parsel
app.use(express.json());

// connection to the database
connectDB();

app.use("/api/rooms", roomRoutes);
app.use("/api/user", userRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve();
// __dirname is use to access the current directory file which is not available if we are using ES-Module, it's only available using common js so to mimic this we use path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// serve static assets in production
if(process.env.NODE_ENV === 'production'){
  // set static folder
  app.use(express.static('frontend/build'))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
  })
}

// custome error handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on port 5000`.yellow.bold
  )
);
