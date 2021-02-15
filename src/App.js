import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/page/Home";

import room1 from "./images/room1.jpg";
import room2 from "./images/room2.jpg";
import room3 from "./images/room3.jpg";
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
      start: "2021-2-13",
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
      start: "2021-2-11",
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
      start: "2021-2-12",
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
      start: "2021-2-13",
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
      start: "2021-2-14",
    },
    {
      id: 16,
      owner: "Amit Awal",
      title: "1 room",
      address: "suryabinyak",
      city: "bhaktaput",
      description: "1 room near suryabinayk chok",
      price: 3000,
      bedroom: 1,
      bathroom: 1,
      sqft: 800,
      garage: "Yes",
      photomain: room3,
      start: "2021-2-01",
    },
    {
      id: 6,
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
      start: "2021-2-14",
    },
    {
      id: 7,
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
      start: "2021-2-14",
    },
    {
      id: 8,
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
      start: "2021-2-14",
    },
    {
      id: 9,
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
      start: "2021-2-14",
    },
    {
      id: 10,
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
      start: "2021-2-14",
    },
    {
      id: 11,
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
      start: "2021-2-14",
    },
    {
      id: 12,
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
      start: "2021-2-14",
    },
    {
      id: 13,
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
      start: "2021-2-14",
    },
    {
      id: 14,
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
      start: "2021-2-14",
    },
    {
      id: 15,
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
      start: "2021-2-14",
    },
  ]);

  const [rooms, setRoom] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage, setRoomsPerPage] = useState(6);

  useEffect(() => {
    setRoom(roomInfo);
  }, []);

  const indexOfLastRooms = currentPage * roomsPerPage;
  const indexOfFirstRooms = indexOfLastRooms - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRooms, indexOfLastRooms);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Home
          roomInfo={currentRooms}
          roomsPerPage={roomsPerPage}
          totalRooms={rooms.length}
          paginate={paginate}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
