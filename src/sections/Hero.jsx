import React from "react";
import Blob from "../components/hero/Blob";
import HeroInfo from "../components/hero/HeroInfo";
import TechStack from "../components/hero/TechStack";

const Hero = () => {
  return (
    <div className="relative">
      <div
        id="home"
        className="flex flex-col gap-y-10 bg-stone-200 justify-center items-center h-[100vh] w-full m-0 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row-reverse md:gap-y-0 gap-y-5 justify-evenly items-center w-full">
          <Blob />
          <HeroInfo />
        </div>
        <TechStack />
      </div>

      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        class="relative -top-[2vh]"
      >
        <path
          d="M 0,400 L 0,150 C 95.31100478468898,136.00956937799043 190.62200956937795,122.01913875598089 288,143 C 385.37799043062205,163.9808612440191 484.82296650717706,219.93301435406698 569,210 C 653.1770334928229,200.06698564593302 722.0861244019138,124.24880382775119 819,102 C 915.9138755980862,79.75119617224881 1040.8325358851675,111.07177033492823 1149,128 C 1257.1674641148325,144.92822966507177 1348.5837320574162,147.46411483253587 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#e7e5e4"
          fill-opacity="1"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
