import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

// Avoid overwrite model error during hot reload
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
