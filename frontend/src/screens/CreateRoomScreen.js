import axios from "axios";
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { createRoom } from "../actions/roomActions";

const CreateRoomScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const [ownername, setOwnername] = useState(user.userName);
  const [contact, setContact] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [garage, setGarage] = useState("true");
  const [mainImage, setMainImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");

  const uploadFileHandler = async (e, setImages) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);
      setImages(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const room = {
      address,
      city,
      description,
      price,
      bedroom,
      bathroom,
      garage,
      mainImage,
      image1,
      image2,
      image3,
      image4,
      image5,
    };
    dispatch(createRoom(room));
    history.push("/");
  };

  return (
    <div className="small-container">
      <h1 style={{ marginBottom: "20px" }}>Create Room for Sale</h1>
      <form onSubmit={handleSubmit}>
        <div className="sales-form-group">
          <label>Owner Name</label>
          <input
            type="text"
            className="sales-form-control"
            value={ownername}
            disabled
          />
        </div>
        <div className="sales-form-group">
          <label>Email</label>
          <input
            type="text"
            className="sales-form-control"
            value={email}
            disabled
          />
        </div>
        <div className="sales-form-group">
          <label>Address</label>
          <input
            type="text"
            className="sales-form-control"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>City</label>
          <input
            type="text"
            className="sales-form-control"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Contact</label>
          <input
            type="text"
            className="sales-form-control"
            value={contact}
            disabled
          />
        </div>
        <div className="sales-form-group">
          <label>Description</label>
          <textarea
            className="sales-form-control textarea"
            cols="30"
            rows="10"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="sales-form-group">
          <label>Price</label>
          <input
            type="text"
            className="sales-form-control price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Bedrooms</label>
          <input
            type="number"
            className="sales-form-control bedrooms"
            onChange={(e) => setBedroom(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Bathrooms</label>
          <input
            type="number"
            className="sales-form-control bathrooms"
            onChange={(e) => setBathroom(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Garage</label>
          <div>
            <input
              type="radio"
              value="true"
              onChange={(e) => setGarage(e.target.value)}
              checked={garage === "true"}
            />{" "}
            Yes{" "}
            <input
              type="radio"
              value="false"
              onChange={(e) => setGarage(e.target.value)}
              checked={garage === "false"}
            />{" "}
            No
          </div>
        </div>
        <div className="sales-form-group">
          <label>Photo main</label>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => uploadFileHandler(e, setMainImage)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 1:</label>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => uploadFileHandler(e, setImage1)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 2:</label>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => uploadFileHandler(e, setImage2)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 3:</label>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => uploadFileHandler(e, setImage3)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 4:</label>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => uploadFileHandler(e, setImage4)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 5:</label>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => uploadFileHandler(e, setImage5)}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Create Room"
            className="createroom-save-button"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateRoomScreen;
