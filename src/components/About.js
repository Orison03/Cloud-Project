import React from "react";
import Fade from "react-reveal/Fade";

function About() {
  return (
    // cover or background
    <Fade bottom big>
      <div className="w-[80%] mx-auto drop-shadow-md border-2 border-none-500 flex flex-col py-10 rounded-3xl my-[8%]">
        {/* description */}
        <div className="text-center">
          <h2 className="pb-4 text-lg font-semibold tracking-wide">
            Trusted by developers across the world
          </h2>
          <p className="w-[70%] mx-auto text-base">
            Without a competent IT staff in place, it's difficult for any cloud
            management strategy to succeed. These individuals must possess
            knowledge of the proper tools and best practices while they keep in
            mind the cloud management goals of the business.
          </p>
        </div>
        {/* about grid block */}
        <div className="grid text-center mt-6 md:grid-cols-3">
          {/* start of block */}
          <div className="w-[50%] mx-auto bg-purple-500 py-8 mb-4 md:w-[70%] capitalize rounded-lg">
            <p className="text-4xl text-white">100%</p>
            <p className="tracking-wider text-white">completion</p>
          </div>
          {/* end of block */}
          {/* start of block */}
          <div className="w-[50%] mx-auto bg-purple-500 py-8 mb-4 capitalize md:w-[70%] rounded-lg">
            <p className="text-4xl text-white">24/7</p>
            <p className="tracking-wider text-white">delivery</p>
          </div>
          {/* end of block */}
          {/* start of block */}
          <div className="w-[50%] mx-auto bg-purple-500 py-8 mb-4 md:w-[70%] text-white capitalize rounded-lg">
            <p className="text-4xl">100k</p>
            <p className="tracking-wider">transactions</p>
          </div>
          {/* end of block */}
        </div>
      </div>
    </Fade>
  );
}

export default About;
