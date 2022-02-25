import React from "react";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";

const Result = () => {
  const location = useLocation();
  // const mu = location.state;
  return (
    <div>
   <Header/>
   <p>sfsf</p>
   <p>sfsf</p>
   <p>sfsf</p>
   <p>sfsf</p>
   <p>sfsf</p>
   <p>sfsf</p>
   <p>sfsf</p>
   <Footer/>
    </div>
  );
};

export default Result;
