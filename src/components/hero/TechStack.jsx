import React from "react";
import icons from "../../lib/constants/TechStackIcons";

function TechStack() {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <div className="tech-stack font-semibold text-md md:text-2xl pr-5 border-r border-r-neutral w-[20vw] md:w-[10vw]">
        Tech Stack
      </div>
      <div className="flex flex-row flex-wrap space-x-4 w-[50vw] md:w-full">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="tech-stack-item hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-8 h-8 md:w-12 md:h-12 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
