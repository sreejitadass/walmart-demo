import React from "react";
import { GoSearch } from "react-icons/go";
import { MdLogin, MdLogout } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import logo from "./../assets/logoRecycle.png";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-[#109648] px-3 py-2 lg:px-8 text-white flex justify-between items-center">
        {/* Left */}
        <div className="flex items-center gap-x-3 shrink-0">
          <div className="hover:bg-[#0b6330] p-2 rounded-full">
            <img src={logo} alt="" className="h-12" />
          </div>
        </div>
        {/* Middle */}
        <div className="hidden relative lg:flex items-center flex-1 mx-6">
          <input
            type="search"
            className="rounded-full py-1.5 pl-10 outline-0 flex-1"
            placeholder="Search..."
          />
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#ffc220] p-1.5 rounded-full z-10">
            <GoSearch className="text-black" />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-2 hover:bg-[#0b6330] p-3 rounded-full">
            <MdLogin className="text-[17px] rotate-90" />
            <p className="text-[16px] font-semibold">Register</p>
          </div>
          <div className="flex items-center gap-2 hover:bg-[#0b6330] p-3 rounded-full whitespace-nowrap">
            <MdLogout className="text-[20px] -rotate-90" />
            <p className="text-[16px] font-semibold">Sign in</p>
          </div>
          <div className="hover:bg-[#0b6330] p-3 rounded-full">
            <AiOutlineShoppingCart className="w-7 h-7" />
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className="bg-[#109648] mt-[1px] text-white px-3 py-2 lg:px-8 flex items-center gap-6">
        <div className="flex items-center gap-1 hover:underline">
          <BsPhone />
          <p className="text-[15px] font-bold">Place an order on the App</p>
        </div>
        <div className="flex items-center gap-1 hover:underline">
          <BiWorld />
          <p className="text-[15px] hover:underline">TX Address 87358</p>
        </div>
        <p className="hidden md:flex hover:underline">
          Recycled and Upcycled Goods
        </p>
      </div>
    </div>
  );
};

export default Navbar;
