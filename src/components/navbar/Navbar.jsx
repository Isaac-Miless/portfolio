import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import NavOption from "./NavOption";
import { gsap } from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.to(".navbar-mobile", {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        opacity: 1,
        display: "flex",
      });
      gsap.to(".nav-item-mobile", {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.1,
      });
    } else {
      gsap.to(".nav-item-mobile", {
        duration: 0,
        opacity: 0,
      });
      gsap.to(".navbar-mobile", {
        x: "-100%",
        duration: 1,
        ease: "power2.in",
        opacity: 0,
        display: "none",
      });
    }
  }, [menuOpen]);

  return (
    <nav className="bg-stone-200 bg-opacity-50 backdrop-blur-md px-4 py-2 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <Logo />
      <div id="hamburger-container" className="md:hidden relative">
        <button
          className={`hamburger hamburger--collapse z-50 ${
            menuOpen ? "fixed right-4 top-2 is-active" : ""
          }`}
          type="button"
          onClick={toggleMenu}
          id="hamburger"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <ul
        className={`navbar-mobile md:hidden flex-col space-y-4 ${
          menuOpen &&
          "bg-stone-200 bg-opacity-95 backdrop-blur-md h-[100vh] w-full z-40 items-center justify-center no-scroll"
        } fixed top-0 left-0 right-0 w-full transform -translate-x-full`}
      >
        {["home", "about", "projects", "contact"].map((text) => (
          <li
            key={text}
            className={`nav-item-mobile ${
              menuOpen ? "opacity-0 text-2xl" : "opacity-100"
            } pt-2 pl-4 pb-2`}
          >
            <NavOption text={text} />
          </li>
        ))}
      </ul>
      <ul className="hidden md:flex md:flex-row space-x-8">
        {["home", "about", "projects", "contact"].map((text) => (
          <li key={text} className="opacity-100 md:pl-0 md:pb-0 pt-2 pl-4 pb-2">
            <NavOption text={text} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
