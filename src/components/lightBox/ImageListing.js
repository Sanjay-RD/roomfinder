import React, { useState } from "react";

const ImageListing = ({ images, onClick }) => {
  // console.log(images);
  return (
    <div className="flex">
      {images.map((image) => (
        // console.log(image)
        <div className="box-img" key={image}>
          <img
            key={image}
            src={image}
            alt=""
            className="lightbox hover-shadow"
            onClick={(e) => onClick(e)}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageListing;
