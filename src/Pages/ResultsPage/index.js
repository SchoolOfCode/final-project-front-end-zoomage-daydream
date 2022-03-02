import { useState } from "react";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import css from "./resultpage.module.css";
import Card from "../../components/Card";

const Result = () => {
  const location = useLocation();
  const [lowToHigh, setLowToHigh] = useState([]);
  const [HighToLow, setHighToLow] = useState([]);
  const results = location.state.payload;
  // console.log(results);

  
  const sortHighToLow = (e) => {
    // const filterResults = [...results]
  const value = e.target.value
 
console.log(value)
if(value!==1){
  console.log(value)
}
  };

  return (
    <div className={css.mainContainer}>
      <Header />
      <div className={css.locAndFilter}>
        {" "}
        <p className={css.locationName}>
          Results found for {results[0].address.split(" ")[3].slice(0, 6)}
        </p>
        <div className={css.filter}>
          <select onChange={sortHighToLow}>
            <option></option>
            <option value={1}>Low to high</option>
            <option value={2}>High to Low</option>
          </select>
        </div>
      </div>

      <div className={css.block}>
        <div className={css.result}>
          {" "}
          {results.map((item) => {
            return (
              <Card
                image={item.images[0]}
                address={item.address}
                starttime={item.starttime}
                key={item.id}
                id={item.id}
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
