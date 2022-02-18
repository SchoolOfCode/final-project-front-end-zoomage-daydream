import React from "react";
import css from "./header.module.css";
import Logo from "../../images/Logo.png";
import { Link } from "react-router-dom";

// Header component
const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={css.linkList}>
        <div className={css.links}>
          {" "}
          <Link className={css.headerLinks} to="/mission">
            <p>Our Mission</p>
          </Link>
        </div>
        <div className={css.links}>
          <Link className={css.headerLinks} to="/register">
            <p>Become a Host</p>
          </Link>
        </div>
        <div className={css.links}>
          <Link className={css.headerLinks} to="/register">
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
