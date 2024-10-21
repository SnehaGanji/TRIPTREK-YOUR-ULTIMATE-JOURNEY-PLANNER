import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  tourId: {
    type: mongoose.Types.ObjectId,
    ref: "Tour",
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Review = mongoose.model("Review", reviewSchema);
export default Review;
