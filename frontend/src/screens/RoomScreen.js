import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";

import MainImage from "../components/lightBox/MainImage";
import BackgroundImage from "../components/lightBox/BackgroundImage";
import ImageListing from "../components/lightBox/ImageListing";

import profile from "../components/profile.jpg";
import RoomInfo from "../components/RoomInfo";
import Inquiry from "../components/Inquiry";
import Messagebox from "../components/Messagebox";

import { useDispatch, useSelector } from "react-redux";
import { roomDetails, deleteRoom, getUserRoom } from "../actions/roomActions";

const RoomScreen = ({ match, history }) => {
  const [click, setClick] = useState(false);
  const [image, setImage] = useState("");
  const [inquiry, setInquiry] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [closemessage, setClosemessage] = useState(false);

  const dispatch = useDispatch();
  const roomSelector = useSelector((state) => state.roomDetails);
  const { room, loading, error } = roomSelector;

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const userRoom = useSelector((state) => state.userRoom);
  const { rooms: userRooms } = userRoom;

  const roomID = match.params.id;
  useEffect(() => {
    dispatch(roomDetails(roomID));
    dispatch(getUserRoom());
  }, [dispatch]);

  const deleteHandler = (roomId) => {
    if (window.confirm("Are you Sure")) {
      dispatch(deleteRoom(roomId));
      history.push("/");
    }
  };

  const onClick = (e) => {
    // console.log(e.target.currentSrc);
    setImage(e.target.currentSrc);
    setClick(!click);
  };

  const onClose = () => {
    setClick(false);
  };

  const handleInquire = () => {
    setInquiry(true);
  };

  const onCloseInquiry = () => {
    setInquiry(false);
  };

  const onCloseMessage = () => {
    setClosemessage(false);
  };

  const images = [
    room.image1 !== "" && room.image1,
    room.image2 !== "" && room.image2,
    room.image3 !== "" && room.image3,
    room.image4 !== "" && room.image4,
    room.image5 !== "" && room.image5,
  ];

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div style={{ marginBottom: "20px" }}>
          <div className="roomscreen-header-flex">
            <Link to="/">
              <button className="btn">
                <i className="fas fa-arrow-left"></i> Back
              </button>
            </Link>
            {user && user.isAdmin ? (
              <div class="roomscreen-edit-delete">
                <div className="view-listing">
                  <Link to={`/edit/room/${room._id}`} className="flex-2">
                    <i className="fas fa-edit"></i> Edit
                  </Link>
                </div>
                <div className="view-listing danger">
                  <Link
                    to="#"
                    className="flex-2"
                    onClick={() => deleteHandler(room._id)}
                  >
                    <i className="fas fa-trash"></i> Delete
                  </Link>
                </div>
              </div>
            ) : null}
            {userRooms &&
              userRooms.map(
                (room) =>
                  room._id === roomID && (
                    <div class="roomscreen-edit-delete">
                      <div className="view-listing">
                        <Link to={`/edit/room/${room._id}`} className="flex-2">
                          <i className="fas fa-edit"></i> Edit
                        </Link>
                      </div>
                      <div className="view-listing danger">
                        <Link
                          to="#"
                          className="flex-2"
                          onClick={() => deleteHandler(room._id)}
                        >
                          <i className="fas fa-trash"></i> Delete
                        </Link>
                      </div>
                    </div>
                  )
              )}
          </div>
          {closemessage && <Messagebox onClose={onCloseMessage} />}
          <div className="RoomScreen-grid">
            <div>
              <MainImage mainImage={room.mainImage} />
              <ImageListing images={images} onClick={onClick} />
              <div
                className={click ? "backgroundimage" : "normal"}
                onClick={onClose}
              >
                <BackgroundImage image={image} />
              </div>
              {/* Room Info Component */}
              <RoomInfo room={room} />

              <div style={scamsNotice}>
                <h3
                  style={{
                    textAlign: "center",
                    marginBottom: "10px",
                    color: "red",
                  }}
                >
                  <i
                    className="fa fa-exclamation-triangle"
                    aria-hidden="true"
                  ></i>{" "}
                  Be safe. Beware of fraud & scams.
                </h3>
                <p>
                  chaiyo.com is NOT involved in transaction of any
                  goods/services listed in the website. It is only platform to
                  share information. You are directly contacting the person who
                  has posted the advertisement and you agree not to hold
                  chaiyo.com responsible for their act in any circumstances.{" "}
                  <br /> We strongly encourage you to take necessary precaution.
                  Avoid advance payment, check goods before purchasing, instead
                  of cash use mobile wallets (IME Pay, Esewa, Khalti, Connect
                  Ips, etc) or bank transfer for payments. For more read Safety
                  Tips
                </p>
              </div>
            </div>
            <div className="seller-details">
              <div className="seller-container">
                <div className="seller-image">
                  {room.user && room.user.profileImg ? (
                    <img
                      src={room.user.profileImg}
                      alt="profile"
                      className="user-profile-img"
                    />
                  ) : (
                    <img src="/images/profile.png" alt="profile" />
                  )}
                  {/* <img src={profile} alt="" /> */}
                  <h4 style={{ textAlign: "center" }}>Owner Details</h4>
                </div>
                <div className="seller-info">
                  <h4 style={margin}>
                    Name: <br />
                    <span className="text-color">
                      {room.user && room.user.userName}
                    </span>
                  </h4>
                  <h4 style={margin}>
                    Mobile Phone: <br />
                    <span className="text-color">
                      {room.user && room.user.phone}
                    </span>
                  </h4>
                  <h4 style={margin}>
                    Email: <br />
                    <span className="text-color">
                      {room.user && room.user.email}
                    </span>
                  </h4>
                  <h4 style={margin}>
                    Address: <br />
                    <span className="text-color">
                      {room.city},{room.address}
                    </span>
                  </h4>
                </div>
              </div>
              <button className="inquiry-btn" onClick={handleInquire}>
                Make An Inquiry
              </button>
              {inquiry && <Inquiry onClose={onCloseInquiry} />}
            </div>
          </div>
        </div>
      )}
    </>
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
