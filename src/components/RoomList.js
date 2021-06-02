import React from "react";
import { Link } from "react-router-dom";

const RoomList = ({ room }) => {
  return (
    <>
      <tr>
        <td>{room.id}</td>
        <td>
          <Link to="/room/2" className="text-link">
            {room.title}
          </Link>
        </td>
        <td>{room.start}</td>
        <td>
          <div className="view-listing">
            <Link to="/edit/room/2">
              <i className="fas fa-edit"></i> Edit
            </Link>
          </div>
        </td>
        <td>
          <div className="view-listing danger">
            <Link to="/room/2">
              <i className="fas fa-trash"></i> Delete
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default RoomList;
