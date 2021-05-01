import React from "react";

const Messagebox = ({ onClose }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="inquiry-container">
      <div className="inquiry-box">
        <div className="inquiry-header">
          <h3>Message</h3>
          <h3 className="inquiry-close" onClick={onClose}>
            x
          </h3>
        </div>
        <div className="inquiry-content">
          <h5>Are you sure you want to delete this post</h5>
        </div>
        <div style={{ padding: "0px 20px" }}>
          <button className="more-button delete">Delete Post</button>
        </div>
      </div>
    </div>
  );
};

export default Messagebox;
