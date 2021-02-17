import React, { useState } from "react";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  // const [toggle, setToggle] = useState(false);

  // const handleClick = () => {
  //   setToggle(!toggle);
  // };

  return (
    <nav>
      <div className="header-container">
        <div className="flex-1">
          {/* <ul className={toggle ? "nav-menu active" : "nav-menu"}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/list">Featured Listing</a>
            </li>
          </ul> */}
          <ul>
            <li>
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="Company logo." />
                </Link>
              </div>
            </li>
            <li>
              <Link to="/rent">For Rent</Link>
            </li>
            <li>
              <Link to="/sale">For Sale</Link>
            </li>
          </ul>
          <ul className="login-register">
            <li>
              <Link to="/register">
                <i className="fa fa-user-plus" aria-hidden="true"></i> Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="login">
                <i className="fa fa-sign-in" aria-hidden="true"></i> Login
              </Link>
            </li>
          </ul>
        </div>
        {/* <button className="toggle" onClick={handleClick}>
          <i className={toggle ? "fa fa-times" : "fa fa-bars"}></i>
        </button> */}
      </div>
    </nav>
  );
}

export default Header;
