import React from "react";

export default function Intro() {
  return (
    <div className="flex w-screen mt-10 flex-col min-h-screen justify-center items-center bg-gradient-to-br from-[#000000] via-[#0a0010] to-[#0f001a] ">
      <span className="bg-[#1a122e] text-[#6a5ae0] px-3 py-1 rounded-3xl  uppercase">
        Ai-powered real estate
      </span>
      <h1 className="text-7xl font-bold mt-4 capitalize text-center text-white bg-clip-text text-transparent">
        The ultimate <br /> <span className="bg-gradient-to-r from-[#6a5ae0] to-[#a66cff] bg-clip-text text-transparent"> real estate </span>{" "}
        <br /> buying & selling <br /> experience
      </h1>
      <h6 className="text-center text-2xl text-[#d8d4e8] mt-4">
        Elevate your real estate decisions with data-driven <br /> insights and
        Al-powered analytics for maximum <br /> investment returns{" "}
      </h6>
    </div>
  );
}
