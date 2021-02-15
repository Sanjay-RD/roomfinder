import React, { useEffect, useState } from "react";

import NumberFormat from "react-number-format";

import Moment from "moment";
import { extendMoment } from "moment-range";

const ListingItem = ({ item }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    getDiffTime();
  }, []);

  const getDiffTime = () => {
    // const dates = [
    //   Moment("2011-04-15", "YYYY-MM-DD"),
    //   Moment("2011-11-27", "YYYY-MM-DD"),
    // ];
    // const range = Moment.range(dates);
    // setTime(dates);
    const moment = extendMoment(Moment);
    const end = moment().format("YYYY-MM-DD");
    // const start = new Date();
    // console.log(start);
    const start = moment(`${item.start}`, "YYYY-MM-DD");
    // const end = moment("2021-2-7", "YYYY-MM-DD");
    // console.log(end);
    const range = moment.range(start, end);
    let days = range.diff("days");
    console.log(days);
    setTime(days);
  };

  return (
    <div className="box">
      <div className="image-section">
        <span className="price">
          <NumberFormat
            value={item.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs."}
          />
        </span>
        <img src={item.photomain} alt="mainimage" className="mainImage" />
      </div>
      <div className="content">
        <div className="roomsection-header">
          <h3>{item.title}</h3>
          <div className="location">
            <h4>
              <i className="fas fa-map-marker-alt icon-color"></i>{" "}
              {item.address} {item.city}
            </h4>
          </div>
        </div>
        <div className="line-brake"></div>
        <div className="roomsection-info">
          <div className="bathroom">
            <p className="small-size">
              <i className="fa fa-bath" aria-hidden="true"></i> Bathroom:{" "}
              {item.bathroom}
            </p>
          </div>
          <div className="bedroom">
            <p className="small-size">
              <i className="fa fa-bed" aria-hidden="true"></i> Bedroom:{" "}
              {item.bedroom}
            </p>
          </div>
          <div className="garage">
            <p className="small-size">
              <i className="fa fa-car" aria-hidden="true"></i> Garage:{" "}
              {item.garage}
            </p>
          </div>
          {item.sqft && (
            <div className="sqft">
              <p className="small-size">
                <i className="fa fa-th-large" aria-hidden="true"></i> Sqft:{" "}
                {item.sqft}
              </p>
            </div>
          )}
        </div>
        <div className="line-brake"></div>
        <div className="owner-info">
          <div className="owner">
            <p className="small-size">
              <i className="fa fa-user" aria-hidden="true"></i> {item.owner}
            </p>
          </div>
          <div className="time-duration">
            <p className="small-size">
              <i className="fa fa-clock-o" aria-hidden="true"></i> {time} days
            </p>
          </div>
        </div>
        <div className="line-brake"></div>
        <button className="more-button">
          <a href="/more/1">More Info</a>
        </button>
      </div>
    </div>
  );
};

export default ListingItem;
