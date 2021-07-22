import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import InquiryList from "../components/InquiryList";
import inquiryMsg from "../inquiryMsg";
import Message from "../components/Message";
import RoomList from "../components/RoomList";

import { useSelector, useDispatch } from "react-redux";
import { USER_UPDATE_RESET } from "../constants/userConstants";
import { getUserRoom } from "../actions/roomActions";

const UserDashboardScreen = () => {
  const dispatch = useDispatch();
  const updateUserProfile = useSelector((state) => state.updateUserProfile);
  const { loading, success } = updateUserProfile;

  const userRoom = useSelector((state) => state.userRoom);
  const { rooms } = userRoom;
  console.log(rooms);

  useEffect(() => {
    dispatch(getUserRoom());
    setTimeout(() => {
      dispatch({ type: USER_UPDATE_RESET });
    }, 5000);
  }, [dispatch]);
  return (
    <div className="dashboard">
      <div className="showcase">
        <img src="../../images/banner.jpeg" alt="" />
        <div className="showcase-content">
          <h1>User Dashboard</h1>
          <p>Manage your Account</p>
        </div>
      </div>
      <div className="dashboard-container">
        <div className="navigation-header">
          <Link to="/" style={{ color: "#333" }}>
            Home
          </Link>{" "}
          / <span style={spanColor}>Dashboard</span>
        </div>
        <div className="user-info">
          {success && <Message variant="success">Profile Updated</Message>}
          <div className="title">
            <div>
              <h1>Welcome sanjay</h1>
              <p>Here are the room listing, user Details and Message of User</p>
            </div>
            <div className="create_edit_Btn">
              <div className="view-listing create-room">
                <Link to="/sale">
                  <i className="fas fa-edit"></i> Create Room
                </Link>
              </div>
              <div className="view-listing edit-profile">
                <Link to="/profile">
                  <i className="fas fa-edit"></i> Edit Profile
                </Link>
              </div>
            </div>
          </div>

          <div className="room-listing">
            <h2>Room Details</h2>
            <table>
              <thead>
                <tr>
                  <th>ROOM_ID</th>
                  <th>OWNER_NAME</th>
                  <th>PRICE</th>
                  <th>CREATED_AT</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rooms &&
                  rooms.map((room) => <RoomList key={room._id} room={room} />)}
              </tbody>
            </table>
          </div>

          <div className="room-listing" style={{ overflowX: "auto" }}>
            <h2>Enquiry Details</h2>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {inquiryMsg.map((msg) => (
                  <InquiryList key={msg.id} msg={msg} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const spanColor = {
  color: "#5a5555",
};

export default UserDashboardScreen;
