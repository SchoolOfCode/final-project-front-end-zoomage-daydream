import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddressInput from "../../components/AddressInput";
import AdditionalInfo from "../../components/AdditionalInfo";
import css from "./propertyDetailsForm.module.css";
import CheckBox from "../../components/CheckBox";
import SpacesDropDown from "../../components/SpacesDropDown";

function PropertyDetails() {
  return (
    <div>
      <Header />

      <CheckBox />
      <AdditionalInfo />
      <SpacesDropDown />
      <form className={css.propertyDetailsForm}>
        <AddressInput />
      </form>

      <Footer />
    </div>
  );
}

export default PropertyDetails;
