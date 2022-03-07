import React, { useState, useEffect } from "react";
import css from "./dashboard.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ProfileBox from "../../components/ProfileBox";
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

function Dashboard() {
  const [space, setSpace] = useState([]);
  const { user, isAuthenticated } = useAuth0();
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
              Listings
            </h2>

            <h2>
              <FontAwesomeIcon icon={faGear} className={css.sidebarIcons} />
              Settings
            </h2>
          </div>
          <div className={css.profileSect}>
            <div className={css.profile}>
              {" "}
              {users[0] && isAuthenticated && (
                <Profile
                  date_of_birth={users[0].date_of_birth.split("").slice(0, 10)}
                  email={user.email}
                  full_name={users[0].full_name}
                  username={users[0].username}
                />
              )}
            </div>
            <div className={css.currentBooking}>
              <h2 className={css.current}>Current Booking</h2>
              {space.map((space) => {
                return (
                  <Card
                    image={space.images[0]}
                    address={space.address}
                    starttime={space.starttime}
                    price={space.hourly_price}
                    key={space.id}
                  />
                );
              })}
            </div>
            <div className={css.currentBooking}>
              <h2 className={css.current}>Current Listing</h2>
              {space.map((space) => {
                return (
                  <Card
                    image={space.images[0]}
                    address={space.address}
                    starttime={space.starttime}
                    price={space.hourly_price}
                    key={space.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
export default Dashboard;
