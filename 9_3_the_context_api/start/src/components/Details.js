import React from "react";
import OpenOrClosed from "./OpenOrClosed";
import Offer from "./Offer";

import RestaurantContext from "./ReataurantContext";
const Details = () => (
  <RestaurantContext.Consumer>
    {({ name, categories, location }) => {
      <>
        <div className="res-name">{name}</div>
        <div className="res-category">{categories.join(", ")}</div>
        <div className="res-location">{location}</div>
        <OpenOrClosed />
        <Offer />
      </>;
    }}
  </RestaurantContext.Consumer>
);

export default Details;
