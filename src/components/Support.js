import React from "react";
import BackgroundSupport from "../assets/support.jpg";
import Fade from "react-reveal/Fade";

function Support() {
  return (
    <main className="w-full h-[400px] my-20 mx-auto">
      <div className="w-full h-[400px] bg-gray-900/50 relative">
        <img
          className="w-full h-[400px] mix-blend-color-burn object-fit md:w-full object-cover"
          src={BackgroundSupport}
          alt="background support"
        />
        <Fade left big className="text-black">
          <h1 className="absolute top-16 text-white left-10 uppercase tracking-wide text-4xl font-slant md:left-32">
            support
          </h1>
          <p className="absolute top-32 text-white left-10 tracking-wide text-xl leading-6 md:text-2xl md:left-32">
            Finding the right team
          </p>
          <p className="absolute top-44 text-white left-10 tracking-wide text-sm leading-6 md: max-w-[690px] md:text-lg md:left-32">
            Start with a cloud migration strategy that incorporates proper
            documentation and ensures only necessary data and workloads are
            moved off premises. Address multi-cloud management, self-service
            portals for users and other forms of provisioning and orchestration.
          </p>
        </Fade>
      </div>
    </main>
  );
}

export default Support;
