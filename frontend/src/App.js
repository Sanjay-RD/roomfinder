import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import Footer from "./components/Footer";
import RoomScreen from "./screens/RoomScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import CreateRoomScreen from "./screens/CreateRoomScreen";
import UserDashboardScreen from "./screens/UserDashboardScreen";
import EditScreen from "./screens/EditScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminLoginScreen from "./screens/AdminLoginScreen";
import AdminScreen from "./screens/AdminScreen";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
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
                <HomeScreen />
              </React.Fragment>
            )}
          />
        </div>
        <div className="small-container">
          <Route path="/room/:id" component={RoomScreen} />
        </div>
        <Route path="/account/register" component={RegisterScreen} />
        <Route path="/account/login" component={LoginScreen} />
        <Route path="/account/dashboard" component={UserDashboardScreen} />
        <Route path="/sale" component={CreateRoomScreen} />
        <Route path="/edit/room/:id" component={EditScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/admin/login" component={AdminLoginScreen} />
        <Route path="/admin/dashboard" component={AdminScreen} />
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;