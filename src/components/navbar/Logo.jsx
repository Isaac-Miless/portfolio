import React from "react";

function Logo() {
  return (
    <>
      <a
        className="text-neutral text-2xl lg:text-4xl font-bold flex flex-row gap-1 hover:text-primary active:text-primary transition-colors duration-300 ease-in-out"
        href="."
      >
        <div className="text-primary-300">{"< "}</div>Isaac
        <div className="text-primary-300">{" />"}</div>
      </a>
    </>
  );
}

export default Logo;
