import React, { useState } from "react";

const Adminlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="register-form">
      <div className="register-header">
        <i className="fa fa-sign-in" aria-hidden="true"></i> <h2>Admin Area</h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="usename"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <input type="submit" value="Log in" className="button" />
        </div>
      </form>
    </div>
  );
};

export default Adminlogin;
