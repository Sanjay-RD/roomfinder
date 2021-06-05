import React from "react";

const MainImage = ({ mainImage }) => {
  return (
    <div className="mainImage-container">
      <img src={mainImage} alt="" className="lightbox-mainImage" />
    </div>
  );
};

export default MainImage;
