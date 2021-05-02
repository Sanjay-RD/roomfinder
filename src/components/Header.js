import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="header-container">
        <div className="flex-1">
          <ul>
            <li>
              <div className="logo">
                <Link to="/">
                  <img src="/images/logo.jpg" alt="Company logo." />
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
              <Link to="/account/register">
                <i className="fa fa-user-plus" aria-hidden="true"></i> Register
              </Link>
            </li>
            <li>
              <Link to="/account/login" className="login">
                <i className="fa fa-sign-in" aria-hidden="true"></i> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
