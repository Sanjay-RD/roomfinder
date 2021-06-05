import React from "react";
import RoomItems from "./RoomItems";

import { useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";

const Listing = ({ roomInfo }) => {
  const roominfo = useSelector((state) => state.roomList);
  const { loading, error } = roominfo;
  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        Latest Listing
      </h2>
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
