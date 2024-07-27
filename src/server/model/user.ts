import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   id: {
      type: String,
      required: [true, "User ID is required"],
      unique: true,
   },
   firstName: {
      type: String,
      required: [true, "First Name is required"],
   },
   lastName: {
      type: String,
      required: [true, "Last Name is required"],
   },
   email: {
      type: String,
      required: [true, "Email ID is required"],
   },
   password: {
      type: String,
      required: [true, "Password is required"],
   },
   age: {
      type: Number,
   },
   bio: {
      type: String,
   },
   profilePic: {
      type: String,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
   dateOfBirth: {
      type: String,
   },
   postIds: {
      type: [String],
   },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
