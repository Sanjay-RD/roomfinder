import React, { useState } from "react";

function Search() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button className="search-mobile-button" onClick={handleClick}>
        <p>Search</p>
      </button>
      <div className={toggle ? "modile-search search" : "search"}>
        <h3 className="search-heading">Property Searching Just Go Easy</h3>
        <p className="search-instruction">
          Insert any of this field for advanced search
        </p>
        <form className="search-form">
          <input
            type="text"
            placeholder="Keyword (garage,room,address,etc)"
            className="form-control"
          />
          <input type="text" placeholder="Address" className="form-control" />
          <select name="rooms" className="form-control">
            <option value="select rooms" className="placeholder-color">
              Select Rooms
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <select name="bedrooms" className="form-control">
            <option value="Bedrooms" className="placeholder-color">
              Bedrooms
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <input
            type="submit"
            value="Submit"
            className="form-control"
            onClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
