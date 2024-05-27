import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EMAIL = "isaacmiles36@gmail.com";

function Contact() {
  return (
    <div id="contact" className="flex flex-col p-10 h-[30vh]">
      <div className="text-md md:text-md lg:text-lg text-left font-bold text-primary">
        CONTACT ME
      </div>
      <div className="flex flex-row gap-x-4 items-center justify-left mt-8 text-md md:text-md lg:text-lg text-neutral text-left w-[60%]">
        I'm currently looking for new opportunities! If you'd like to get in
        touch, feel free to send me an email 🤠
      </div>
      <div className="flex flex-row gap-5 justify-left items-center mt-5 group">
        <a
          href={"mailto:" + EMAIL}
          className="text-neutral group-hover:text-primary transition-colors duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a
          href={"mailto:" + EMAIL}
          className="text-primary group-hover:translate-x-2 transition-transform duration-300 ease-in-out group"
        >
          {EMAIL}
        </a>
      </div>
    </div>
  );
}

export default Contact;
