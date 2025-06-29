import React from "react";

export default function Header() {
  return (
    <div className="bg-black px-14 py-4 flex justify-between w-screen fixed top-0">
      <div className="w-[20%]">
        <span className="text-[#5D40D4CC] font-bold text-xl">
          the<span className="text-white">brik</span>.ai
        </span>
      </div>
      <div className="flex gap-x-14 w-[80%] items-center justify-end">
        <span className="text-white text-sm font-medium">About</span>
        <span className="text-white text-sm font-medium">Services</span>
        <span className="text-white text-sm font-medium">Careers</span>
        <span className="text-white text-sm font-medium">Team</span>
        <span className="text-white text-sm font-medium">Contact</span>
        <button className="bg-[#5d3fd3] text-sm font-medium px-3.5 py-2.5 text-white rounded-xl">
          Book a Call
        </button>
      </div>
    </div>
  );
}
