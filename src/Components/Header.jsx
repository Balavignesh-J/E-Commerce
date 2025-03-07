import React, { useState } from "react";
import Logo from "../Img/Logo.png";
import Profile from "../Img/Profile.png";
import Search from "../Img/Search.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchvalue, setsearchvalue] = useState("")
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    if (searchvalue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchvalue)}`)
    }
  }

  return (
    <>
      <div className="flex items-center justify-between w-full bg-blue-900 px-4 py-2 shadow-md">
        
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-12 h-12 object-contain" />
          <Link to="/" className="text-white font-bold text-2xl tracking-wide">
            𝓢𝓷𝓪𝓹 𝓢𝓱𝓸𝓹
          </Link>
        </div>

        <form className="flex items-center w-1/3 max-w-[400px] bg-white rounded-lg overflow-hidden shadow-sm" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Search for products"
            onChange={(event) => setsearchvalue(event.target.value)}
            className="flex-1 px-3 py-2 outline-none text-gray-800"
          />
          <button className="bg-blue-600 p-2 flex items-center justify-center hover:bg-blue-700 transition duration-300" type="submit">
            <img src={Search} alt="Search" className="w-6 h-6" />
          </button>
        </form>

        <Link to="/profile">
          <img
            src={Profile}
            title="Profile"
            alt="profile"
            className="w-10 h-10 rounded-full border-2 border-white hover:border-blue-400 cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
};

export default Header;

