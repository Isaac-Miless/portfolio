import React from "react";
import Blob from "../components/hero/Blob";
import HeroInfo from "../components/hero/HeroInfo";
import TechStack from "../components/hero/TechStack";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col gap-y-10 bg-slate-50 justify-center items-center h-[100vh]"
    >
      <div className="flex flex-row justify-evenly items-center">
        <HeroInfo />
        <Blob />
      </div>
      <TechStack />
    </div>
  );
};

export default Hero;
