import React, { useState } from "react";

const Editpost = () => {
  const [ownername, setOwnername] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [garage, setGarage] = useState("true");
  const [mainphoto, setMainphoto] = useState("");
  const [photo1, setPhoto1] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photo3, setPhoto3] = useState("");
  const [photo4, setPhoto4] = useState("");
  const [photo5, setPhoto5] = useState("");
  const [photo6, setPhoto6] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("object");
  };
  return (
    <div className="sales-container">
      <h1 style={{ marginBottom: "20px" }}>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="sales-form-group">
          <label>Owner Name</label>
          <input
            type="text"
            className="sales-form-control"
            onChange={(e) => setOwnername(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Title</label>
          <input
            type="text"
            className="sales-form-control"
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Email</label>
          <input
            type="email"
            className="sales-form-control"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setMainphoto(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 1:</label>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => setPhoto1(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 2:</label>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => setPhoto2(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 3:</label>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => setPhoto3(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 4:</label>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => setPhoto4(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 5:</label>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => setPhoto5(e.target.value)}
          />
        </div>
        <div className="sales-form-group">
          <label>Photo 6:</label>
          <input
            type="file"
            className="sales-form-control file"
            onChange={(e) => setPhoto6(e.target.value)}
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

export default Editpost;
