import React from "react";
import Header from "../../components/Header";

import Card from "../../components/Card";
import Footer from "../../components/Footer";
import SearchForm from "../../components/SearchForm";

const Home = () => {
  return (
    <div>
      <Header />
      <h2 className="slogan">The place to find your Space</h2>
      <SearchForm />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
