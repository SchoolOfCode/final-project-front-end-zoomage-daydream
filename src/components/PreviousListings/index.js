import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { useEffect } from "react";
import API_URL from "../../config";
import Card from "../Card";

const PreviousListings= () => {
  const [bookings, setBookings] = useState([]);

  const { isAuthenticated, user } = useAuth0();
  const email = user.email;

  useEffect(() => {
    if (isAuthenticated === true) {
      const fetchProfileData = async () => {
        const url = `${API_URL}/spaces/`;
        const res = await fetch(url);
        const data = await res.json();
        setBookings(data.payload);
      };
      fetchProfileData();
    }
  }, []);

  console.log(bookings);
  return bookings.slice(0, 4).map((item) => {
    return (
      <div>
        <h2>History of Bookings</h2>
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
  });
};

export default PreviousListings;
