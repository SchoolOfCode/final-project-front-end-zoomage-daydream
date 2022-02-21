import React from "react";
import background from "../../images/background.jpg";
import css from "./home.module.css";

const Home = () => {
  return (
    <div>
      <img
        src={background}
        alt="background-pic"
        className={css.backgroundPic}
      />
    </div>
  );
};

export default Home;
