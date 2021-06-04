import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RoomList from "../components/RoomList";
import InquiryList from "../components/InquiryList";
import UserList from "../components/UserList";

import rooms from "../rooms";
import inquiryMsg from "../inquiryMsg";
import users from "../users";

import { useSelector } from "react-redux";

const AdminScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { success, user } = userLogin;

  useEffect(() => {
    if (!success && user.isAdmin) {
      history.push("/account/login");
    }
  }, []);

  return (
    <div className="dashboard">
      <div className="showcase">
        <img src="../../images/banner.jpeg" alt="" />
        <div className="showcase-content">
          <h1>Admin Dashboard</h1>
          <p>Manage All Account</p>
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
          <div className="title">
            <div>
              <h1>Welcome {user.firstName}</h1>
              <p>Here are the room listing, user Details and Message of User</p>
            </div>
            <div>
              <div className="view-listing edit-profile">
                <Link to="/profile/edit/2">
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
                  <th>#</th>
                  <th>Property</th>
                  <th>Date</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <RoomList key={room.id} room={room} />
                ))}
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

          <div className="room-listing" style={{ overflowX: "auto" }}>
            <h2>User Details</h2>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>isAdmin</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <UserList key={user.id} user={user} />
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

export default AdminScreen;