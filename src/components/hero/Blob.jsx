import React from "react";
import BlobImage from "../../assets/blob-image.jpg";

const Blob = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BlobImage})` }}
      className="bg-primary border-2 border-primary min-w-[50vw] min-h-[50vw] md:min-w-[20vw] md:min-h-[20vw] bg-cover bg-center m-5 shadow-custom animate-blob transition-all duration-1000 ease-in-out"
    ></div>
  );
};

export default Blob;
