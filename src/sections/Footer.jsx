import React from "react";
import SocialIcons from "../components/SocialIcons";

function Footer() {
  return (
    <>
      <footer className="flex flex-row justify-evenly md:justify-center h-[15vh] items-center bg-stone-200 text-neutral text-center py-7">
        <p className="text-lg md:text-2xl font-semibold w-[50vw] md:w-full">
          <span className="cursor-default">&copy; </span>Made with{" "}
          <span className="cursor-default">❤️</span> by{" "}
          <span className="text-primary">Isaac Miles</span>
        </p>
        <div className="md:w-full">
          <SocialIcons />
        </div>
      </footer>
    </>
  );
}

export default Footer;
