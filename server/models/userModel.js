import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  photo: { type: String, require: true },
  fastName: { type: String },
  lastName: { type: String },
  creditBlance: { type: Number, default: 5 },
});

const userModel = mongoose.model.user || mongoose.model('user', userSchema)

export default userModel