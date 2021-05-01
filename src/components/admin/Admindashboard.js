import React from "react";
import { Link } from "react-router-dom";

const Admindashboard = () => {
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
              <div className="view-listing edit-profile danger">
                <Link to="/profile/edit/2">Edit Profile</Link>
              </div>
            </div>
          </div>
          <div className="room-listing">
            <h2>Room Details</h2>
            {/* <ul>
              <li>#</li>
              <li>Property</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul>
              <div className="list-responsive-up">
                <li>4</li>
                <li>26 street 2 room available</li>
              </div>
              <div className="list-responsive-down">
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
                <li>
                  <div className="view-listing danger">
                    <Link to="/room/2">Delete Post</Link>
                  </div>
                </li>
              </div>
            </ul>
            <ul>
              <div className="list-responsive-up">
                <li>4</li>
                <li>26 street 2 room available</li>
              </div>
              <div className="list-responsive-down">
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
                <li>
                  <div className="view-listing danger">
                    <Link to="/room/2">Delete Post</Link>
                  </div>
                </li>
              </div>
            </ul> */}
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Property</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4</td>
                  <td>26 street 2 room available</td>
                  <td>
                    <div className="view-listing">
                      <Link to="/room/2">View Listing</Link>
                    </div>
                  </td>
                  <td>
                    <div className="view-listing">
                      <Link to="/edit/room/2">Edit Post</Link>
                    </div>
                  </td>
                  <td>
                    <div className="view-listing danger">
                      <Link to="/room/2">Delete Post</Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>26 street 2 room available</td>
                  <td>
                    <div className="view-listing">
                      <Link to="/room/2">View Listing</Link>
                    </div>
                  </td>
                  <td>
                    <div className="view-listing">
                      <Link to="/edit/room/2">Edit Post</Link>
                    </div>
                  </td>
                  <td>
                    <div className="view-listing danger">
                      <Link to="/room/2">Delete Post</Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="room-listing">
            <h2>Enquiry Details</h2>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Property</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4</td>
                  <td>26 street 2 room available</td>
                  <td>
                    <div className="view-listing">
                      <Link to="/edit/room/2">Edit Post</Link>
                    </div>
                  </td>
                  <td>
                    <div className="view-listing danger">
                      <Link to="/room/2">Delete Post</Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>26 street 2 room available</td>
                  <td>
                    <div className="view-listing">
                      <Link to="/edit/room/2">Edit Post</Link>
                    </div>
                  </td>
                  <td>
                    <div className="view-listing danger">
                      <Link to="/room/2">Delete Post</Link>
                    </div>
                  </td>
                </tr>
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
                  <th>Password</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>sarina rishidev</td>
                  <td>sarinarishidev@gmail.com</td>
                  <td>1111111111</td>
                  <td>kali rishidev</td>
                  <td>
                    <div className="view-listing danger">
                      <Link to="/room/2">Delete Post</Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>sarina rishidev</td>
                  <td>sarinarishidev@gmail.com</td>
                  <td>1111111111</td>
                  <td>kali rishidev</td>
                  <td>
                    <div className="view-listing danger">
                      <Link to="/room/2">Delete Post</Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>sarina rishidev</td>
                  <td>sarinarishidev@gmail.com</td>
                  <td>1111111111</td>
                  <td>kali rishidev</td>
                  <td>
                    <div className="view-listing danger">
                      <Link to="/room/2">Delete Post</Link>
                    </div>
                  </td>
                </tr>
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

export default Admindashboard;
