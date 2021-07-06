import React from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

import { useDispatch } from "react-redux";
import { deleteRoom } from "../actions/roomActions";

const RoomList = ({ room }) => {
  const dispatch = useDispatch();
  const deleteHandler = (roomId) => {
    if (window.confirm("Are you Sure")) {
      dispatch(deleteRoom(roomId));
    }
  };
  return (
    <>
      <tr>
        <td>
          <Link to={`/room/${room._id}`} className="text-link">
            {room._id}
          </Link>
        </td>
        <td>{room.user.userName}</td>
        <td>
          <NumberFormat
            value={room.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs."}
          />
        </td>
        <td>{room.createdAt && room.createdAt.substring(0, 10)}</td>
        <td>
          <div className="view-listing">
            <Link to={`/edit/room/${room._id}`} className="flex-2">
              <i className="fas fa-edit"></i> Edit
            </Link>
          </div>
        </td>
        <td>
          <div className="view-listing danger">
            <Link
              to="#"
              className="flex-2"
              onClick={() => deleteHandler(room._id)}
            >
              <i className="fas fa-trash"></i> Delete
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default RoomList;
