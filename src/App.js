import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/page/Home";
import Footer from "./components/layout/Footer";
import RoomScreen from "./components/individualSection/RoomScreen";
import Register from "./components/page/Register";
import Login from "./components/page/Login";

import { BrowserRouter as Router, Route } from "react-router-dom";

import roomInfo from "./rooms";
import Dashboard from "./components/page/Dashboard";

function App() {
  const [rooms, setRoom] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(6);

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
    <Router>
      <React.Fragment>
        <Header />
        <div className="container">
          <Route
            exact
            // passing multiple path
            path={["/", "/page/:id"]}
            render={(props) => (
              <React.Fragment>
                <Home
                  roomInfo={currentRooms}
                  roomsPerPage={roomsPerPage}
                  totalRooms={rooms.length}
                  paginate={paginate}
                />
              </React.Fragment>
            )}
          />
        </div>
        <div className="small-container">
          <Route path="/room/:id" component={RoomScreen} />
        </div>
        <Route path="/account/register" component={Register} />
        <Route path="/account/login" component={Login} />
        <Route path="/account/dashboard" component={Dashboard} />
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
