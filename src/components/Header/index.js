import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


import css from "./header.module.css";
import Logo from "../../images/Logo.png";
import SignUp from "../SignUp";
import LoginButton from "../Login";
import LogoutButton from "../LogOut";


// Header component
const Header = () => {
  // isAuthenticated is destructured from useAuth0
  const { isAuthenticated } = useAuth0();

  return (
    <div className={css.header}>
      <div className={css.logo}>
      {/* the logo takes you back to the home page when you click on it. */}
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={css.linkList}>
        <div className={css.links}>
          {" "}
          {/* mission takes you to the mission page when you click on it */}
          <Link className={css.headerLinks} to="/mission">
            <p className={css.links}>OUR MISSION</p>
          </Link>
        </div>
        <div className={css.links}>
        {/* dashboard is conditionally rendered. It shows if you are logged in while sign up shows if you are not logged in. */}
          {isAuthenticated ? (
            <Link className={css.headerLinks} to="/dashboard">
              <p>DASHBOARD</p>
            </Link>
          ) : (
            <SignUp />
          )}
        </div>
        {/* list your space is conditionally rendered only shows if you are logged in. */}
        {isAuthenticated && (
          <Link className={css.headerLinks} to="/PropertyDetails">
            <div className={css.links}>LIST YOUR SPACE</div>
          </Link>
        )}
      {/* login button is also conditionally rendered. It shows if you are not logged in. While logout shows if you are logged in. */}
        <div className={css.links}>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </div>
  );
};

export default Header;
