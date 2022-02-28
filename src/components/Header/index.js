import React from "react";
import css from "./header.module.css";
import Logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import MenuListComposition from "../SignUpMenu";

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
            <p>OUR MISSION</p>
          </Link>
        </div>
        <div>
          <MenuListComposition/>
        </div>
        <div className={css.links}>
          <Link className={css.headerLinks} to="/dashboard">
            <p>LOGIN</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
