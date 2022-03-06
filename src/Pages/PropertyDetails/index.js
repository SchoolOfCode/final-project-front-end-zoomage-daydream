import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAuth0 } from "@auth0/auth0-react";

import PropertyForm from "../../components/PropertyForm";

function PropertyDetails() {
  const{isAuthenticated} = useAuth0()
  return (
    <div>
    {isAuthenticated&&
    <div>
      <Header />
      <PropertyForm />
      <Footer />
      </div>}
    </div>
  );
}

export default PropertyDetails;
