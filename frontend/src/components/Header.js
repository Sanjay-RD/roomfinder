import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userLogin);
  const { success, user } = selector;

  const handleLogout = () => {
    dispatch(logout());
    setToggle(false);
  };

  const handleToggleClick = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <div className="header-container">
        <div className="toggle-bars" onClick={handleToggleClick}>
          {toggle ? (
            <i className="fa fa-times" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-bars" aria-hidden="true"></i>
          )}
        </div>
        <div className="flex-1">
          <ul>
            <li>
              <div className="logo">
                <Link to="/" onClick={() => setToggle(false)}>
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
          <ul
            className={
              toggle ? "login-register open-nav" : "login-register close-nav"
            }
          >
            <li>
              {success ? (
                <Link
                  to={user.isAdmin ? "/admin/dashboard" : "/account/dashboard"}
                  onClick={handleToggleClick}
                >
                  <i className="fa fa-home" aria-hidden="true"></i>{" "}
                  {user.firstName} Dashboard
                </Link>
              ) : (
                <Link to="/account/register" onClick={handleToggleClick}>
                  <i className="fa fa-user-plus" aria-hidden="true"></i>{" "}
                  Register
                </Link>
              )}
            </li>
            <li>
              {success ? (
                <Link to="" onClick={handleLogout}>
                  <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
                </Link>
              ) : (
                <Link
                  to="/account/login"
                  className="login"
                  onClick={handleToggleClick}
                >
                  <i className="fa fa-sign-in" aria-hidden="true"></i> Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
