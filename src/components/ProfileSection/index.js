import React, { useState, useEffect } from "react";
import css from "./profilesection.module.css";

import HomeCard from "../../Pages/Home/homeCards.js";
import Profile from "../../components/Profile";

import API_URL from "../../config";
import { useAuth0 } from "@auth0/auth0-react";

function ProfileSect() {
  const [space, setSpace] = useState([]);
  const [listings, setListing] = useState([]);
  const { user, isAuthenticated } = useAuth0();
  const [users, setUsers] = useState([
    {
      date_of_birth: "wwww"
    }
  ]);
  const email = user.email;

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
    const fetchCurrentListings = async () => {
      const result = await fetch(`${API_URL}/spaces/?email=${email}`);
      const data = await result.json();
      const listingArray = data.payload;
      const sortedListingArray = listingArray.sort((a, b) => {
        return b.id - a.id;
      });

      setListing(sortedListingArray);
    };
    fetchCurrentListings();
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
      {isAuthenticated && (
        <div className={css.profileSect}>
          <div>
            <h2 className={css.current}>User Information</h2>
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
          </div>
          <div className={css.currentBooking}>
            <h2 className={css.current}>Current Booking</h2>
            <div>
              <p className={css.listingProfile}>
                You currently do not have any bookings
              </p>
            </div>
          </div>

          <div className={css.currentBooking}>
            <h2 className={css.current}>Current Listing</h2>
            {listings.length === 0 && (
              <div>
                <p className={css.listingProfile}>
                  You currently do not have any listings
                </p>
              </div>
            )}
            {listings.length > 0 &&
              listings.slice(0, 1).map((space) => {
                return (
                  <HomeCard
                    image={space.images[0]}
                    address={space.address}
                    starttime={space.starttime}
                    price={space.hourly_price}
                    key={space.id}
                    id={space.id}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
export default ProfileSect;
