import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { useEffect } from "react";
import API_URL from "../../config";
import Card from "../Card";
import "./previousListings.css"

const PreviousListings = () => {
  const [bookings, setBookings] = useState([]);

  const { isAuthenticated, user } = useAuth0();
  const email = user.email;

  useEffect(() => {
    if (isAuthenticated === true) {
      const fetchProfileData = async () => {
        const url = `${API_URL}/spaces/?email=${email}`;
        const res = await fetch(url);
        const data = await res.json();
        setBookings(data.payload);
      };
      fetchProfileData();
    }
  }, []);

  return (
    <div>
      {bookings.length === 0 && (
        <div>
          <p className="listingsText">You currently do not have any listings</p>
        </div>
      )}
      {bookings.length > 0 &&
        bookings.map((item) => {
          return (
            <div>
              <Card
                image={item.images[0]}
                address={item.address}
                starttime={item.starttime}
                price={item.hourly_price}
                key={item.id}
                id={item.id}
              />
            </div>
          );
        })}
    </div>
  );
};

export default PreviousListings;
