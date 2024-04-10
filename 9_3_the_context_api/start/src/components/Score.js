import React from "react";

const Score = ({ value }) => {
  const getBgColor = (val) => {
    if (val <= 2.0) {
      return { backgroundColor: "rgb(255,0,0)" };
    } else if (val > 2.0 && val < 4.0) {
      return { backgroundColor: "rgb(214, 158, 26)" };
    } else {
      return { backgroundColor: "rgb(13, 114, 0)" };
    }
  };
  return (
    <div className="res-score" style={getBgColor(value)}>
      {value}
    </div>
  );
};

export default Score;
