import React, { useState, useEffect } from "react";
import css from "./dashboard.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Profile from "../../components/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMessage,
  faCalendarCheck,
  faUser,
  faHeart,
  faGear,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

import API_URL from "../../config";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileSect from "../../components/ProfileSection";

function Dashboard() {
  const [space, setSpace] = useState([]);
  const { user, isAuthenticated } = useAuth0();
  const [current, setCurrent] = useState(true);
  const [users, setUsers] = useState([
    {
      date_of_birth: "wwww"
    }
  ]);

  useEffect(() => {
    const fetchCurrentBookings = async () => {
      const result = await fetch(`${API_URL}/spaces/`);
      const data = await result.json();
      const array = data.payload.slice(0, 1);
      setSpace(array);
    };
    fetchCurrentBookings();
  }, []);

  useEffect(() => {
    if (isAuthenticated === true) {
      const fetchProfileData = async () => {
        const url = `${API_URL}/users/?email=${user.email}`;
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data.payload);
      };
      fetchProfileData();
    }
  }, []);

  const profile = () => {
    setCurrent("profile");
  };

  return (
    <div>
      <Header />
      {isAuthenticated && (
        <div className={css.dashboardSect}>
          <div className={css.sidebarContainer}>
            <h2>
              {" "}
              <FontAwesomeIcon icon={faUser} className={css.sidebarIcons} />
              Username
            </h2>

            <h2>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className={css.sidebarIcons}
              />
              My Bookings
            </h2>
            <h2>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className={css.sidebarIcons}
              />
              Listings
            </h2>
            <h2>
              <FontAwesomeIcon icon={faMessage} className={css.sidebarIcons} />
           Message
            </h2>

            <h2>
              <FontAwesomeIcon icon={faGear} className={css.sidebarIcons} />
              Settings
            </h2>
          </div>
          
            <div className={css.profileSect}>
              <ProfileSect />
            </div>
       
        </div>
      )}
      <Footer />
    </div>
  );
}
export default Dashboard;
