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
  const [filterState, setFilterState] = useState("")
  const results = location.state.payload;

  const sortHighToLow = (e) => {
    const filterResults = [...results];
    const value = e.target.value;

    if (value === "high") {
      const sortHigh = filterResults.sort(
        (a, b) => b.hourly_price - a.hourly_price
      );
      setFilterState(true)
      setHighToLow(sortHigh);
    } 
    else if (value === "low") {
      const sortLow = filterResults.sort(
        (a, b) => a.hourly_price - b.hourly_price
      );
      setFilterState(false)
      setLowToHigh(sortLow);
    }
  };



  return (
    <div className={css.mainContainer}>
      <Header />
      <div className={css.main}>
        <div className={css.locAndFilter}>
          {" "}
          <p className={css.locationName}>
            Results found for {results[0].address.split(" ")[3].slice(0, 10)}
          </p>
          <div className={css.filter}>
            <select onChange={sortHighToLow} className={css.filterButton}>
              <option>filter</option>
              <option value="low">Low to high</option>
              <option value="high">High to Low</option>
            </select>
          </div>
        </div>

        <div className={css.block}>
        <div className={css.result}>
          {" "}
          {lowToHigh[0]&&(filterState===false)
            ? lowToHigh.map((item) => {
                return (
                  <Card
                    image={item.images[0]}
                    address={item.address}
                    starttime={item.starttime}
                    key={item.id}
                    price={item.hourly_price}
                    id={item.id}
                  />
                );
              })
            : highToLow[0]&&(filterState===true)
            ? highToLow.map((item) => {
                return (
                  <Card
                    image={item.images[0]}
                    address={item.address}
                    starttime={item.starttime}
                    key={item.id}
                    price={item.hourly_price}
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
                    price={item.hourly_price}
                    id={item.id}
                  />
                );
              })}
        </div>
 <a href="www.google.com">Google!</a>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Result;
