import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";

const EMAIL = "isaacmiles36@gmail.com";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col text-md md:text-xl p-10 min-h-[30vh]"
    >
      <Header title="CONTACT" />
      <div className="flex flex-row text-xl lg:text-2xl gap-x-4 items-center justify-left mt-8 text-neutral text-left w-70vw md:w-[60vw]">
        I'm currently looking for new opportunities! If you'd like to get in
        touch, feel free to send me an email 🤠
      </div>
      <div className="flex flex-row gap-5 justify-left items-center mt-5 group cursor-pointer">
        <a href={`mailto:${EMAIL}`}>
          <FontAwesomeIcon
            className={`text-neutral group-hover:text-primary transition-colors duration-300 ease-in-out`}
            icon={faEnvelope}
            size="2x"
          />
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="text-primary text-xl lg:text-2xl group-hover:translate-x-2 transition-transform duration-300 ease-in-out"
        >
          {EMAIL}
        </a>
      </div>
    </div>
  );
}

export default Contact;
