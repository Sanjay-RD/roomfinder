import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
              <h1>Welcome Sanjay</h1>
              <p>
                Here are the room listing that you have created and inquired
                about
              </p>
            </div>
            <div>
              <div className="view-listing">
                <Link to="/profile/edit/2" style={{ color: "red" }}>
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
          <div className="room-listing">
            <h2>Room Details</h2>
            <ul>
              <li>#</li>
              <li>Property</li>
              <li></li>
            </ul>
            <ul>
              <li>4</li>
              <li>26 street 2 room available</li>
              <li>
                <div className="view-listing">
                  <Link to="/room/2">View Listing</Link>
                </div>
              </li>
              <li>
                <div className="view-listing">
                  <Link to="/edit/room/2">Edit Post</Link>
                </div>
              </li>
            </ul>
            <ul>
              <li>4</li>
              <li>26 street 2 room available</li>
              <li>
                <div className="view-listing">
                  <Link to="/room/2">View Listing</Link>
                </div>
              </li>
              <li>
                <div className="view-listing">
                  <Link to="/edit/room/2">Edit Post</Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="room-listing">
            <h2>Enquiry Details</h2>
            <ul>
              <li>#</li>
              <li>Property</li>
              <li></li>
            </ul>
            <ul>
              <li>4</li>
              <li>26 street 2 room available</li>
              <li>
                <div className="view-listing">
                  <Link to="/room/2">View Listing</Link>
                </div>
              </li>
            </ul>
            <ul>
              <li>4</li>
              <li>26 street 2 room available</li>
              <li>
                <div className="view-listing">
                  <Link to="/room/2">View Listing</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const spanColor = {
  color: "#5a5555",
};

export default Dashboard;
