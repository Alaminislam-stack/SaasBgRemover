import React, { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center lg:py-30 py-10 lg:px-[170px] px-10 gap-20">
      <h2 className="text-2xl lg:text-4xl font-bold text-center bg-gradient-to-r from-[#3b4250] via-[#5e6572] to-[#646b79] inline-block text-transparent bg-clip-text">
        Remove Background With High <br /> Quality and Accuracy
      </h2>
      <div className=" relative w-full overflow-hidden max-w-3xl m-auto rounded-xl">
        <img
          src={assets.image_w_bg}
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0 )` }}
        />
        <img
          className=" absolute top-0 left-0 w-full h-full"
          src={assets.image_wo_bg}
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}% )` }}
        />
        <input
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full z-10 slider"
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default BgSlider;
