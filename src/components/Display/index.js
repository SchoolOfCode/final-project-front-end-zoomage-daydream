import React from "react";
import { Routes, Route } from "react-router-dom";
import Mission from "../../Pages/Mission";
import Home from "../../Pages/Home";
import Dashboard from "../../Pages/Dashboard";

//  import SearchForm from "../SearchForm/SearchForm";

const Display = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mission" element={<Mission />} />
          <Route path="Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
};

export default Display;
