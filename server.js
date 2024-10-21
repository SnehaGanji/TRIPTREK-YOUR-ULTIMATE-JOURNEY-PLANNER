import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import userRouter from "./router/UserRouter.js";
import tourRouter from "./router/TourRouter.js";
import reviewRouter from "./router/ReviewRouter.js";
import conatctRouter from "./router/ContactRouter.js";
import bookingRouter from "./router/BookingRouter.js";

const app = express("express");
app.use(express.static("./public/"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const BASEURL = "mongodb://127.0.0.1:27017/aloha";
const Connection = () => {
  try {
    mongoose.connect(BASEURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

Connection();

app.use("/user", userRouter);
app.use("/tour", tourRouter);
app.use("/review", reviewRouter);
app.use("/contact", conatctRouter);
app.use("/booking", bookingRouter);

app.listen(5000, () => {
  console.log("server connected on port 5000");
});
