import React, { useState } from "react";
import css from "./searchform.module.css";
import background from "../../images/background.jpg";
import useform from "react-hook-form";
import Calendar from "../Calendar";
import Time from "../Time/Time";

const SearchForm = () => {
  return (
    <div
      className={css.formBackground}
      style={{ backgroundImage: "url( " + background + ")" }}
    >
      <form className={css.form}>
        <label> Location: </label>
        <br />
        <input type="text" placeholder="City" />
        <br/>
        <Calendar />
        <br/>
        <Time />
        <label>Type of space:</label>
        <br />
        <select name="Type of space" id="spaces">
          <option value="Flat">Flat</option>
          <option value="Room">Room</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </form>
    </div>
  );
};

export default SearchForm;
