import React from "react";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import SearchForm from "../../components/SearchForm";
import css from "./home.module.css";
import useFetch from "../../components/hooks/useFetch";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import API_URL from "../../config";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  const [spaces] = useFetch(`${API_URL}/spaces/`);
  const arrays = spaces.slice(0, 7);
  const [users] = useFetch(`${API_URL}/users/`);
  const navigate = useNavigate();

  if (isAuthenticated === true) {
    console.log(user.email)
    const userStatus = users.some((item) => 
       item.email === user.email
    );
   if(userStatus===false){
     navigate("/registerhost")
   }
    
  }
  return (
    <div className={css.home}>
      <Header />
      
    </div>
  );
};

export default Home;
