import React from "react";

function AboutMeText() {
  return (
    <>
      <div className="mt-8">
        <span className="text-md md:text-xl font-bold text-primary">
          ABOUT ME
        </span>
      </div>
      <div className="mt-8 text-md lg:text-2xl text-neutral text-center w-[40vw] min-w-[40vw] md:w-[20vw]">
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
