import React from "react";

function Header({ title }) {
  return (
    <div className={`text-md md:text-xl text-left font-bold text-primary`}>
      {title}
    </div>
  );
}

export default Header;
