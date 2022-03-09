import React, { useEffect } from "react";
import Header from "../../components/Header";

import HomeCard from "./homeCards";
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
const arrays = spaces.slice(0,7)
const [users] = useFetch(`${API_URL}/users/`);

  const navigate = useNavigate();






  useEffect(() => {
    if (isAuthenticated === true) {
      const usersArray = users.map((item) => {
        return item.email;
      });
      if (spaces.length > 0) {
        const userStatus = usersArray.includes(user.email);
        if (userStatus === !true) {
          navigate("/registerhost");
        }
      }
    }
  }, [user]);
// ddd
  return (
    <div className={css.home}>
      <Header />
      <h2 className={css.slogan}>The place to find your Space</h2>
      <SearchForm />
      <div className={css.cards}>
        {" "}
        {arrays.map((item, index) => {
          return (
            <HomeCard
              image={item.images[0]}
              address={item.address}
              starttime={item.starttime}
              price={item.hourly_price}
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
