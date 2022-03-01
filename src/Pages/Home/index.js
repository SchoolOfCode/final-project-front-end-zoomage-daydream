import React from "react";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import SearchForm from "../../components/SearchForm";
import css from "./home.module.css";
import useFetch from "../../components/hooks/useFetch";

import API_URL from "../../config";

const Home = () => {
  // const [space, setSpace] = useState([]);
  // const fetchSpaces = async () => {
  //   const result = await fetch(`${API_URL}/spaces/`);
  //   const data = await result.json();
  //   const array = data.payload.slice(0, 7);
  //   setSpace(array);
  // };
  // useEffect(() => {
  //   fetchSpaces();
  // }, []);

  const [spaces] = useFetch(`${API_URL}/spaces/`);
  const arrays = spaces.slice(0, 7);
  console.log("d",arrays);

  return (
    <div className={css.home}>
      <Header />
      <h2 className={css.slogan}>The place to find your Space</h2>
      <SearchForm />
      <div className={css.cards}>
        {" "}
        {arrays.map((item, index) => {
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
      <Footer />
    </div>
  );
};

export default Home;
