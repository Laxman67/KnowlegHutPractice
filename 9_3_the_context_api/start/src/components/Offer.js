import React, { useState } from "react";
import RestaurantContext from "./ReataurantContext";

const Offer = () => {
  const [showOffer, setShowOffer] = useState(false);
  return (
    <RestaurantContext.Consumer>
      {({ Offer: offerText }) => {
        <div className="res-offers" onClick={() => setShowOffer(true)}>
          {showOffer
            ? offerText
              ? offerText
              : "No offers available"
            : "Get Offers"}
        </div>;
      }}
    </RestaurantContext.Consumer>
  );
};

export default Offer;
