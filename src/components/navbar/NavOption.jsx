import React from "react";

function NavOption({ text }) {
  return (
    <li className="text-neutral font-semibold hover:text-primary transition-colors duration-300 ease-in-out">
      <a href={`#${text.toLowerCase()}`}>
        {text.charAt(0).toUpperCase() + text.slice(1)}
      </a>
    </li>
  );
}

export default NavOption;
