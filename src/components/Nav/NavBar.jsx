import React from "react";
import Logo from "../../assets/react.svg";

const NavBar = () => {
  return (
    <div className=" flex justify-between w-full px-20 py-2 bg-gray-100">
      <div className=" flex gap-2 items-center justify-center">
        <img src={Logo} alt="" />
        <h1 className=" text-lg font-bold text-blue-500">G-AI Bot</h1>
      </div>
      <div>
        <div className=" flex w-[40%] gap-8 justify-between text-lg font-medium">
          <a href="">Home</a>
          <a href="">About</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
