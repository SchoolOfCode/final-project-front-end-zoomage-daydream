import { useState } from "react";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import css from "./resultpage.module.css";
import Card from "../../components/Card";

const Result = () => {
  const location = useLocation();
  const [lowToHigh, setLowToHigh] = useState([]);
  const [highToLow, setHighToLow] = useState([]);
  const results = location.state.payload;
  // console.log(results);

  const sortHighToLow = (e) => {
    const filterResults = [...results];
    const value = e.target.value;

    if (value === "high") {
      const sortHigh = filterResults.sort(
        (a, b) => b.hourly_price - a.hourly_price
      );
      setHighToLow(sortHigh);
    } else if (value === "low") {
      const sortHigh = filterResults.sort(
        (a, b) => a.hourly_price - b.hourly_price
      );
      setLowToHigh(sortHigh);
    }
  };

   console.log(lowToHigh[0]);
   console.log(results[0])

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
            <option value="low">Low to high</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>

      <div className={css.block}>
        <div className={css.result}>
          {" "}
          {lowToHigh[0]
            ? lowToHigh.map((item) => {
                return (
                  <Card
                    image={item.images[0]}
                    address={item.address}
                    starttime={item.starttime}
                    key={item.id}
                    id={item.id}
                  />
                );
              })
            : highToLow[0]
            ? highToLow.map((item) => {
                return (
                  <Card
                    image={item.images[0]}
                    address={item.address}
                    starttime={item.starttime}
                    key={item.id}
                    id={item.id}
                  />
                );
              })
            : results.map((item) => {
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
      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Result;
