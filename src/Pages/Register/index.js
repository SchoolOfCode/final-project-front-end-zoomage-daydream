import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Register = () => {
  return (
    <div>
      <Header />
      <div>
        <label> First Name </label>
        <input type="text" placeholder="Name" required />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
