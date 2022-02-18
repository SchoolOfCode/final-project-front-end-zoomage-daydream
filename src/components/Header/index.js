import React from "react";
import css from "./header.module.css";
import Logo from "../../images/Logo.png";
import { Link } from "react-router-dom";

// Header component
const Header = () => {
  return (
    <div>
      Header
      <div className={css.Logo}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div>
        <Link to="/mission">
          <p>Our Mission</p>
        </Link>
        <Link to="/register">
          <p>Become a Host</p>
        </Link>
        <p>Login</p>
      </div>
    </div>
  );
};

export default Header;
