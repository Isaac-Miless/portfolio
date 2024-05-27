import React from "react";

function AboutMeText() {
  return (
    <>
      <div className="mt-16">
        <span className="text-md md:text-md lg:text-lg font-bold text-primary">
          ABOUT ME
        </span>
      </div>
      <div className="mt-8 text-md md:text-md lg:text-lg text-neutral text-center w-[50%]">
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
