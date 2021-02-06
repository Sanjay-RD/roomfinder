import React from "react";
import Listing from "../body/Listing";
import Search from "../body/Search";

function Home({ roomInfo }) {
  return (
    <div className="grid-2">
      <Search />
      <Listing roomInfo={roomInfo} />
    </div>
  );
}

export default Home;
