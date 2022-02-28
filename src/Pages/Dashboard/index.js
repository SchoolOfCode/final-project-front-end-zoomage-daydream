import React, { useState, useEffect } from "react";
import css from "./dashboard.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ProfileBox from "../../components/ProfileBox";
import Card from "../../components/Card";
import PreviousBookings from "../../components/PreviousBookings";
import API_URL from "../../config";

function Dashboard() {
  const [space, setSpace] = useState([]);
  useEffect(() => {
    const fetchCurrentBookings = async () => {
      const result = await fetch(`${API_URL}/spaces/`);
      const data = await result.json();
      const array = data.payload.slice(0, 1);
      setSpace(array);
    };
    fetchCurrentBookings();
  }, []);
  return (
    <div>
      <Header />
      <Sidebar />
      <h1>My Bookings</h1>
      <div className={css.currentBooking}>
        <h2>Current Booking</h2>
        {space.map((space) => {
          return (
            <Card
              image={space.images[0]}
              address={space.address}
              starttime={space.starttime}
            />
          );
        })}
      </div>
      <div className={css.currentProfile}>
        <ProfileBox />
      </div>
      <div className={css.historicalBookingTitle}>
        <h1>History of Bookings</h1>
      </div>
      <PreviousBookings />
      <Footer />
    </div>
  );
}
export default Dashboard;
