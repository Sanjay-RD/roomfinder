import React from "react";
import { Link } from "react-router-dom";

function Pagination({ roomsPerPage, totalRooms, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalRooms / roomsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="Page navigation">
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <Link
              onClick={() => paginate(number)}
              to={`/page/${number}`}
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
