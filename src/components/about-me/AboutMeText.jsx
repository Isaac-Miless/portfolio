import React from "react";
import Header from "../Header";

function AboutMeText() {
  return (
    <>
      <div className="about-me-header mt-8">
        <Header title="ABOUT ME" />
      </div>
      <div className="about-me-txt mt-8 text-xl lg:text-2xl text-neutral text-center max-w-[70vw] md:min-w-[40vw] lg:max-w-[20vw]">
        Hello! I'm <span className="text-primary">Isaac</span>, a front-end
        developer and Software Engineering student at the University of Kent. My
        passion is creating applications that are both functional and visually
        appealing.
        <br />
        <br />I primarily work with React, Tailwind CSS, and Node.js. However,
        I'm always looking to learn new technologies and improve my skills!
      </div>
    </>
  );
}

export default AboutMeText;
