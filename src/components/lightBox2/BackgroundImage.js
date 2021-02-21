import React from "react";

const BackgroundImage = ({ image }) => {
  console.log(image);
  return (
    <div className="modal-content">
      <div className="mySlides">
        <span className="close">
          {/* <i className="fa fa-times"></i> */}
          &times;
        </span>
        {/* <div className="numbertext">1 / 4</div> */}
        <img src={image} className="backgroundImagesize" />
      </div>
    </div>
  );
};

export default BackgroundImage;
