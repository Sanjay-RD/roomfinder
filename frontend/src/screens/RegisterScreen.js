import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/userActions";

import axios from "axios";

const RegisterScreen = ({ history }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [previewSource, setPreviewSource] = useState();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [history, user]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      register(
        firstname,
        lastname,
        username,
        email,
        phone,
        profileImg,
        password
      )
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    previewFile(file);

    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };

        const { data } = await axios.post("/api/upload", formData, config);
        setProfileImg(data);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const previewFile = (file) => {
    console.log(file);
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return (
    <>
      <div className="register-form">
        <div className="register-header">
          <h2>
            <i className="fa fa-user-plus" aria-hidden="true"></i> Register
          </h2>
        </div>
        <form onSubmit={onSubmit}>
          {/* profile Upload */}
          <div className="profile-form">
            <p style={{ marginBottom: "10px" }}>
              If you want to add profile image
            </p>
            <div className="profile-image-container">
              {previewSource ? (
                <img
                  src={previewSource}
                  className="profile-img"
                  alt="profile"
                />
              ) : (
                <img
                  src="/images/profile.png"
                  className="profile-img"
                  alt="profile"
                />
              )}{" "}
            </div>
            <input type="file" name="image" onChange={uploadFileHandler} />
          </div>
          {/* profile upload end */}
          <div className="form-group">
            <label>
              First Name <span className="required-symbol">*</span>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
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
            <label>
              Username <span className="required-symbol">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="usename"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>
              Email <span className="required-symbol">*</span>
            </label>
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
            <label>
              Phone Number <span className="required-symbol">*</span>
            </label>
            <input
              type="phone"
              className="form-control"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>
              Password <span className="required-symbol">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>
              Confirm Password <span className="required-symbol">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              name="confirmpassword"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              required
            />
          </div>

          <div>
            <input type="submit" value="Register" className="button" />
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterScreen;
