import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ user }) => {
  return (
    <tr>
      <td>{user._id}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        {user.isAdmin ? (
          <i className="fas fa-check" style={{ color: "green" }}></i>
        ) : (
          <i className="fas fa-times" style={{ color: "red" }}></i>
        )}
      </td>
      <td>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <Link to="/room/2">
              <i className="fas fa-edit"></i>
            </Link>
          </div>
          <div>
            <Link to="/room/2" style={{ color: "#F54B4B" }}>
              <i className="fas fa-trash"></i>
            </Link>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default UserList;
