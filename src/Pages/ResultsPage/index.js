import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const mu = location.state;
  // console.log(mu.payload[0].address);
  return <div>{mu.payload[0].address}</div>;
};

export default Result;
