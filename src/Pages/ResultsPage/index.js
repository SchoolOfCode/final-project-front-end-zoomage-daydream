import React from "react";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import css from "./resultpage.module.css"

const Result = () => {
  const location = useLocation();
  // const mu = location.state;
  return (
    <div className={css.result}>
      <Header />
      <div className={css.mainContainer}>
        <p>sfsf</p>
        <p>sfsf</p>
        <p>sfsf</p>
        <p>sfsf</p>
        <p>sfsf</p>
        <p>sfsf</p>
        <p>sfsf</p>
      </div>
      <Footer />
    </div>
  );
};

export default Result;
