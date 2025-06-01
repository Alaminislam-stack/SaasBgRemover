import React from "react";
import { assets } from "../assets/assets";

const TryNaw = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:py-30 py-10 lg:px-[170px] px-10 gap-20">
      <h2 className="text-2xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#3b4250] via-[#5e6572] to-[#646b79] inline-block text-transparent bg-clip-text">
        See the magic. Try now
      </h2>
      <div>
        <input type="file" name="" id="upload1" hidden />
        <label
          htmlFor="upload1"
          className=" inline-flex flex-row justify-center items-center gap-2 px-6 py-3 rounded-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 hover:scale-105 transition-all duration-500"
        >
          <img src={assets.upload_btn_icon} alt="" className="w-5" />
          <p className=" text-[#f8fafc]">Upload Image</p>
        </label>
      </div>
    </div>
  );
};

export default TryNaw;
