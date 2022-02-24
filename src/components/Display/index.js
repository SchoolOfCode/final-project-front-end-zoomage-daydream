import React from "react";
import { Routes, Route } from "react-router-dom";
import Mission from "../../Pages/Mission";
import Home from "../../Pages/Home";
import Register from "../../Pages/Register";
//  import SearchForm from "../SearchForm/SearchForm";

const Display = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mission" element={<Mission />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
};

export default Display;
