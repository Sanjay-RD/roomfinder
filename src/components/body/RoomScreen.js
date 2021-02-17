import React, { useEffect, useState } from "react";
import rooms from "../../rooms";

const RoomScreen = ({ match }) => {
  const room = rooms.find((r) => r.id === parseInt(match.params.id));
  return (
    <div>
      <h1>{room.title}</h1>
    </div>
  );
};

export default RoomScreen;
