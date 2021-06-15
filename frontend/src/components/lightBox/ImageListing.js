import React, { useState } from "react";

const ImageListing = ({ images, onClick }) => {
  // console.log(images);
  return (
    <div className="flex">
      {images &&
        images.map((image, index) => (
          // console.log(image)
          <div className="box-img" key={index}>
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
