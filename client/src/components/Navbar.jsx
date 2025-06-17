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
    <nav className="flex justify-between items-center py-5 lg:px-[170px] px-10">
      <div>
        <Link to={"/"}>
          <img src={assets.logo} alt="" className="w-[100px] lg:w-[160px] " />
        </Link>
      </div>
      <div className=" ">
        {isSignedIn ? (
          <div className=" flex gap-5 justify-center items-center">
            <button onClick={()=>naigate('/buy')} className="flex gap-1 justify-center items-center bg-gray-200 px-5 p-2 rounded-full text-sm cursor-pointer hover:scale-105 transition-all duration-500">
              <img
                src={assets.credit_icon}
                alt=""
                className=" w-[15px] h-[15px]"
              />
              <p>Credits : {credit}</p>
            </button>
            <p>Hi, {user.firstName}</p>
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
