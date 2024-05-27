import React from "react";
import BlobImage from "../../assets/blob-image.jpg";

const Blob = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BlobImage})` }}
      className="bg-primary border-2 border-primary w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] bg-cover bg-center m-5 shadow-custom animate-blob transition-all duration-1000 ease-in-out"
    ></div>
  );
};

export default Blob;
