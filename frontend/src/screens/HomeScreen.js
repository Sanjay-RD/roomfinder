import React, { useEffect, useState } from "react";
import Room from "../components/Room";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

import { useDispatch, useSelector } from "react-redux";
import { listRooms } from "../actions/roomActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const roomList = useSelector((state) => state.roomList);
  const { rooms } = roomList;

  const roomCreate = useSelector((state) => state.roomCreate);
  const { success: createRoomSuccess } = roomCreate;

  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(6);

  useEffect(() => {
    dispatch(listRooms());
  }, [dispatch, createRoomSuccess]);

  const indexOfLastRooms = currentPage * roomsPerPage;
  const indexOfFirstRooms = indexOfLastRooms - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRooms, indexOfLastRooms);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="grid-2">
      <Search />
      <div>
        <Room roomInfo={currentRooms} />
        <Pagination
          roomsPerPage={roomsPerPage}
          totalRooms={rooms.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
