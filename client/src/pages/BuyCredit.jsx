import React from "react";
import { assets, plans } from "../assets/assets";

const BuyCredit = () => {
  return (
    <div className="h-screen lg:py-30 py-10 lg:px-[170px] px-10 ">
      <div className="flex flex-col justify-center items-center gap-4">
        <button className=" px-8 py-1 border border-gray-500 rounded-2xl cursor-pointer">Our Plans</button>
        <h2 className="text-2xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#3b4250] via-[#5e6572] to-[#646b79] inline-block text-transparent bg-clip-text">
          Choose the plan that's right for you
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-5 mt-20">
        {plans.map((item, index) => (
          <div className=" w-[25%] bg-white px-10 py-10 rounded-lg border border-gray-300 drop-shadow-lg hover:scale-105 transition-all duration-500">
            <img src={assets.logo_icon} alt="" />
            <p className=" text-lg font-semibold mt-2">{item.id}</p>
            <p className=" text-sm font-semibold">{item.desc}</p>
            <p className=" my-3 font-semibold">
              <span className="text-3xl font-semibold">${item.price}</span>/ {item.credits} credits
            </p>
            <button className=" mt-2 w-full py-2 px-5 rounded-lg text-white bg-[#1f2937] cursor-pointer">Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
