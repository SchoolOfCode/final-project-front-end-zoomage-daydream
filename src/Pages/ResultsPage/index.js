import React from "react";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import css from "./resultpage.module.css";
import Card from "../../components/Card";

const Result = () => {
  const location = useLocation();
  
  const results = location.state.payload;
 
  return (
    <div className={css.mainContainer}>
      <Header />
      <p>Results found for {results[0].address.split(" ")[3].slice(0, 6)}</p>
      <div className={css.block}>
        <div className={css.result}>
          {" "}
          {results.map((item, index) => {
            return (
              <Card
                id={css.resultCard}
                image={item.images[0]}
                address={item.address}
                starttime={item.starttime}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Result;
