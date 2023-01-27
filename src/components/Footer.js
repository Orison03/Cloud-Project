import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <main className="relative mt-[700px] md:mt-64 w-full h-[850px] bg-purple-700 md:h-[450px]">
      {/* footer links */}
      <section className="grid grid-cols-2  mx-w-[1240px] mx-auto w-[90%] py-12 md:grid-cols-6 gap-y-8 border-b border-white">
        {/* box one */}
        <div className="">
          <h1 className="text-white uppercase font-semibold tracking-normal">
            solutions
          </h1>
          <ul className="text-white space-y-2 pt-2">
            <li className="">marketing</li>
            <li className="">analytics</li>
            <li className="">commerce</li>
            <li className="">data</li>
            <li className="">cloud</li>
          </ul>
        </div>
        {/* second box */}
        <div className="">
          <h1 className="text-white uppercase font-semibold tracking-normal">
            support
          </h1>
          <ul className="text-white space-y-2 pt-2">
            <li className="">pricing</li>
            <li className="">documtation</li>
            <li className="">guides</li>
            <li className="">API status</li>
          </ul>
        </div>
        {/* box three */}
        <div className="">
          <h1 className="text-white uppercase font-semibold tracking-normal">
            company
          </h1>
          <ul className="text-white space-y-2 pt-2">
            <li className="">about</li>
            <li className="">blog</li>
            <li className="">jobs</li>
            <li className="">press</li>
            <li className="">partners</li>
          </ul>
        </div>
        {/* box four */}
        <div className="">
          <h1 className="text-white uppercase font-semibold tracking-normal">
            legal
          </h1>
          <ul className="text-white space-y-2 pt-2">
            <li className="">claims</li>
            <li className="">privacy</li>
            <li className="">terms</li>
            <li className="">policies</li>
            <li className="">conditions</li>
          </ul>
        </div>
        {/* subscribe and form */}
        <div className="col-span-2 text-white">
          <h1 className="uppercase font-semibold tracking-normal">
            subscribe to our to our newsletter
          </h1>
          <p className="mt-4 text-sm ">
            The latest news, articles and resources, sent to your inbox weekly
          </p>
          <form className="w-full">
            <input
              type="email"
              placeholder="enter your email"
              className="w-full py-2 rounded-md px-3 my-4 focus:outline-none text-black"
            />
            <button className="flex justify-center items-center w-full mx-auto hover:border-normal text-normal bg-gradient-to-r from-purple-300 to-purple-700 text-white-500 hover:border-purple-500 border-white">
              subscribe
            </button>
          </form>
        </div>
      </section>
      {/* icons section */}
      <section className="text-white pt-8 mx-auto w-[90%] text-sm">
        <p className="text-center">
          2023 Workflow, ORISON did it. All rights reserved
        </p>
        {/* icons */}
        <div className="flex justify-between items-center w-[200px] mx-auto mt-6 text-lg">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Footer;
