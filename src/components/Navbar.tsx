import React, { useState } from "react";
import { close, hamburgerMenu, logo } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[92px] bg-white border-b-[3px] border-bred text-dark z-50">
      {/* navbar content */}
      <div className="md:max-w-[1480x] max-w-[600x] w-full h-full m-auto flex justify-between items-center px-8">
        {/* logo */}
        <div>
          <a className="flex justify-between gap-1 items-center" href="/">
            <img src={logo} className="h-[60px]" alt="logo" />
            <span className="font-semibold font-nunito">at Bradley</span>
          </a>
        </div>
        {/* options */}
        <div className="hidden md:flex items-center text-lg">
          <ul className="flex gap-10">
            <li>
              <a className="underline-animation" href="#home">
                home
              </a>
            </li>
            <li>
              <a className="underline-animation" href="#about-us">
                about us
              </a>
            </li>
            <li>
              <a className="underline-animation" href="#join-us">
                join us
              </a>
            </li>
            <li>
              <a className="underline-animation" href="#resources">
                resources
              </a>
            </li>
          </ul>
        </div>

        {/* responsive-menu */}
        <div className="md:hidden cursor-pointer" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} alt="hamburger menu" />
        </div>
      </div>

      <div className={toggle ? "md:hidden absolute z-10 p-4 bg-white w-full px-8" : "hidden"}>
        <ul>
          <li className="p-4 hover:bg-gray-100">
            <a href="#home">
              <div className="w-full h-full">home</div>
            </a>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <a href="#about-us">
              <div className="w-full h-full">about us</div>
            </a>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <a href="#join-us">
              <div className="w-full h-full">join us</div>
            </a>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <a href="#resources">
              <div className="w-full h-full">resources</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
