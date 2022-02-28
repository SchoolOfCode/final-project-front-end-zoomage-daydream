import { Routes, Route } from "react-router-dom";
import Mission from "../../Pages/Mission";
import Home from "../../Pages/Home";
import Result from "../../Pages/ResultsPage";
import Register from "../../Pages/Register";
import Dashboard from "../../Pages/Dashboard";
import Reserve from "../../Pages/Reserve";
import PropertyDetails from "../../Pages/PropertyDetails"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mission" element={<Mission />} />
        <Route path="result" element={<Result />} />
        <Route path="register" element={<Register />} />
 
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reserve" element={<Reserve />} />
        <Route path="PropertyDetails" element={<PropertyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
