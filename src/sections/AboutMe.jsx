import React from "react";
import ImageLayout from "../components/about-me/ImageLayout";
import AboutMeText from "../components/about-me/AboutMeText";

function AboutMe() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center max-h-[90vh] lg:max-h-[70vh]"
    >
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="relative flex items-center justify-center">
          <ImageLayout />
        </div>
        <AboutMeText />
      </div>
    </div>
  );
}

export default AboutMe;
