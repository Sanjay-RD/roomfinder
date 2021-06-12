import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { user, error, loading } = userLogin;
  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [history, user]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="register-form">
      <div className="register-header">
        <h2>
          <i className="fa fa-sign-in" aria-hidden="true"></i> Login
        </h2>
      </div>
      {error && <Message variant="danger">{error}</Message>}
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

export default LoginScreen;
