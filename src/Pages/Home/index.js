import React from "react";
import Header from "../../components/Header";

import Card from "../../components/Card";
import Footer from "../../components/Footer";
import SearchForm from "../../components/SearchForm";
import css from "./home.module.css";

const Home = () => {
  return (
    <div className={css.home}>
      <Header />
      <h2 className={css.slogan}>The place to find your Space</h2>
      <SearchForm />
      <div className={css.cards}>
        {" "}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
