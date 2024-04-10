import React from "react";

const WithStorage = (Component) => (props) => {
  return <Component {...props} />;
};

export default WithStorage;
