import React from "react";
import { BiAlarm } from "react-icons/bi";

function Pricing() {
  return (
    <main className="w-full h-[520px] bg-purple-800 mb-8">
      <div className="w-[90%] text-white mx-auto py-12">
        <h1 className="text-center uppercase text-3xl font-slant pb-6 tracking-wide md:text-4xl">
          pricing
        </h1>
        <p className="text-xl tracking-normal pb-6 md:text-2xl">
          The right price for your research
        </p>
        <p className="text-sm leading-6 pb-12">
          One of the biggest challenges for IT teams is to keep up with modern
          and distributed application designs. As applications evolve, IT teams
          must adjust their monitoring strategies. Effective cloud monitoring is
          a complex task.{" "}
        </p>
        <section className="w-[90%] mb-8 md:grid grid-cols-2 gap-4 absolute">
          {/* card one */}
          <div className="bg-white w-[90%] h-[410px] block mx-auto rounded-lg drop-shadow-lg mb-12 pt-2 md:h-[450px]">
            <p className="uppercase text-white text-xs ml-4 rounded-full bg-purple-500 w-24 h-8 flex items-center justify-center font-medium tracking-wide mb-5">
              standard
            </p>
            <p className="flex text-black ml-5 mb-8 font-bold text-3xl md:text-5xl">
              $67
              <span className="flex flex-col justify-end text-xs mb-1">
                /month
              </span>
            </p>
            <p className="text-black mb-8 text-sm ml-5 sm:text-md md:text-base">
              Accessing storage can slow application responsiveness.
            </p>
            <ul className="text-black ml-2 space-y-5">
              <li className="flex items-center justify-between w-[140px] md:w-[158px]">
                <BiAlarm className="w-6 h-4 text-purple-600" /> single person
              </li>
              <li className="flex items-center justify-between w-[160px] md:w-[178px]">
                <BiAlarm className="w-6 h-4 text-purple-600" /> course material
              </li>
              <li className="flex items-center justify-between w-[190px] md:w-[205px]">
                <BiAlarm className="w-6 h-4 text-purple-600" /> get free
                certificate
              </li>
            </ul>
            <div className="text-center">
              <button className="w-[200px] mt-10 drop-shadow-md mx-auto">
                get started
              </button>
            </div>
          </div>
          {/* card two */}
          <div className="bg-white pt-2 w-[90%] h-[410px] rounded-lg drop-shadow-lg mx-auto mb-12 md:h-[450px]">
            <p className="uppercase text-white text-xs ml-4 rounded-full bg-purple-500 w-24 h-8 flex items-center justify-center font-medium tracking-wide mb-5">
              premium
            </p>
            <p className="flex text-black ml-5 mb-8 font-bold text-3xl md:text-5xl">
              $99
              <span className="flex flex-col justify-end text-xs mb-1">
                /month
              </span>
            </p>
            <p className="text-black mb-8 text-sm ml-5 sm:text-md md:text-base">
              Accessing storage can slow application responsiveness.
            </p>
            <ul className="text-black ml-2 space-y-5">
              <li className="flex items-center justify-between w-[140px] md:w-[158px]">
                <BiAlarm className="w-6 h-4 text-purple-600" /> single person
              </li>
              <li className="flex items-center justify-between w-[160px] md:w-[178px]">
                <BiAlarm className="w-6 h-4 text-purple-600" /> course material
              </li>
              <li className="flex items-center justify-between w-[190px] md:w-[205px]">
                <BiAlarm className="w-6 h-4 text-purple-600" /> get free
                certificate
              </li>
            </ul>
            <div className="text-center">
              <button className="w-[200px] mt-10 drop-shadow-md mx-auto">
                get started
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Pricing;
