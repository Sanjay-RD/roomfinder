import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import RoomList from "../components/RoomList";
import InquiryList from "../components/InquiryList";
import UserList from "../components/UserList";

import inquiryMsg from "../inquiryMsg";

import { useSelector, useDispatch } from "react-redux";
import { listUsers } from "../actions/userActions";
import { listRooms } from "../actions/roomActions";

const AdminScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const roomList = useSelector((state) => state.roomList);
  const { rooms, loading: loadingRoom, error: errorRoom } = roomList;

  const userList = useSelector((state) => state.userList);
  const { users, loading: loadingListUser, error: errorListUser } = userList;

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.isAdmin) {
      dispatch(listUsers());
      dispatch(listRooms());
    } else {
      history.push("/account/login");
    }
  }, [dispatch]);

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
                  <th>ROOM_ID</th>
                  <th>OWNER_NAME</th>
                  <th>PRICE</th>
                  <th>CREATED_AT</th>
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
                  <th>USER_ID</th>
                  <th>USER_NAME</th>
                  <th>EMAIL</th>
                  <th>PHONE_NUMBER</th>
                  <th>ADMIN</th>
                  <th>EDIT/DELETE</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => <UserList key={user.id} user={user} />)}
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
