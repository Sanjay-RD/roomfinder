import React, { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/page/Home";

import room1 from "./images/room1.jpg";
import room2 from "./images/room2.jpg";
import Moment from "react-moment";

function App() {
  const [roomInfo, setRoomInfo] = useState([
    {
      id: 1,
      owner: "sanjay rishidev",
      title: "2 room with 1 kitchen",
      address: "kharibot ktm",
      city: "kathmandu",
      description:
        "2 bedroom with 1 kitchen and 1 bathroom located in kharibot kumarigal kathmandu",
      price: 10000,
      bedroom: 2,
      bathroom: 1,
      sqft: 1200,
      garage: "Yes",
      photomain: "https://avatars.githubusercontent.com/u/1?v=4",
      end: "2021-2-16",
    },
    {
      id: 2,
      owner: "bibek raj tripathi",
      title: "1 room with 1 kitchen",
      address: "chabhail",
      city: "kathmandu",
      description:
        "1 bedroom with 1 kitchen and 1 bathroom located in  kathmandu",
      price: 9000,
      bedroom: 1,
      bathroom: 1,
      sqft: 1980,
      garage: "Yes",
      photomain: room1,
      end: "2021-2-11",
    },
    {
      id: 3,
      owner: "bibek raj tripathi",
      title: "1 room with 1 kitchen",
      address: "chabhail",
      city: "kathmandu",
      description:
        "1 bedroom with 1 kitchen and 1 bathroom located in  kathmandu",
      price: 9000,
      bedroom: 1,
      bathroom: 1,
      garage: "No",
      photomain: room2,
      end: "2021-2-12",
    },
    {
      id: 4,
      owner: "bibek raj tripathi",
      title: "1 room with 1 kitchen",
      address: "chabhail",
      city: "kathmandu",
      description:
        "1 bedroom with 1 kitchen and 1 bathroom located in  kathmandu",
      price: 8000,
      bedroom: 1,
      bathroom: 1,
      garage: "Yes",
      photomain: room2,
      end: "2021-2-13",
    },
    {
      id: 5,
      owner: "bibek raj tripathi",
      title: "1 room with 1 kitchen",
      address: "chabhail",
      city: "kathmandu",
      description:
        "1 bedroom with 1 kitchen and 1 bathroom located in  kathmandu",
      price: 5000,
      bedroom: 1,
      bathroom: 1,
      sqft: 8800,
      garage: "Yes",
      photomain: room2,
      end: "2021-2-14",
    },
  ]);
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Home roomInfo={roomInfo} />
      </div>
    </React.Fragment>
  );
}

export default App;
