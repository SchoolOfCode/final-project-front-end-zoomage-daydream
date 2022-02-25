import React from "react";
import { Routes, Route } from "react-router-dom";
import Mission from "../../Pages/Mission";
import Home from "../../Pages/Home";
import Result from "../../Pages/ResultsPage";

const Display = () => {
  return (
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mission" element={<Mission />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </div>

  );
};

export default Display;
