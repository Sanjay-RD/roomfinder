import React, { useEffect, useState } from "react";

import NumberFormat from "react-number-format";
import Moment from "moment";
import { extendMoment } from "moment-range";
import { Link } from "react-router-dom";
import { set } from "mongoose";

const ListingItem = ({ item }) => {
  let newDate = new Date();
  const [days, setDays] = useState(0);
  const [month, setMonth] = useState(0);
  const [todayDate, setTodayDate] = useState(newDate.getDate());
  const [todayMonth, setTodayMonth] = useState(newDate.getMonth() + 1);
  const [createdDate, setCreatedDate] = useState(
    item.createdAt.split("-")[2].split("T")[0]
  );
  const [createdMonth, setCreatedMonth] = useState(
    item.createdAt.split("-")[1]
  );
  console.log(`todayDate:${todayDate}, todayMonth:${todayMonth}`);
  console.log(`createdMonth:${createdMonth}`);
  console.log(`createdDate:${createdDate}`);
  console.log(item.createdAt);

  useEffect(() => {
    getDiffTime();
    // eslint-disable-next-line
  }, []);

  console.log(days, month);
  const totalDaysInMonths = new Date(
    todayMonth,
    newDate.getFullYear(),
    0
  ).getDate();

  const getDiffTime = () => {
    if (createdDate < todayDate) {
      const diffDays = todayDate - createdDate;
      setDays(diffDays);
    } else if (todayDate < createdDate) {
      const remaningDays = totalDaysInMonths - createdDate;
      const diffDays = remaningDays + todayDate;
      setDays(diffDays);
    }
    if (createdMonth !== todayMonth) {
      const diffMonth = todayMonth - createdMonth;
      setMonth(diffMonth);
    }
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
        <Link to={`/room/${item._id}`}>
          <img src={item.mainImage} alt="mainimage" className="mainImage" />
        </Link>
      </div>
      <div className="content">
        <div className="roomsection-header">
          <h4 style={{ marginBottom: "5px" }}>Room ID: {item._id}</h4>
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
              {item.garage ? "Yes" : "No"}
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
              <i className="fa fa-user" aria-hidden="true"></i>{" "}
              {item.user.userName}
            </p>
          </div>
          <div className="time-duration">
            <p className="small-size">
              <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
              {month !== 0 && month} {month !== 0 && "month"} {days && days}{" "}
              days
            </p>
          </div>
        </div>
        <div className="line-brake"></div>
        <Link to={`/room/${item._id}`}>
          <button className="more-button">More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default ListingItem;
