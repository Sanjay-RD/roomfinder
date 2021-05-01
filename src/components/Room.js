import React from "react";
import RoomItems from "./RoomItems";

const Listing = ({ roomInfo }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        Latest Listing
      </h2>
      <div className="room-flex">
        {roomInfo.map((item) => (
          <RoomItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Listing;
