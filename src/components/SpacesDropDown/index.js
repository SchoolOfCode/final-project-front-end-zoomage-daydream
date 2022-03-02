import React from "react";
import css from "./SpacesDropDown.module.css";

const SpacesDropDown = () => {
  return (
    <div className="SpacesDropDownContainer">
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
          <option value="other">Other</option>
        </select>
      </div>
      <div className={css.propertyDetailsDiv}>
        <label> Purpose of space:</label>
        <br />

        <select name="type_of_space" id="spaces" required>
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="remote working">Remote Working</option>
          <option value="music space">Music Space</option>
          <option value="gym space">Gym Space</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className={css.propertyDetailsDiv}>
        <label> Types of Spaces:</label>
        <br />

        <select name="type_of_space" id="spaces" required>
          <option value="" disabled selected>
            Select your option
          </option>
          <option value="whole property">Whole Property</option>
          <option value="private room">Private Room</option>
          <option value="duplex condo">Duplex Condo</option>
          <option value="conference room">Conference Room</option>
        </select>
      </div>
    </div>
  );
};

export default SpacesDropDown;
