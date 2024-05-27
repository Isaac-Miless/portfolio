import React from "react";
import SocialIcons from "../components/SocialIcons";

function Footer() {
  return (
    <>
      <footer className="flex flex-row justify-evenly items-center border-t-2 border-slate-100 bg-slate-50 text-neutral text-center py-7">
        <p className="text-lg font-semibold">
          <span className="cursor-default">&copy; </span>Made with{" "}
          <span className="cursor-default">❤️</span> by{" "}
          <span className="text-primary">Isaac Miles</span>
        </p>
        <SocialIcons />
      </footer>
    </>
  );
}

export default Footer;
