import React from "react";
import logo from "../assets/shopee.png";
import { GrFormNextLink } from "react-icons/gr";


const Footer = () => {
  return (
    <div className="mt-[100px] bg-[#0b1d39] lg:h-[400px] md:h-[900px] ">
      <div className="md:flex md:justify-between flex-wrap  w-[80%] bg-red pt-[100px] mx-auto text-white">
        <div className="md:w-[300px] flex flex-col justify-center items-center gap-3 ">
          <img className="w-9" src={logo} alt="" />
          <p className="text-justify">
          Order Anywhere, Anytime: Your Ultimate Mobile Ordering Solution.
          Revolutionizing Ordering: Your Mobile Food Companion
          </p>
          <div className="flex gap-2 text-3xl font-bold">
            <h1>
              {" "}
              <i className="fa-brands fa-facebook"></i>{" "}
            </h1>
            <h1>
              <i className="fa-brands fa-twitter"></i>{" "}
            </h1>
          </div>
        </div>
        <div className="">
          <h1 className="pt-4 text-2xl">Items Products</h1>
          <div className="pt-4 ">
            <h1 className="flex items-center gap-2 cursor-pointer hover:text-xl hover:text-red-400"><GrFormNextLink/> Mobile</h1>
            <h1 className="flex items-center gap-2 cursor-pointer hover:text-xl hover:text-red-400"><GrFormNextLink/> Desktop</h1>
            <h1 className="flex items-center gap-2 cursor-pointer hover:text-xl hover:text-red-400"><GrFormNextLink/> Watch</h1>
            <h1 className="flex items-center gap-2 cursor-pointer hover:text-xl hover:text-red-400"><GrFormNextLink/>Eletronic</h1>
          
          </div>
        </div>
        <div>
          <h1 className=" pt-4 text-2xl">Populer brands</h1>
          <h1 className="flex items-center gap-2 cursor-pointer hover:text-xl hover:text-red-400"><GrFormNextLink/> Apple</h1>
          <h1 className="flex items-center gap-2 cursor-pointer hover:text-xl hover:text-red-400"><GrFormNextLink/> Sony</h1>
          <h1 className="flex items-center gap-2 cursor-pointer hover:text-xl hover:text-red-400"><GrFormNextLink/> Oppo</h1>
          <h1 className="flex items-center gap-2 cursor-pointer hover:text-xl hover:text-red-400"><GrFormNextLink/> Google</h1>
          <h1 className="flex items-center gap-2 cursor-pointer hover:text-xl hover:text-red-400"><GrFormNextLink/> intel</h1>
        </div>
      </div>
      <hr className="" />
      <div className="flex justify-center text-[#918987] mt-3 md:text-xl">
        Copyright © 2023 Online Mobile Ordering. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
