import React from "react";
import NumberFormat from "react-number-format";

const RoomInfo = ({ room }) => {
  return (
    <div
      className="room-flex"
      style={{ marginTop: "30px", color: "#47856c", gridGap: "2rem" }}
    >
      <div>
        <div style={flexContainer}>
          <h4>
            <i className="fa fa-money" aria-hidden="true"></i> Asking Price:
          </h4>
          <h4>
            <NumberFormat
              value={room.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"Rs: "}
            />
          </h4>
        </div>
        <div className="line-brake"></div>
        <div style={flexContainer}>
          <h4>
            <i className="fa fa-bed" aria-hidden="true"></i> Bedrooms:
          </h4>
          <h4>{room.bedroom}</h4>
        </div>
        <div className="line-brake"></div>
        <div style={flexContainer}>
          <h4>
            <i className="fa fa-bath" aria-hidden="true"></i> Bathrooms:
          </h4>
          <h4>{room.bathroom}</h4>
        </div>
        <div className="line-brake"></div>
        <div style={flexContainer}>
          <h4>
            <i className="fa fa-car" aria-hidden="true"></i> Garage:
          </h4>
          <h4>{room.garage ? "Yes" : "No"}</h4>
        </div>
      </div>
      {/* second list */}
      <div>
        <div style={flexContainer}>
          <h4>
            <i className="fas fa-map-marker-alt icon-color"></i> location
          </h4>
          <h4>
            {room.address}, {room.city}
          </h4>
        </div>
        <div className="line-brake"></div>
        {/* {room.sqft && (
          <div>
            <div style={flexContainer}>
              <h4>
                <i className="fa fa-th-large" aria-hidden="true"></i> Square
                Feet:
              </h4>
              <h4>{room.sqft}</h4>
            </div>
            <div className="line-brake"></div>
          </div>
        )} */}
        <div style={flexContainer}>
          <h4>
            <i className="fa fa-clock-o" aria-hidden="true"></i> Listing Date:
          </h4>
          <h4>{room.createdAt && room.createdAt.substring(0, 10)}</h4>
        </div>
        <div className="line-brake"></div>
        <div style={flexContainer}>
          <h4>
            <i className="fa fa-user" aria-hidden="true"></i> Owner:
          </h4>
          <h4>{room.user && room.user.userName}</h4>
        </div>
      </div>
    </div>
  );
};
const flexContainer = {
  display: "flex",
  justifyContent: "space-between",
};

export default RoomInfo;
