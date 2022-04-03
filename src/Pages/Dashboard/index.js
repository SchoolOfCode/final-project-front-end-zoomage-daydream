import React, { useState, useEffect } from "react";
import css from "./dashboard.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faCalendarCheck,
  faUser,
  faGear
} from "@fortawesome/free-solid-svg-icons";

import { useAuth0 } from "@auth0/auth0-react";
import ProfileSect from "../../components/ProfileSection";
import PreviousBookings from "../../components/PreviousBookings";
import PreviousListings from "../../components/PreviousListings";

function Dashboard() {
  const { user, isAuthenticated } = useAuth0();
  const [current, setCurrent] = useState("profile");
  const [alertMessage, setAlertMessage] = useState(false);

  const profile = () => {
    setCurrent("profile");
  };
  const bookings = () => {
    setCurrent("bookings");
  };
  const listings = () => {
    setCurrent("listings");
  };

  const alert = () => {
    setAlertMessage(true);
  };
  const closeAlert = () => {
    setAlertMessage(false);
  };

  return (
    <div className={css.dashboard}>
      <Header />
      {alertMessage&& (
        <div className={css.alertMessage}>
          <p>New feature coming soon!</p>
          <button className={css.closeAlert} onClick={closeAlert}>
            x
          </button>
        </div>
      )}
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
              <span className={css.labelDashboard}>{user.nickname}</span>
            </h2>

            <h2 onClick={bookings} className={css.sidebarComponent}>
              <FontAwesomeIcon
                onClick={bookings}
                icon={faCalendarCheck}
                className={css.sidebarIcons}
              />
              <span className={css.labelDashboard}>My Bookings</span>
            </h2>
            <h2 onClick={listings} className={css.sidebarComponent}>
              <FontAwesomeIcon
                onClick={listings}
                icon={faCalendarCheck}
                className={css.sidebarIcons}
              />
              <span className={css.labelDashboard}> Listings</span>
            </h2>
            <h2 className={css.sidebarComponent} onClick={alert}>
              <FontAwesomeIcon
                icon={faMessage}
                className={css.sidebarIcons}
                onClick={alert}
              />
              <span className={css.labelDashboard}> Message</span>
            </h2>

            <h2 className={css.sidebarComponent} onClick={alert}>
              <FontAwesomeIcon
                icon={faGear}
                className={css.sidebarIcons}
                onClick={alert}
              />
              <span className={css.labelDashboard}> Settings</span>
            </h2>
          </div>

          {current === "profile" && (
            <div className={css.profileSect}>
              <ProfileSect />
            </div>
          )}

          {current === "bookings" && (
            <div>
              <h2 className={css.label}>History of Bookings</h2>
              <div className={css.block}>
                <div className={css.bookings}>
                  <PreviousBookings />
                </div>
              </div>
            </div>
          )}
          {current === "listings" && (
            <div>
              <h2 className={css.label}>History of Listings</h2>
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
