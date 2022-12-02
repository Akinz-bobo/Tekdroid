import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "The first name is required"],
      trim: true,
    },

    lastName: {
      type: String,
      required: [true, "The last name is required"],
      trim: true,
    },
    username: {
      type: String,
      trim: true,
    },
    profilePicture: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "The email name is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "The password name is required"],
      trim: true,
    },
    passwordConfirm: {
      type: String,
      required: [true, "The password name is required"],
      trim: true,
    },
    averageRating: {
      type: Number,
      default: 0,
      max: 5,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", UserSchema);

module.exports = User;
