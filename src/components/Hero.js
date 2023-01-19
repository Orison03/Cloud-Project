import React from 'react'
import BackgroundImg from "../assets/cyber-bg.png"

function Hero() {
  return (
    <div className="w-full">
      <div className="md:grid mt-20 mb-5 md:grid-cols-2">
        <div className="flex flex-col justify-between item-center mb-10 text-center mt-2 tracking-wide lg:mt-10">
          <p className="capitalize mt-10 mb-6 text-lg lg:text-2xl">
            unique sequencing & production
          </p>
          <h1 className="font-medium text-3xl capitalize mb-4 lg:text-4xl">
            cloud management
          </h1>
          <p className="mt-4 text-normal">Its's our tech brand</p>
          <button className="w-[300px] m-auto mt-10 drop-shadow-md">
            get started
          </button>
        </div>
        {/* cloud image */}
        <div className="w-full h-full my-6">
          <img src={BackgroundImg} alt="cloud background" />
        </div>
        {/* end of cloud image */}
      </div>
    </div>
  );
}

export default Hero