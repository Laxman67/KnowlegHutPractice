import React, { useState, useEffect } from "react";
import RestaurantCard from "./components/RestaurantCard";
import dataSource from "./data/dataSource";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    dataSource().then((data) => setData(data));
  }, []);
  return (
    <div className="app">
      {data.map(
        ({
          resId,
          resName,
          resCategories,
          resLocation,
          resOpen,
          resOffer,
          resScore,
        }) => (
          <RestaurantCard
            key={resId}
            name={resName}
            categories={resCategories}
            location={resLocation}
            isOpen={resOpen}
            offer={resOffer}
            score={resScore}
          />
        ),
      )}
    </div>
  );
};

export default App;
