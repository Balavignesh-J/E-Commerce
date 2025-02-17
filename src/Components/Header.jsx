import React from "react";
import Logo from "../Img/Logo.png";
import Profile from "../Img/Profile.png";
import Search from "../Img/Search.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-full items-center bg-blue-400 h-15">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-20 h-20 ml-2" />
          <Link to="/">
            <h1 className="font-bold">Happy.in</h1>
          </Link>
        </div>

        <div className="flex justify-center m-3">
          <input
            type="text"
            placeholder="Search for products"
            className=" border border-black p-2 bg-stone-100 rounded-l-lg w-150"
          />

          <button className=" bg-blue-600 rounded-r-lg w-10 flex justify-center items-center cursor-pointer">
            <img src={Search} alt="Search" className="w-5 h-5" />
          </button>
        </div>

        <img
          src={Profile}
          title="Profile"
          alt="profile"
          className="w-10 h-10 border border-blue-50 mr-2"
        />
      </div>
    </>
  );
};

export default Header;
