import { Routes, Route } from "react-router-dom";
import Mission from "../../Pages/Mission";
import Home from "../../Pages/Home";
import Result from "../../Pages/ResultsPage";
import Register from "../../Pages/Register";
import Dashboard from "../../Pages/Dashboard";
<<<<<<< HEAD
import Reserve from "../../Pages/Reserve";
=======
import PropertyDetails from "../../Pages/PropertyDetails"
>>>>>>> c2abe7202dd761286951305b577ac8531fb29be1

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
<<<<<<< HEAD
        <Route path="reserve" element={<Reserve />} />
=======
        <Route path="PropertyDetails" element={<PropertyDetails />} />
>>>>>>> c2abe7202dd761286951305b577ac8531fb29be1
      </Routes>
    </div>
  );
}

export default App;
