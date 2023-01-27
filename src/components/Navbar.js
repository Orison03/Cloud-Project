import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleClick = () => {
    setNav(!nav);
  };

  const hanldeClose = () => {
    setNav(true);
  };
  return (
    <div className="relative w-screen h-[80px] bg-white-200 z-10 md:drop-shadow">
      <div className="flex justify-between px-2 w-full h-full items-center">
        {/* logo */}
        <div className="flex items-center">
          <h1 className="font-slant capitalize text-3xl font-bold text-purple-500 ml-4 tracking-wider sm:text-3xl lg:text-4xl">
            cloud
          </h1>
        </div>
        <div>
          <ul className="hidden md:flex justify-between align-center space-x-3 text-sm pl-8 lg:space-x-6">
            <li className="hover:border-b">
              <Link to="home" smooth={true} offset={50} duration={500}>
                home
              </Link>
            </li>
            {/* about */}
            <li className="hover:border-b">
              <Link to="about" smooth={true} offset={-30} duration={500}>
                about
              </Link>
            </li>
            {/* support */}

            <li className="hover:border-b">
              <Link to="support" smooth={true} offset={0} duration={500}>
                support
              </Link>
            </li>
            {/* platform */}
            <li className="hover:border-b">
              <Link to="platform" smooth={true} offset={-20} duration={500}>
                platform
              </Link>
            </li>
            {/* pricing */}
            <li className="hover:border-b">
              <Link to="pricing" smooth={true} offset={40} duration={500}>
                pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden font-family md:flex justify-between items-center">
          <button className="bg-transparent border-none text-black pb-2 hover:bg-transparent sm:text-sm md:text-base">
            sign in
          </button>
          <button className="hover:border-normal sm:text-sm md:px-4 py-1 text-base mt-1 text-sm lg:px-4  text-small">
            sign up
          </button>
        </div>
        <div className="mr-6 md:hidden cursor-pointer" onClick={handleClick}>
          {nav ? (
            <HiMenu className="w-10 h-8" />
          ) : (
            <AiOutlineClose className="w-10 h-8 font-bolder" />
          )}
        </div>
      </div>
      <ul
        className={
          nav
            ? "hidden"
            : "absolute bg-white w-full pl-4 flex-col justify-between drop-shadow md:hidden"
        }
      >
        <li className="py-4 text-lg font-normal tracking-wider">
          <Link
            to="home"
            smooth={true}
            offset={50}
            duration={500}
            onClick={hanldeClose}
          >
            home
          </Link>
        </li>
        {/* about */}
        <li className="py-4 text-lg font-normal tracking-wider">
          <Link
            to="about"
            smooth={true}
            offset={-30}
            duration={500}
            onClick={hanldeClose}
          >
            about
          </Link>
        </li>
        {/* support */}

        <li className="py-4 text-lg font-normal tracking-wider">
          <Link
            to="support"
            smooth={true}
            offset={0}
            duration={500}
            onClick={hanldeClose}
          >
            support
          </Link>
        </li>
        {/* platform */}
        <li className="py-4 text-lg font-normal tracking-wider">
          <Link
            to="platform"
            smooth={true}
            offset={-20}
            duration={500}
            onClick={hanldeClose}
          >
            platform
          </Link>
        </li>
        {/* pricing */}
        <li className="py-4 text-lg font-normal tracking-wider">
          <Link
            to="pricing"
            smooth={true}
            offset={40}
            duration={500}
            onClick={hanldeClose}
          >
            pricing
          </Link>
        </li>
        {/* btn container */}
        <div className="font-family flex flex-col justify-between mb-16 mt-6 max-w-2xl items-center space-y-6">
          <button className="flex justify-center items-center w-[300px] hover:border-normal text-normal max-w-[350px]">
            sign in <AiOutlineRight className="pl-2 w-6 font-bold" />
          </button>
          <button className="flex justify-center items-center w-[300px] hover:border-normal text-normal max-w-[350px] bg-white text-purple-500 hover:text-white">
            sign up <IoIosArrowUp className="pl-2 w-6 font-bold" />
          </button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
