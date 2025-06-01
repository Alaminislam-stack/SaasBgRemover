import React from 'react'
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-between items-center lg:py-30 py-10 lg:px-[170px] px-10">
          <div className="flex flex-col gap-5 lg:w-[50%] w-full">
            <h1 className="text-4xl sm:text-5xl font-bold leading-15">
              Remove the <br />{" "}
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                background
              </span>{" "}
              from <br /> images for free.
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.
            </p>
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
          <div className="lg:w-[50%] w-full flex justify-center items-center ">
            <img src={assets.header_img} alt="" className="" />
          </div>
        </div>
  )
}

export default Header