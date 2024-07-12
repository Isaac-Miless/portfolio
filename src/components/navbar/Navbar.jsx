import React, { useState } from "react";
import Logo from "./Logo";
import NavOption from "./NavOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-stone-200 bg-opacity-50 backdrop-blur-md px-4 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <Logo />
      <div className="md:hidden relative">
        <button onClick={toggleMenu} className="relative z-10">
          <div
            className={`mr-2 transition-opacity duration-300 ease-in-out transform ${
              menuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
            }`}
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
          <div
            className={`mr-2 absolute inset-0 transition-opacity duration-300 ease-in-out transform ${
              menuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
            }`}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </div>
        </button>
      </div>
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 ${
          menuOpen ? "bg-stone-200 bg-opacity-90 backdrop-blur-md" : ""
        } absolute md:relative top-16 left-0 right-0 md:top-auto md:left-auto md:right-auto md:bg-transparent transition-transform transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0 md:transform-none w-full md:w-auto`}
      >
        {["home", "about", "projects", "contact"].map((text) => (
          <li key={text} className="md:pl-0 md:pb-0 pt-2 pl-4 pb-2">
            <NavOption text={text} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
