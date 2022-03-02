import React from "react";
import css from "./header.module.css";
import Logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import SignUp from "../SignUp";
import LoginButton from "../Login";
import LogoutButton from "../LogOut";

import { useAuth0 } from "@auth0/auth0-react";

// Header component
const Header = () => {
  const { isAuthenticated } = useAuth0();
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
            <p className={css.text}>OUR MISSION</p>
          </Link>
        </div>
        <div className={css.links}>
          {isAuthenticated ? (
            <Link className={css.headerLinks} to="/dashboard">
              <p>DASHBOARD</p>
            </Link>
          ) : (
            <SignUp />
          )}
        </div>
        {isAuthenticated && (
          <Link className={css.headerLinks} to="/PropertyDetails">
            <div>LIST YOUR SPACE</div>
          </Link>
        )}
        <div className={css.links}>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </div>
  );
};

export default Header;
