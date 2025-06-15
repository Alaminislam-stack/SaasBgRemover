import express from "express"
import { removeBgImage } from "../controllers/imageController.js"
import upload from "../middlewares/multer.js"
import authUser from '../middlewares/auth.js'


const imageRouter = express.Router()

// ...existing code...
imageRouter.post(
  '/remove-bg',
  authUser,                // প্রথমে user auth check হবে
  upload.single('image'),  // তারপর multer ফাইল নিবে
  removeBgImage
);
// ...existing code...


export default imageRouter