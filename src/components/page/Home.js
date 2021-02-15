import React from "react";
import Listing from "../body/Listing";
import Pagination from "../body/Pagination";
import Search from "../body/Search";

function Home({ roomInfo, roomsPerPage, totalRooms, paginate }) {
  return (
    <div className="grid-2">
      <Search />
      <div>
        <Listing roomInfo={roomInfo} />
        <Pagination
          roomsPerPage={roomsPerPage}
          totalRooms={totalRooms}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Home;
