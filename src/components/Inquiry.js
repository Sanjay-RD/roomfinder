import React from "react";

const Inquiry = ({ onClose }) => {
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
          <div className="form-group">
            <label>Property:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea className="form-control" />
          </div>
          <button className="button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
