import React from "react";
import Room from "../components/Room";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

function HomeScreen({ roomInfo, roomsPerPage, totalRooms, paginate }) {
  return (
    <div className="grid-2">
      <Search />
      <div>
        <Room roomInfo={roomInfo} />
        <Pagination
          roomsPerPage={roomsPerPage}
          totalRooms={totalRooms}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default HomeScreen;
