import React from "react";
import Header from "../Header";
import { Routes, Route } from "react-router-dom";
import Mission from "../../Pages/Mission";
import Home from "../../Pages/Home";

const Display = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mission" element={<Mission />} />
      </Routes>
      <Header />
      <h2 className="slogan">The place to find your Space</h2>
    </div>
  );
};

export default Display;
