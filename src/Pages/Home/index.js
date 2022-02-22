import React from "react";
import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Background from "../../components/Background";

const Home = () => {
  return (
    <div>
      <Header />
      <h2 className="slogan">The place to find your Space</h2>
      <Background/>
      
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
