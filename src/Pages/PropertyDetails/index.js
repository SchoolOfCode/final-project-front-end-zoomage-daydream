import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddressInput from "../../components/AddressInput";
import AdditionalInfo from "../../components/AdditionalInfo";
import css from "./propertyDetailsForm.module.css";
import CheckBox from "../../components/CheckBox";
import ImageUploader from "../../components/fileUploader";
import SpacesDropDown from "../../components/SpacesDropDown";
import PropertyForm from "../../components/PropertyForm";

function PropertyDetails() {
  return (
    <div>
      <Header />
      <PropertyForm />
      <Footer />
    </div>
  );
}

export default PropertyDetails;
