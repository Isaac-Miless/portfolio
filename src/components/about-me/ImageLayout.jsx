import React from "react";
import Iceland from "../../assets/iceland.png";
import Code from "../../assets/code.jpg";
import PCB from "../../assets/pcb.jpg";

const SquareLayout = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Code})` }}
        className="w-40 h-40 border-2 border-primary bg-cover bg-center bg-primary transform -rotate-[40deg] absolute -left-[7rem] top-12 flex items-center justify-center text-white shadow-custom rounded-lg"
      ></div>
      <div
        style={{ backgroundImage: `url(${Iceland})` }}
        className="w-40 h-40 border-2 border-primary bg-cover bg-center bg-primary flex items-center justify-center text-white z-10 rounded-lg"
      ></div>
      <div
        style={{ backgroundImage: `url(${PCB})` }}
        className="w-40 h-40 border-2 border-primary bg-cover bg-center bg-primary transform rotate-[40deg] absolute -right-[7rem] top-12 flex items-center justify-center text-white shadow-custom rounded-lg"
      ></div>
    </>
  );
};

export default SquareLayout;
