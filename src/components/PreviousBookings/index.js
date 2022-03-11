import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

import API_URL from "../../config";
import Card from "../Card";
// import css from "./previousbookings.module.css"

// previous booking component
const PreviousBookings = () => {
  // the bookings fetched from the API is put into a state each time
  const [bookings, setBookings] = useState([]);

  // isAuthenticated and user is destructured from Auth0 each time
  const { isAuthenticated, user } = useAuth0();
  // const email = user.email;

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
  return bookings.slice(0,2).map((item) => {
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
  });


};

export default PreviousBookings;


