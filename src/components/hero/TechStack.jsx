import React from "react";
import ReactIcon from "../../assets/icons/react.svg";
import HtmlIcon from "../../assets/icons/html5.svg";
import CssIcon from "../../assets/icons/css.svg";
import JavascriptIcon from "../../assets/icons/javascript.svg";
import TailwindIcon from "../../assets/icons/tailwind.svg";
import PythonIcon from "../../assets/icons/python.svg";
import JavaIcon from "../../assets/icons/java.svg";

const icons = [
  { src: HtmlIcon, alt: "HTML5" },
  { src: CssIcon, alt: "CSS" },
  { src: JavascriptIcon, alt: "JavaScript" },
  { src: ReactIcon, alt: "React" },
  { src: TailwindIcon, alt: "Tailwind" },
  { src: PythonIcon, alt: "Python" },
  { src: JavaIcon, alt: "Java" },
];

function TechStack() {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <div className="font-semibold text-md md:text-2xl pr-5 border-r border-r-neutral w-[20vw] md:w-[10vw]">
        Tech Stack
      </div>
      <div className="flex flex-row flex-wrap space-x-4 w-[50vw] md:w-full">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="hover:-translate-y-2 transition-transform duration-300 ease-in-out"
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-8 h-8 md:w-12 md:h-12 rounded-lg animate-slideInLeft"
              style={{
                animation: `slideInLeft 1s ease-out ${index * 0.3}s forwards`,
                visibility: "hidden",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
