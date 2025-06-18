import React from "react";
import { assets } from "../assets/assets";
import { data, Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);
  const naigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <nav className="flex justify-between items-center py-5 lg:px-[170px] px-5">
      <div>
        <Link to={"/"}>
          <img src={assets.logo} alt="" className="w-[100px] lg:w-[160px] " />
        </Link>
      </div>
      <div className=" ">
        {isSignedIn ? (
          <div className=" flex lg:gap-5 gap-2 justify-center items-center">
            <button onClick={()=>naigate('/buy')} className="flex gap-1 px-2 py-1 lg:px-3 lg:py-2 justify-center items-center bg-gray-200  rounded-full text-sm cursor-pointer hover:scale-105 transition-all duration-500">
              <img
                src={assets.credit_icon}
                alt=""
                className=" lg:w-[15px] lg:h-[15px] w-[10px] h-[10px]"
              />
              <p className="lg:text-[15px] text-[10px]">Credits : {credit}</p>
            </button>
            <p className="text-sm hidden sm:block">Hi, {user.firstName}</p>
            <UserButton />
          </div>
        ) : (
          <button
            onClick={() => openSignIn({})}
            className="bg-[#000000] text-[10px] lg:text-lg cursor-pointer px-5 py-2 rounded-4xl font-semibold text-white flex justify-center items-center gap-3"
          >
            Get started{" "}
            <span>
              <img src={assets.arrow_icon} alt="" className="lg:w-[20px] lg:h-[20px] w-[10px] h-[10px]" />
            </span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
