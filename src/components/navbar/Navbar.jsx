import React, { useState, useEffect, useRef } from "react";
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
      gsap.to(".navbar", {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        opacity: 1,
        display: "flex",
      });
      gsap.to(".nav-item", {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.1,
      });
    } else {
      gsap.to(".nav-item", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
      });
      gsap.to(".navbar", {
        x: "-100%",
        duration: 0.5,
        ease: "power2.in",
        opacity: 0,
        display: "hidden",
      });
    }
  }, [menuOpen]);

  return (
    <nav className="bg-stone-200 bg-opacity-50 backdrop-blur-md px-4 py-2 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <Logo />
      <div className="md:hidden relative">
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
        className={`navbar flex-col md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 ${
          menuOpen &&
          "bg-stone-200 bg-opacity-95 backdrop-blur-md h-[100vh] w-full animate-navbarSlideIn z-40 items-center justify-center no-scroll"
        } absolute md:relative top-0 left-0 right-0 md:top-auto md:left-auto md:right-auto md:bg-transparent transition-transform transform ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } md:translate-y-0 md:transform-none w-full md:w-auto`}
      >
        {["home", "about", "projects", "contact"].map((text) => (
          <li
            key={text}
            className={`nav-item opacity-0 md:pl-0 md:pb-0 pt-2 pl-4 pb-2 ${
              menuOpen ? "text-2xl" : ""
            }`}
          >
            <NavOption text={text} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
