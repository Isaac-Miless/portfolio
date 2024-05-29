import React from "react";
import Iceland from "../../assets/iceland.png";

const SquareLayout = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Iceland})` }}
        className="min-w-[40vw] min-h-[30vw] md:min-w-[40vw] md:min-h-[25vw] lg:min-w-[30vw] lg:min-h-[30vh] border-2 border-primary bg-cover bg-center bg-primary flex items-center justify-center text-white z-10 shadow-custom rounded-lg"
      ></div>
    </>
  );
};

export default SquareLayout;
