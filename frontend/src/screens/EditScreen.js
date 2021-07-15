import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { roomDetails, roomUpdate } from "../actions/roomActions";
import { ROOM_UPDATE_RESET } from "../constants/roomConstants";

const EditScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const roomId = match.params.id;

  const roomDetailsData = useSelector((state) => state.roomDetails);
  const { room } = roomDetailsData;

  const roomUpdateData = useSelector((state) => state.roomUpdate);
  const { success: successRoomUpdate } = roomUpdateData;

  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [garage, setGarage] = useState(true);
  const [mainImage, setMainImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");

  useEffect(() => {
    if (successRoomUpdate) {
      dispatch({ type: ROOM_UPDATE_RESET });
      history.push("/admin/dashboard");
    } else {
      if (!room._id || room._id !== roomId) {
        dispatch(roomDetails(roomId));
      } else {
        setUsername(room.user.userName);
        setAddress(room.address);
        setCity(room.city);
        setDescription(room.description);
        setPrice(room.price);
        setBedroom(room.bedroom);
        setBathroom(room.bathroom);
        setGarage(room.garage);
        setMainImage(room.mainImage);
        setImage1(room.image1);
        setImage2(room.image2);
        setImage3(room.image3);
        setImage4(room.image4);
        setImage5(room.image5);
      }
    }
  }, [dispatch, room._id, history, successRoomUpdate]);

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
      username,
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
    dispatch(roomUpdate(room, roomId));
  };
  return (
    <div className="small-container">
      <h1 style={{ marginBottom: "20px" }}>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="sales-form-group">
          <label>Owner Name</label>
          <input
            type="text"
            value={username}
            className="sales-form-control"
            onChange={(e) => setUsername(e.target.value)}
            disabled
          />
        </div>
        <div className="sales-form-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            className="sales-form-control"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>City</label>
          <input
            type="text"
            value={city}
            className="sales-form-control"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Description</label>
          <textarea
            className="sales-form-control textarea"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="sales-form-group">
          <label>Price</label>
          <input
            type="text"
            value={price}
            className="sales-form-control price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Bedrooms</label>
          <input
            type="number"
            value={bedroom}
            className="sales-form-control bedrooms"
            onChange={(e) => setBedroom(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Bathrooms</label>
          <input
            type="number"
            value={bathroom}
            className="sales-form-control bathrooms"
            onChange={(e) => setBathroom(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Garage</label>
          <div>
            <input
              type="radio"
              onChange={(e) => setGarage(true)}
              checked={garage === true}
            />{" "}
            Yes{" "}
            <input
              type="radio"
              onChange={(e) => setGarage(false)}
              checked={garage === false}
            />{" "}
            No
          </div>
        </div>
        <div className="sales-form-group">
          <label>Photo main</label>
          <span>
            <b>{mainImage}</b>
          </span>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => uploadFileHandler(e, setMainImage)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 1:</label>
          <span>
            <b>{image1}</b>
          </span>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => uploadFileHandler(e, setImage1)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 2:</label>
          <span>
            <b>{image2}</b>
          </span>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => uploadFileHandler(e, setImage2)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 3:</label>
          <span>
            <b>{image3}</b>
          </span>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => uploadFileHandler(e, setImage3)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 4:</label>
          <span>
            <b>{image4}</b>
          </span>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => uploadFileHandler(e, setImage4)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 5:</label>
          <span>
            <b>{image5}</b>
          </span>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => uploadFileHandler(e, setImage5)}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Update Room"
            className="createroom-save-button"
          />
        </div>
      </form>
    </div>
  );
};

export default EditScreen;
