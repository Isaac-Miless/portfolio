import React from "react";
import Logo from "./Logo";
import NavOption from "./NavOption";

const Navbar = () => {
  return (
    <nav className="bg-surface border-b border-gray-200 px-4 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <Logo />
      <ul className="flex space-x-8 mr-5">
        {["home", "about", "projects", "contact"].map((text) => (
          <NavOption key={text} text={text} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
