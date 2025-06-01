import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:py-30 py-10 lg:px-[170px] px-10 gap-10">
      <h2 className="text-2xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#3b4250] via-[#5e6572] to-[#646b79] inline-block text-transparent bg-clip-text">
        Steps to remove background <br /> image in seconds
      </h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 ">
        <div className="bg-[#ffffff] drop-shadow-md hover:scale-105 transition-all duration-500  rounded-lg py-8 px-8 w-[350px] flex flex-col gap-0.5">
          <div className="flex gap-3">
            <img src={assets.upload_icon} alt="" className="w-8" />
            <h2 className="text-xl font-semibold">Upload image</h2>
          </div>
          <p className="pl-10 text-sm font-semibold text-gray-500">
            This is a demo text, will replace it later. This is a demo..
          </p>
        </div>
        <div className="bg-[#ffffff] drop-shadow-md hover:scale-105 transition-all duration-500  rounded-lg py-8 px-8 w-[350px] flex flex-col gap-0.5">
          <div className="flex gap-3">
            <img src={assets.remove_bg_icon} alt="" className="w-8" />
            <h2 className="text-xl font-semibold">Remove background</h2>
          </div>
          <p className="pl-10 text-sm font-semibold text-gray-500">
            This is a demo text, will replace it later. This is a demo..
          </p>
        </div>
        <div className="bg-[#ffffff] drop-shadow-md hover:scale-105 transition-all duration-500  rounded-lg py-8 px-8 w-[350px] flex flex-col gap-0.5 ">
          <div className="flex gap-3">
            <img src={assets.download_icon} alt="" className="w-8" />
            <h2 className="text-xl font-semibold">Download image</h2>
          </div>
          <p className="pl-10 text-sm font-semibold text-gray-500">
            This is a demo text, will replace it later. This is a demo..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
