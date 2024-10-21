import mongoose from "mongoose";

const userShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "customer",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const User = mongoose.model("User", userShema);
export default User;
