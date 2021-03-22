import React, { useEffect, useState } from "react";
import rooms from "../../rooms";
import { Link } from "react-router-dom";

import MainImage from "../lightBox2/MainImage";
import BackgroundImage from "../lightBox2/BackgroundImage";
import ImageListing from "../lightBox2/ImageListing";

import profile from "./profile.jpg";
import InfoListing from "./InfoListing";

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
  console.log(room);
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
          {/* Room Info Component */}
          <InfoListing room={room} />
          <div style={scamsNotice}>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "10px",
                color: "red",
              }}
            >
              <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>{" "}
              Be safe. Beware of fraud & scams.
            </h3>
            <p>
              chaiyo.com is NOT involved in transaction of any goods/services
              listed in the website. It is only platform to share information.
              You are directly contacting the person who has posted the
              advertisement and you agree not to hold chaiyo.com responsible for
              their act in any circumstances. <br /> We strongly encourage you
              to take necessary precaution. Avoid advance payment, check goods
              before purchasing, instead of cash use mobile wallets (IME Pay,
              Esewa, Khalti, Connect Ips, etc) or bank transfer for payments.
              For more read Safety Tips
            </p>
          </div>
        </div>
        <div className="seller-details">
          <div className="seller-container">
            <div className="seller-image">
              <img src={profile} alt="" />
              <h4 style={{ textAlign: "center" }}>Owner Details</h4>
            </div>
            <div className="seller-info">
              <h4 style={margin}>
                Name: <br />
                <span className="text-color">{room.owner}</span>
              </h4>
              <h4 style={margin}>
                Mobile Phone: <br />
                <span className="text-color">{room.contact}</span>
              </h4>
              <h4 style={margin}>
                Email: <br />
                <span className="text-color">{room.email}</span>
              </h4>
              <h4 style={margin}>
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

const scamsNotice = {
  border: "1px solid #ccc6c6",
  padding: "10px",
  borderRadius: "2px",
  marginTop: "30px",
  marginButton: "30px",
};

const margin = {
  marginBottom: "7px",
};

export default RoomScreen;
