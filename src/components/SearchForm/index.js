import React, { useState } from "react";
import css from "./searchform.module.css";
import background from "../../images/background.jpg";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const SearchForm = () => {
  // const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={css.formBackground} style={{ backgroundImage: "url( "+background+")" }}>
      <form className={css.form}>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
        <p>dd</p>
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
