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
import PreviousBookings from "../../components/PreviousBookings";
import PreviousListings from "../../components/PreviousListings";

function Dashboard() {
  const [space, setSpace] = useState([]);
  const { user, isAuthenticated } = useAuth0();
  const [current, setCurrent] = useState("profile");
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
  const bookings = () => {
    setCurrent("bookings");
  };
  const listings = () => {
    setCurrent("listings");
  };

  return (
    <div className={css.dashboard}>
      <Header />
      {isAuthenticated && (
        <div className={css.dashboardSect}>
          <div className={css.sidebarContainer}>
            <h2 onClick={profile} className={css.sidebarComponent}>
              {" "}
              <FontAwesomeIcon
                onClick={profile}
                icon={faUser}
                className={css.sidebarIcons}
              />
              Username
            </h2>

            <h2 onClick={bookings} className={css.sidebarComponent}>
              <FontAwesomeIcon
                onClick={bookings}
                icon={faCalendarCheck}
                className={css.sidebarIcons}
              />
              My Bookings
            </h2>
            <h2 onClick={listings} className={css.sidebarComponent}>
              <FontAwesomeIcon
                onClick={listings}
                icon={faCalendarCheck}
                className={css.sidebarIcons}
              />
              Listings
            </h2>
            <h2 className={css.sidebarComponent}>
              <FontAwesomeIcon icon={faMessage} className={css.sidebarIcons} />
              Message
            </h2>

            <h2 className={css.sidebarComponent}>
              <FontAwesomeIcon icon={faGear} className={css.sidebarIcons} />
              Settings
            </h2>
          </div>

          {current === "profile" && (
            <div className={css.profileSect}>
              <ProfileSect />
            </div>
          )}

          {current === "bookings" && (
            <div>
              <h2>History of Bookings</h2>
              <div className={css.block}>
                <div className={css.bookings}>
                  <PreviousBookings />
                </div>
              </div>
            </div>
          )}
          {current === "listings" && (
            <div>
              <h2>History of Listings</h2>
              <div className={css.block}>
                <div className={css.listings}>
                  <PreviousListings />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  );
}
export default Dashboard;
