import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import css from "./propertyDetailsForm.module.css"

import PropertyForm from "../../components/PropertyForm";

function PropertyDetails() {
  const{isAuthenticated} = useAuth0()
  return (
    <div>
      <Header />
    
    <div className={css.propertyDetails}>
      <PropertyForm />
      </div>
      <Footer />
    </div>
  );
}

export default PropertyDetails;
