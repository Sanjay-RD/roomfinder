import React from "react";

const MainImage = ({ photomain }) => {
  return (
    <div className="mainImage-container">
      <img src={photomain} alt="" className="lightbox-mainImage" />
    </div>
  );
};

export default MainImage;
