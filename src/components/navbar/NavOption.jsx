import React from "react";

function NavOption({ text }) {
  return (
    <span className="text-neutral lg:text-2xl font-semibold hover:text-primary transition-colors duration-300 ease-in-out">
      <a href={`#${text.toLowerCase()}`}>
        {text.charAt(0).toUpperCase() + text.slice(1)}
      </a>
    </span>
  );
}

export default NavOption;
