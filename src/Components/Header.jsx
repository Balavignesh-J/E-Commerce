import React, { useState } from "react";
import Logo from "../Img/Logo.png";
import Profile from "../Img/Profile.png";
import Search from "../Img/Search.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchvalue, setsearchvalue] = useState("")
  const navigate = useNavigate()

  const handlesubmit = (e)=>{
    e.preventDefault()
    if (searchvalue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchvalue)}`)
    }
  }
  

  return (
    <>
      <div className="flex flex-row justify-between w-full items-center bg-blue-900 h-15">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-14 h-14 ml-2" />
          <Link to="/">
            <h1 className="font-bold text-white">𝓢𝓷𝓪𝓹 𝓢𝓱𝓸𝓹</h1>
          </Link>
        </div>

        <form className="flex justify-center m-3" onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Search for products"
            onChange={(event)=>setsearchvalue(event.target.value)}
            className=" border border-black p-2 bg-stone-100 rounded-l-lg w-150"
          />

          <button className=" bg-blue-600 rounded-r-lg w-10 flex justify-center items-center cursor-pointer" type="submit">
            <img src={Search} alt="Search" className="w-7 h-7" />
          </button>
        </form>

        <Link to="/profile">
        <img
          src={Profile}
          title="Profile"
          alt="profile"
          className="w-10 h-10 border border-blue-50 mr-2"
        /></Link>
      </div>
    </>
  );
};

export default Header;
