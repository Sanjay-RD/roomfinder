import React, { useEffect } from "react";
import RoomItems from "./RoomItems";

import { useSelector, useDispatch } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listRooms } from "../actions/roomActions";

const Listing = ({ roomInfo }) => {
  const dispatch = useDispatch();
  const roominfo = useSelector((state) => state.roomList);
  const { loading, error } = roominfo;

  const roomCreate = useSelector((state) => state.roomCreate);
  const { success: createRoomSuccess } = roomCreate;

  const roomDelete = useSelector((state) => state.roomDelete);
  const { success: roomDeleteSuccess } = roomDelete;

  useEffect(() => {
    dispatch(listRooms());
  }, [roomDeleteSuccess]);

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        Latest Listing
      </h2>
      {createRoomSuccess && <Message variant="info">Room Created</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="room-flex">
          {roomInfo.map((item) => (
            <RoomItems key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Listing;
