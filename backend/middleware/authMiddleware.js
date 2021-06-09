import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";
import jwt from "jsonwebtoken";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  //   console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded);
      req.user = await User.findById(decoded.id).select("-password");
      //   console.log(req.user);
      next();
    } catch (err) {
      console.error(err);
      res.status(401);
      throw new Error("Not Authorized. token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized. token failed");
  }
});

export default protect;
