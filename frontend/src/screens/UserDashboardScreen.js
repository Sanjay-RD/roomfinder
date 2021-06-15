import React from "react";
import { Link } from "react-router-dom";
import InquiryList from "../components/InquiryList";
import inquiryMsg from "../inquiryMsg";

const UserDashboardScreen = () => {
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
          <div className="title">
            <div>
              <h1>Welcome sanjay</h1>
              <p>Here are the room listing, user Details and Message of User</p>
            </div>
            <div>
              <div className="view-listing edit-profile">
                <Link to="/profile">
                  <i className="fas fa-edit"></i> Edit Profile
                </Link>
              </div>
            </div>
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
