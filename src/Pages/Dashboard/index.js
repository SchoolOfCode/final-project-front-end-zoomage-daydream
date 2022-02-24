import React from "react";
import css from "./dashboard.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import Card from "../../components/Card";

function Dashboard() {
  return (
    <div>
      <Header />
      <Sidebar />
      <h1>My Bookings</h1>
      <div className={css.currentBooking}>
        <h2>Current Booking</h2>
        <Card />
      </div>
      <Profile />
      <div className={css.historicalBooking}>
        <h1>History of Bookings</h1>
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
