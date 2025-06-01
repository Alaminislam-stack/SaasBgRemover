import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <nav className="flex justify-between items-center py-5 lg:px-[170px] px-10">
      <div>
        <Link to={"/"}>
          <img src={assets.logo} alt="" className="w-[160px]" />
        </Link>
      </div>
      <div>
        {isSignedIn ? (
          <div> <UserButton /> </div>
        ) : (
          <button
            onClick={() => openSignIn({})}
            className="bg-[#000000] cursor-pointer px-5 py-2 rounded-4xl font-semibold text-white flex justify-center items-center gap-3"
          >
            Get started{" "}
            <span>
              <img src={assets.arrow_icon} alt="" />
            </span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
