import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import { FaRecycle, FaLeaf } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { MdLogin, MdLogout } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-[#0071dc] px-3 py-2 lg:px-8 text-white flex justify-between items-center">
        {/* Left */}
        <div className="flex items-center gap-x-3 shrink-0">
          <div className="hover:bg-[#06529a] p-2 rounded-full">
            <img src={logo} alt="" className="h-12" />
          </div>

          <div className="md:flex items-center gap-2 hidden hover:bg-[#109648] p-3 rounded-full">
            <Link to="/recycle-mart" className="flex items-center gap-2">
              <FaRecycle className="text-[17px]" />
              <p className="text-[16px] font-semibold">Go to RecycleMart</p>
            </Link>
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
          <div className="flex items-center gap-2 bg-[#109648] hover:bg-[#03933f] p-3.5 rounded-full">
            <FaLeaf className="text-[17px]" />
            <button className="text-[16px] font-semibold">GreenGuide</button>
          </div>
          <div className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full whitespace-nowrap">
            <MdLogout className="text-[20px] -rotate-90" />
            <p className="text-[16px] font-semibold">Sign in</p>
          </div>
          <div className="hover:bg-[#06529a] p-3 rounded-full">
            <AiOutlineShoppingCart className="w-7 h-7" />
            <Link to="/cart">
              <div>CART</div>
            </Link>
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className="bg-[#0071dc] mt-[1px] text-white px-3 py-2 lg:px-8 flex items-center gap-6">
        <div className="flex items-center gap-1 hover:underline">
          <BsPhone />
          <p className="text-[15px] font-bold">Place an order on the App</p>
        </div>
        <div className="flex items-center gap-1 hover:underline">
          <BiWorld />
          <p className="text-[15px] hover:underline">TX Address 87358</p>
        </div>
        <p className="hidden md:flex hover:underline">Deals on Phones</p>
        <p className="hidden md:flex font-bold hover:underline">
          Sale on Laptops
        </p>
      </div>
    </div>
  );
};

export default Navbar;
