import React, { useEffect, useState } from "react";
import rooms from "../../rooms";
import { Link } from "react-router-dom";

import MainImage from "../lightBox2/MainImage";
import BackgroundImage from "../lightBox2/BackgroundImage";
import ImageListing from "../lightBox2/ImageListing";

const RoomScreen = ({ match }) => {
  const [click, setClick] = useState(false);
  const [image, setImage] = useState("");

  const onClick = (e) => {
    console.log(e);
    // console.log(e.target.currentSrc);
    setImage(e.target.currentSrc);
    setClick(!click);
  };

  const onClose = () => {
    setClick(false);
  };

  const room = rooms.find((room) => room.id === parseInt(match.params.id));
  return (
    <div style={{ marginBottom: "20px" }}>
      <Link to="/">
        <button className="btn">
          <i className="fas fa-arrow-left"></i> Back
        </button>
      </Link>
      <div className="RoomScreen-grid">
        <div>
          <MainImage photomain={room.photomain} />
          <ImageListing images={room.images} onClick={onClick} />
          <div
            className={click ? "backgroundimage" : "normal"}
            onClick={onClose}
          >
            <BackgroundImage image={image} />
          </div>
        </div>
        <div>
          <h2>Seller Details</h2>
        </div>
      </div>
    </div>
  );
};

export default RoomScreen;
