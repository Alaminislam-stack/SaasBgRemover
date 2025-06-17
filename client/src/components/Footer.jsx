import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <div className=" hidden lg:flex justify-between items-center py-5 lg:px-[170px] px-10">
      <div className=" flex justify-center items-center gap-5">
        <Link to={"/"}>
          <img src={assets.logo} alt="" className="" />
        </Link>
        <div className=" w-[0.5px] h-[25px] bg-[#9ca3af]"></div>
        <p className="text-[#9ca3af] text-sm font-semibold">Copyright ALamin | All right reserved.</p>
      </div>
      <div className="flex justify-center items-center gap-5">
        <a
          href="https://www.facebook.com/MdAlaminIslam.Web.Dev"
          target="_blank"
          className="bg-white p-2 rounded-full drop-shadow-md hover:scale-110 transition-all duration-300"
        >
          <FaFacebookF className=" size-5 fill-black" />
        </a>
        <a
          href="https://github.com/Alaminislam-stack"
          target="_blank"
          className="bg-white p-2 rounded-full drop-shadow-md hover:scale-110 transition-all duration-300"
        >
          <FaGithub className=" size-5 fill-black" />
        </a>
        <a

          href="https://x.com/IslamAlami12718"
          target="_blank"
          className="bg-white p-2 rounded-full drop-shadow-md hover:scale-110 transition-all duration-300"
        >
          <FaTwitter className=" size-5 fill-black" />
        </a>
      </div>
    </div>
    <div className="lg:hidden flex flex-col justify-between items-center gap-5">
      <div className=" flex justify-between items-center py-5 px-10">
      <div className=" flex justify-center items-center gap-5">
        <Link to={"/"}>
          <img src={assets.logo} alt="" className="" />
        </Link>
        <div className=" w-[0.5px] h-[25px] bg-[#9ca3af]"></div>
       <div className="flex justify-center items-center gap-5">
        <a
          href="https://www.facebook.com/MdAlaminIslam.Web.Dev"
          target="_blank"
          className="bg-white p-2 rounded-full drop-shadow-md hover:scale-110 transition-all duration-300"
        >
          <FaFacebookF className=" size-5 fill-black" />
        </a>
        <a
          href="https://github.com/Alaminislam-stack"
          target="_blank"
          className="bg-white p-2 rounded-full drop-shadow-md hover:scale-110 transition-all duration-300"
        >
          <FaGithub className=" size-5 fill-black" />
        </a>
        <a
        
          href="https://x.com/IslamAlami12718"
          target="_blank"
          className="bg-white p-2 rounded-full drop-shadow-md hover:scale-110 transition-all duration-300"
        >
          <FaTwitter className=" size-5 fill-black" />
        </a>
      </div>
      </div>
      
    </div>
     <p className="text-[#9ca3af] lg:text-sm text-[10px] font-semibold">Copyright ALamin | All right reserved.</p>
    </div>
    </>
  );
};

export default Footer;
