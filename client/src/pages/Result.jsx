import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const { resultImage, image } = useContext(AppContext);

  return (
    <div className="h-[100vh] flex flex-col  justify-between items-center lg:py-30 py-10 lg:px-[170px] px-10">
      <div className="bg-[#ffffff] rounded-md  drop-shadow-2xl">
        <div className=" flex flex-col lg:flex-row justify-center items-center gap-10 py-10 px-10">
          <div className="w-[50%] flex flex-col gap-3">
            <p className=" text-sm font-semibold">Original</p>
            {image && (
              <img
                className="border rounded-md"
                src={URL.createObjectURL(image)}
                alt=""
              />
            )}
          </div>
          <div className="w-[50%] flex flex-col gap-3">
            <p className="text-sm font-semibold">Background Removed</p>
            <div className=" border rounded-md border-gray-300 h-full relative bg-layer overflow-hidden">
              {resultImage && <img src={resultImage} alt="" />}

              {!resultImage && image && (
                <div className=" absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                  <div className=" border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin "></div>
                </div>
              )}
            </div>
          </div>
        </div>
        {resultImage && (
          <div className="flex justify-end items-center px-5 py-5 gap-4 text-sm">
            <button className="px-5 py-3 rounded-4xl bg-transparent border cursor-pointer hover:scale-105 transition-all duration-500">
              Try another image
            </button>
            <a
              href={resultImage}
              download
              className="px-5 py-3 rounded-4xl bg-transparent border cursor-pointer bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 hover:scale-105 transition-all duration-500"
            >
              Dowmloed image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
