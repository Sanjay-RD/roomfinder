import React from "react";

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
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
