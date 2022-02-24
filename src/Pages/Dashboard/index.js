import React from "react";
import css from "./dashboard.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function Dashboard() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default Dashboard;
