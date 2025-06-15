import axios from "axios";
import fs from "fs";
import FromData from "form-data";
import userModel from "../models/userModel.js";


// controller fun to remove bg from image
const removeBgImage = async (req, res) => {
  try {
    const clerkId = req.clerkId;
    const user = await userModel.findOne({ clerkId });

    if (!user) {
      return res.json({ success: false, message: "user not found" });
    }

    if (user.creditBlance === 0) {
      return res.json({
        success: false,
        message: "no creadit balance",
        creditBlance: user.creditBlance,
      });
    }

    // Check if file exists
    if (!req.file) {
      return res.json({ success: false, message: "No file uploaded" });
    }

    const imagePath = req.file.path;

    // reding the image file
    const imageFile = fs.createReadStream(imagePath);

    const fromdata = new FromData();
    fromdata.append("image_file", imageFile);

    const { data } = await axios.post("https://clipdrop-api.co/remove-background/v1",
      fromdata,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;
    await userModel.findByIdAndUpdate(user._id, {
      creditBlance: user.creditBlance - 1,
    });

    res.json({success:true,resultImage,creditBlance:user.creditBlance-1,message:'background removed'})

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { removeBgImage };
