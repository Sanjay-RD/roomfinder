import React from "react";
import { Link } from "react-router-dom";

const InquiryList = ({ msg }) => {
  return (
    <tr>
      <td>{msg.id}</td>
      <td>{msg.email}</td>
      <td>
        <div className="view-listing">
          <Link to="/edit/room/2">
            <i className="fas fa-edit"></i> Edit Post
          </Link>
        </div>
      </td>
      <td>
        <div className="view-listing danger">
          <Link to="/room/2">
            {" "}
            <i className="fas fa-trash"></i>Delete Post
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default InquiryList;
