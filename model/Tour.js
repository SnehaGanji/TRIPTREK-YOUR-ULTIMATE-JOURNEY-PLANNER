import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  title: String,
  city: String,
  address: String,
  photo: String,
  description: String,
  price: Number,
  maxGroupSize: Number,
  review: {
    type: mongoose.Types.ObjectId,
    ref: "Review",
  },
  rating: {
    type: Number,
    required: false,
  },
  tourDate: {
    type: Date,
    required: true,
  },
  startLocation: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true,
    },
    description: String,
  },
  endLocation: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true,
    },
    description: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

tourSchema.index({ startLocation: "2dsphere" });
tourSchema.index({ endLocation: "2dsphere" });

export const Tour = mongoose.model("Tour", tourSchema);
export default Tour;
