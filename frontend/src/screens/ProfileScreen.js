import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../actions/userActions";
import Message from "../components/Message";

const ProfileScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;
  const updateUser = useSelector((state) => state.updateUserProfile);
  const { success } = updateUser;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      history.push("/account/login");
    } else {
      setFirstname(user.firstName);
      setLastname(user.lastName);
      setUsername(user.userName);
      setEmail(user.email);
      setPhone(user.phone);
    }
    if (success) {
      history.push("/account/dashboard");
    }
  }, [success]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage("Password Does not match");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          lastName: lastname,
          firstName: firstname,
          userName: username,
          phone,
          email,
          password,
        })
      );
    }
  };
  return (
    <div className="register-form">
      <div className="register-header">
        <h2>
          <i className="fa fa-user-plus" aria-hidden="true"></i> Update Profile
        </h2>
      </div>
      {success && <Message variant="success">Profile Updated</Message>}
      {message && <Message variant="danger">{message}</Message>}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
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
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="phone"
            className="form-control"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="text"
            className="form-control"
            name="confirmpassword"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </div>

        <div>
          <input type="submit" value="Update" className="button" />
        </div>
      </form>
    </div>
  );
};

export default ProfileScreen;
