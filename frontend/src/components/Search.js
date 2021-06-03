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
            className="search-form-control input-text"
          />
          <input
            type="text"
            placeholder="Address"
            className="search-form-control input-text"
          />
          <select name="rooms" className="search-form-control">
            <option value="select rooms" className="placeholder-color">
              Select Rooms
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <select name="bedrooms" className="search-form-control">
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
            className="search-form-control search-button"
            onClick={handleClick}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
