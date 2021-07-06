import React, { useState, useEffect } from "react";
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
  const [mainphoto, setMainphoto] = useState("");
  const [photo1, setPhoto1] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photo3, setPhoto3] = useState("");
  const [photo4, setPhoto4] = useState("");
  const [photo5, setPhoto5] = useState("");

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
        setMainphoto(room.mainImage);
        setPhoto1(room.image1);
        setPhoto2(room.image2);
        setPhoto3(room.image3);
        setPhoto4(room.image4);
        setPhoto5(room.image5);
      }
    }
  }, [dispatch, room._id, history, successRoomUpdate]);

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
      mainphoto,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
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
            <b>{mainphoto}</b>
          </span>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => setMainphoto(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 1:</label>
          <span>
            <b>{photo1}</b>
          </span>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => setPhoto1(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 2:</label>
          <span>
            <b>{photo2}</b>
          </span>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => setPhoto2(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 3:</label>
          <span>
            <b>{photo3}</b>
          </span>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => setPhoto3(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 4:</label>
          <span>
            <b>{photo4}</b>
          </span>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => setPhoto4(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 5:</label>
          <span>
            <b>{photo5}</b>
          </span>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => setPhoto5(e.target.value)}
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

export default EditScreen;
