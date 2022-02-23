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
        <h3>Location</h3>
        <input type="text" placeholder="City" />
        <h3>Date</h3>
        <Calendar />
        <Time />
        <h3>Type of Space </h3>
        <p></p>
        <p></p>
        <p></p>
      </form>
    </div>
  );
};

export default SearchForm;

// <DatePicker
//   selected={startDate}
//   onChange={(date) => setStartDate(date)}
//   showTimeSelect
//   dateFormat="Pp"
//   format="dd-mm-yyyy"
// />
