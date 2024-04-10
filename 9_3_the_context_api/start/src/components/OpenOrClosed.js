import React from "react";
import RestaurantContext from "./ReataurantContext";

const OpenOrClosed = () => {
  return (
    <RestaurantContext.Consumer>
      {({ isOpen: status }) => {
        <div className={status ? "res-open" : "res-closed"}>
          {status ? "Open Now" : "Closed"}
        </div>;
      }}
    </RestaurantContext.Consumer>
  );
};

export default OpenOrClosed;
