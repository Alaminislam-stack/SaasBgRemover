import express from "express";
import multer from "multer";
import authUser from "../middlewares/auth.js";
import { removeBgImage } from "../controllers/imageController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post(
  "/api/image/remove-bg",
  authUser,
  upload.single("image"), // এই middleware অবশ্যই থাকতে হবে
  removeBgImage
);

export default router;