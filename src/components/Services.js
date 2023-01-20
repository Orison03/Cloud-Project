import React from "react";
import { MdSecurity } from "react-icons/md";
import { BsBagDash } from "react-icons/bs";
import { AiOutlineCloud, AiOutlineApi } from "react-icons/ai";
import Fade from "react-reveal/Fade";

function Services() {
  return (
    <Fade bottom big>
      <div className="mx-auto w-[80%] max-w-4xl">
        {/* data services */}
        <div className="md:flex flex-col items-center bg-purple-500 drop-shadow-xl text-white  rounded-xl pt-4 py-6 mb-8 px-2">
          <h1 className="pb-6 text-center text-xl tracking-wider sm:tracking-[1px]">
            Data Services
          </h1>
          <div className="block space-y-3 text-normal sm:flex items-center justify-between md:space-x-12 lg:space-x-24 ">
            <p className="capitalize flex items-center justify-center mt-3">
              <BsBagDash className="font-black mr-2" />
              dashboard design
            </p>
            <p className="capitalize flex items-center justify-center">
              <MdSecurity className="font-black mr-2" />
              app security
            </p>
            <p className="capitalize flex items-center justify-center">
              <AiOutlineCloud className="mr-1 font-black" />
              cloud data
            </p>
            <p className="capitalize flex items-center justify-center">
              <AiOutlineApi className="font-black mr-1" />
              API
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Services;
