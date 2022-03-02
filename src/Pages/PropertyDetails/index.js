import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AddressInput from "../../components/AddressInput";
import ImageInput from "../../components/ImageInput";
import AdditionalInfo from "../../components/AdditionalInfo";
import css from "./propertyDetailsForm.module.css";

function PropertyDetails() {
  return (
    <div>
      <Header />
      <ImageInput />
      <AdditionalInfo />
      <form className={css.propertyDetailsForm}>
        <AddressInput />

        <div className={css.propertyDetailsDiv}>
          <label> Type of Space:</label>
          <br />

          <select
            name="type_of_space"
            id="spaces"
            placeholder="Pick a Space"
            required
          >
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="flat">House</option>
            <option value="house">Apartment/Flat</option>
            <option value="mercedes">Other</option>
            <option value="audi"></option>
          </select>
        </div>
        <div className={css.propertyDetailsDiv}>
          <label> Purpose of space:</label>
          <br />

          <select name="type_of_space" id="spaces" required>
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="flat">Remote Working</option>
            <option value="house">Music Space</option>
            <option value="mercedes">Gym Space</option>
            <option value="audi">Other</option>
          </select>
        </div>
        <div className={css.propertyDetailsDiv}>
          <label> Types of Spaces:</label>
          <br />

          <select name="type_of_space" id="spaces" required>
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="flat">Whole Property</option>
            <option value="house">Private Room</option>
            <option value="mercedes">Duplex Condo</option>
            <option value="audi">Conference Room</option>
          </select>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default PropertyDetails;
