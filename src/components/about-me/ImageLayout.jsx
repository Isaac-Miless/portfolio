import React from "react";
import Iceland from "../../assets/iceland.png";

const SquareLayout = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Iceland})` }}
        className="w-[70vw] h-[50vw] md:w-[40vw] md:h-[25vh] border-2 border-primary bg-cover bg-center bg-primary flex items-center justify-center text-white z-10 shadow-custom rounded-lg"
      ></div>
    </>
  );
};

export default SquareLayout;
