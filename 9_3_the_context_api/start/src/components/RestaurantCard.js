import React from "react";
import Score from "./Score";
import Details from "./Details";
import RestaurantContext from "./ReataurantContext";

const RestaurantCard = ({
  name,
  categories,
  location,
  isOpen,
  offer,
  score,
}) => (
  <div className="restaurant">
    <RestaurantContext.Provider
      value={{ name, categories, location, isOpen, offer, score }}
    >
      <Details />
      <Score />
    </RestaurantContext.Provider>
  </div>
);

export default RestaurantCard;
