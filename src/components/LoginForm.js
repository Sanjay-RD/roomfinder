import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/userActions";

const LoginForm = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="register-form">
      <div className="register-header">
        <h2>
          <i className="fa fa-sign-in" aria-hidden="true"></i> {title}
        </h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            required
          />
        </div>

        <div>
          <input type="submit" value="Log in" className="button" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
