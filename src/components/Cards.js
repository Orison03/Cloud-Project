import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

function Cards() {
  return (
    <div className="grid md:grid-cols-3">
      <div className=" w-[90%] mx-auto bg-white rounded-lg drop-shadow-lg mt-24 mb-4 pb-16">
        {/* icon */}
        <IoCallOutline className="text-white bg-purple-600 p-4 w-16 rounded-lg h-14 relative top-[-1rem] left-4" />
        <p className="pl-5 py-6 text-2xl capitalize font-medium text-black-600">
          sales yard
        </p>
        <p className="pl-5 pt-2 pb-8 text-md md:text-base md:max-w-xs">
          Security dashboards and trend analysis tools let enterprises look into
          their environment to help it stay secure. Cloud versions are far more
          flexible than the tools that live on premises. For example, an
          enterprise can activate a service provider's online dashboard and
          quickly receive visibility into an online attack.
        </p>
        <button className="flex justify-center items-center w-[300px] mx-auto hover:border-normal text-normal max-w-[350px] bg-white text-purple-500 hover:text-white">
          contact us <IoIosArrowUp className="pl-2 w-6 font-bold" />
        </button>
      </div>
      <div className="w-[90%] mx-auto bg-white rounded-lg drop-shadow-lg mt-24 mb-4 pb-16">
        {/* icon */}
        <IoCallOutline className="text-white bg-purple-600 p-4 w-16 rounded-lg h-14 relative top-[-1rem] left-4" />
        <p className="pl-5 py-6 text-2xl capitalize font-medium text-black-600">
          media inquries
        </p>
        <p className="pl-5 pt-2 pb-8 text-md md:text-base md:max-w-xs">
          One way to achieve cloud redundancy is to pick a hosting option that
          distributes workloads across multiple data centers within a region.
          This is a low-cost strategy but has the least amount of redundancy.
          Another way is for users to mirror workloads across more than one
          region, which offers more redundancy but at a higher cost.
        </p>
        <button className="flex justify-center items-center w-[300px] mx-auto hover:border-normal text-normal max-w-[350px] bg-white text-purple-500 hover:text-white">
          contact us <IoIosArrowUp className="pl-2 w-6 font-bold" />
        </button>
      </div>
      <div className="w-[90%] mx-auto bg-white rounded-lg drop-shadow-lg mt-24 mb-24 pb-16">
        {/* icon */}
        <IoCallOutline className="text-white bg-purple-600 p-4 w-16 rounded-lg h-14 relative top-[-1rem] left-4" />
        <p className="pl-5 py-6 text-2xl capitalize font-medium text-black-600">
          technical support
        </p>
        <p className="pl-5 pt-2 pb-8 text-md md:text-base md:max-w-xs">
          Cloud security breaches and incidents still occur even as security
          technologies improve and service providers gird their networks. People
          can attack network hosts and web apps as fast as they can be
          fortified. Cloud administrators should test their environments and
          have the latest security audits and reports.
        </p>
        <button className="flex justify-center items-center w-[300px] mx-auto hover:border-normal text-normal max-w-[350px] bg-white text-purple-500 hover:text-white">
          contact us <IoIosArrowUp className="pl-2 w-6 font-bold" />
        </button>
      </div>
    </div>
  );
}

export default Cards