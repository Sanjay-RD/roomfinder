import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./screens/HomeScreen";
import Footer from "./components/Footer";
import RoomScreen from "./screens/RoomScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import CreateRoomScreen from "./screens/CreateRoomScreen";
import DashboardScreen from "./screens/DashboardScreen";
import EditScreen from "./screens/EditScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminLoginScreen from "./screens/AdminLoginScreen";
import AdminScreen from "./screens/AdminScreen";

import { BrowserRouter as Router, Route } from "react-router-dom";

import roomInfo from "./rooms";

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
        <Route path="/account/register" component={RegisterScreen} />
        <Route path="/account/login" component={LoginScreen} />
        <Route path="/account/dashboard" component={DashboardScreen} />
        <Route path="/sale" component={CreateRoomScreen} />
        <Route path="/edit/room/:id" component={EditScreen} />
        <Route path="/profile/edit/:id" component={ProfileScreen} />
        <Route path="/admin/login" component={AdminLoginScreen} />
        <Route path="/admin/dashboard" component={AdminScreen} />
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
