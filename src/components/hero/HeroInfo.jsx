import React from "react";
import SocialIcons from "../SocialIcons";

function HeroInfo() {
  return (
    <>
      <div className="flex flex-col gap-y-[4vw] min-w-[70vw] md:min-w-[40vw] justify-center items-center">
        <div className="text-3xl md:text-4xl lg:text-5xl text-neutral font-bold text-center">
          Front-End Developer <span className="cursor-default">🧑‍💻</span>
        </div>
        <div className="text-xl md:text-2xl text-neutral md:w-[40vw] lg:w-[30vw] w-[70vw] text-center">
          I'm <span className="text-primary">Isaac Miles</span>, a front-end
          developer with a passion for creating web applications.
        </div>
        <SocialIcons />
      </div>
    </>
  );
}

export default HeroInfo;
