import React from "react";
import Listing from "../body/Listing";
import Search from "../body/Search";

function Home() {
  return (
    <div className="grid-2">
      <Search />
      <Listing />
    </div>
  );
}

export default Home;
