import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <div className="flex flex-row justify-center items-center space-x-5">
      <a
        href="https://www.linkedin.com/in/isaac-miles-378934193/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral hover:text-primary transition-colors duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
      </a>
      <a
        href="https://github.com/Isaac-Miless"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral hover:text-primary transition-colors duration-300 ease-in-out"
      >
        <FontAwesomeIcon icon={faGithub} size="2xl" />
      </a>
    </div>
  );
}

export default SocialIcons;
