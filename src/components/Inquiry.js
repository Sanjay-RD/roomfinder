import React, { useState } from "react";

const Inquiry = ({ onClose }) => {
  const [property, setProperty] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (name || email || phone) {
      setProperty("");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      onClose();
    } else {
      console.log("enter all field");
    }
  };

  return (
    <div className="inquiry-container">
      <div className="inquiry-box">
        <div className="inquiry-header">
          <h3>Make An Inquiry</h3>
          <h3 className="inquiry-close" onClick={onClose}>
            x
          </h3>
        </div>
        <div className="inquiry-content">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Property:</label>
              <input
                type="text"
                className="form-control"
                name="property"
                value={property}
                onChange={(e) => setProperty(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              <label>Phone:</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea
                className="form-control"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <input type="submit" value="Send" className="button" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
