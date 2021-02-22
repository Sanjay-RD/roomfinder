import React, { useEffect, useState } from "react";
import rooms from "../../rooms";
import { Link } from "react-router-dom";

import MainImage from "../lightBox2/MainImage";
import BackgroundImage from "../lightBox2/BackgroundImage";
import ImageListing from "../lightBox2/ImageListing";

import profile from "./profile.jpg";

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
        <div className="seller-details">
          <div className="seller-container">
            <div className="seller-image">
              <img src={profile} alt="" />
              <h4 style={{ textAlign: "center" }}>Owner Details</h4>
            </div>
            <div className="seller-info">
              <h4>
                Name: <br />
                <span className="text-color">{room.owner}</span>
              </h4>
              <h4>
                Email: <br />
                <span className="text-color">{room.email}</span>
              </h4>
              <h4>
                Address: <br />
                <span className="text-color">
                  {room.city},{room.address}
                </span>
              </h4>
            </div>
          </div>
          <button className="inquiry-btn">Make An Inquiry</button>
        </div>
      </div>
    </div>
  );
};

export default RoomScreen;
