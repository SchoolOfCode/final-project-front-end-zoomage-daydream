import { Routes, Route } from "react-router-dom";
import Mission from "../../Pages/Mission";
import Home from "../../Pages/Home";
import Result from "../../Pages/ResultsPage";
import Register from "../../Pages/Register";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mission" element={<Mission />} />
        <Route path="result" element={<Result />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
