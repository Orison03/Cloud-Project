import React from "react";
import Slide from "react-reveal/Slide";
import { motion } from "framer-motion";

function About() {
  return (
    // cover or background
    <Slide bottom>
      <div name="about" className="w-[80%] mx-auto border-none-500 flex flex-col py-10 my-[6%]">
        {/* description */}
        <div className="text-center">
          <h2 className="pb-4 text-lg font-semibold tracking-wide">
            Trusted by developers across the world
          </h2>
          <p className="w-[95%] mx-auto text-base">
            Without a competent IT staff in place, it's difficult for any cloud
            management strategy to succeed. These individuals must possess
            knowledge of the proper tools and best practices while they keep in
            mind the cloud management goals of the business.
          </p>
        </div>
        {/* about grid block */}
        <div className="grid text-center mt-6 md:grid-cols-3">
          {/* start of block */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-[100%] mx-auto bg-purple-500 py-8 mb-4 md:w-[90%] capitalize rounded-lg"
          >
            <p className="text-4xl text-white">100%</p>
            <p className="tracking-wider text-white">completion</p>
          </motion.div>
          {/* end of block */}
          {/* start of block */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="w-[100%] mx-auto bg-purple-500 py-8 mb-4 capitalize md:w-[90%] rounded-lg"
          >
            <p className="text-4xl text-white">24/7</p>
            <p className="tracking-wider text-white">delivery</p>
          </motion.div>
          {/* end of block */}
          {/* start of block */}
          <motion.a
            whileHover={{ scale: 1.2 }}
            className="w-[100%] mx-auto bg-purple-500 py-8 mb-4 md:w-[90%] text-white capitalize rounded-lg"
          >
            <p className="text-4xl">100k</p>
            <p className="tracking-wider">transactions</p>
          </motion.a>
          {/* end of block */}
        </div>
      </div>
    </Slide>
  );
}

export default About;
