import React from "react";

function Logo() {
  return (
    <>
      <div className="text-neutral text-2xl font-bold flex flex-row gap-1 hover:text-primary cursor-default transition-colors duration-300 ease-in-out">
        <div className="text-primary-300">{"< "}</div>Isaac
        <div className="text-primary-300">{" />"}</div>
      </div>
    </>
  );
}

export default Logo;
