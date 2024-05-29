import React from "react";
import ImageLayout from "../components/about-me/ImageLayout";
import AboutMeText from "../components/about-me/AboutMeText";

function AboutMe() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center min-h-[90vh] lg:min-h-[70vh]"
    >
      <div className="relative mt-5 mb-5 flex flex-col items-center justify-center min-h-screen">
        <div className="relative flex items-center justify-center">
          <ImageLayout />
        </div>
        <AboutMeText />
      </div>
    </div>
  );
}

export default AboutMe;
