import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { BiSupport, BiBriefcase } from "react-icons/bi";

function Cards() {
  return (
    <div name="platform">
      <h1 className="mb-4 font-slant text-center text-2xl uppercase tracking-wider border-bottom border-black font-extrabold sm:text-4xl">
        platform
      </h1>
      <div className="grid lg:grid-cols-3">
        <div className="w-[90%] mx-auto bg-white rounded-lg drop-shadow-lg mt-6 mb-24 pb-16">
          {/* icon */}
          <IoCallOutline className="text-white bg-purple-600 p-4 w-16 rounded-lg h-14 relative top-[-1rem] left-4" />
          <p className="pl-5 py-6 text-2xl capitalize font-medium text-black-600">
            sales yard
          </p>
          <p className="pl-5 pt-2 pb-8 text-sm leading-7 md:text-base md:leading-7 lg:max-w-xs">
            Cloud security breaches and incidents still occur even as security
            technologies improve and service providers gird their networks.
            People can attack network hosts and web apps as fast as they can be
            fortified. Cloud administrators should test their environments and
            have the latest security audits and reports.
          </p>
          <button className="flex justify-center items-center w-[300px] mx-auto hover:border-normal text-normal max-w-[350px] bg-white text-purple-500 hover:text-white lg:w-[250px]">
            contact us <IoIosArrowUp className="pl-2 w-6 font-bold" />
          </button>
        </div>
        <div className="w-[90%] mx-auto bg-white rounded-lg drop-shadow-lg mt-6 mb-24 pb-16">
          {/* icon */}
          <BiBriefcase className="text-white bg-purple-600 p-4 w-16 rounded-lg h-14 relative top-[-1rem] left-4" />
          <p className="pl-5 py-6 text-2xl capitalize font-medium text-black-600">
            media queries
          </p>
          <p className="pl-5 pt-2 pb-8 text-sm leading-7 md:text-base md:leading-7 lg:max-w-xs">
            Cloud security breaches and incidents still occur even as security
            technologies improve and service providers gird their networks.
            People can attack network hosts and web apps as fast as they can be
            fortified. Cloud administrators should test their environments and
            have the latest security audits and reports.
          </p>
          <button className="flex justify-center items-center w-[300px] mx-auto hover:border-normal text-normal max-w-[350px] bg-white text-purple-500 hover:text-white lg:w-[250px]">
            contact us <IoIosArrowUp className="pl-2 w-6 font-bold" />
          </button>
        </div>
        <div className="w-[90%] mx-auto bg-white rounded-lg drop-shadow-lg mt-6 mb-24 pb-16">
          {/* icon */}
          <BiSupport className="text-white bg-purple-600 p-4 w-16 rounded-lg h-14 relative top-[-1rem] left-4" />
          <p className="pl-5 py-6 text-2xl capitalize font-medium text-black-600">
            technical support
          </p>
          <p className="pl-5 pt-2 pb-8 text-sm leading-7 md:text-base md:leading-7 lg:max-w-xs">
            Cloud security breaches and incidents still occur even as security
            technologies improve and service providers gird their networks.
            People can attack network hosts and web apps as fast as they can be
            fortified. Cloud administrators should test their environments and
            have the latest security audits and reports.
          </p>
          <button className="flex justify-center items-center w-[300px] mx-auto hover:border-normal text-normal max-w-[350px] bg-white text-purple-500 hover:text-white lg:w-[250px]">
            contact us <IoIosArrowUp className="pl-2 w-6 font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
