import React, { useState } from "react";
import css from "./searchform.module.css";
import background from "../../images/background.jpg";
import { useForm } from "react-hook-form";

import DatePicker from "react-multi-date-picker";
import TimeRange from "react-time-range";
import moment from "moment";

const SearchForm = () => {
  // using hookform in react
  const { register, handleSubmit } = useForm();
  // store form input into a state
  const [form, setForm] = useState("");

  // Calendar for you to select your set of dates
  const [dates, setDates] = useState([]);
  const datesSelected = dates.map((value) => {
    return `${value.day}-${value.month}-${value.year}`;
  });

  // Time Range
  const [startTime, setStartTime] = useState(moment());
  const [endTime, setEndTime] = useState(moment());
  // sets the start time
  const handleStartTime = (e) => {
    setStartTime(e.startTime);
  };
  // sets the end time
  const handleEndTime = (e) => {
    setEndTime(e.endTime);
  };
  // gets the actual time from the startTime and EndTime date format
  let start = String(startTime).slice(11, 16);
  let end = String(endTime).slice(11, 16);

  // on form submit
  const onSubmit = (pik) => {
    const obj = Object.assign(pik, {
      date: datesSelected,
      startT: start,
      endT: end
    });
    setForm(obj);
  };

  console.log(form);

  return (
    <div className={css.formBackground}>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={css.formHeading}>Reserve Your Space</h2>
        <div className={css.eachSect}>
          <label className={css.label}> Location: </label>
          <input
            className={css.field}
            type="text"
            placeholder="City"
            {...register("location")}
          />
        </div>
        <div className={css.Datecontainer}>
          <label>Dates:</label>
          <DatePicker
            value={dates}
            onChange={setDates}
            placeholder="Choose dates"
            format="DD/MM/YYYY"
           className={css.justoff}
          />
        </div>
        <br />
        <TimeRange
          startMoment={startTime}
          endMoment={endTime}
          onStartTimeChange={handleStartTime}
          onEndTimeChange={handleEndTime}
        />{" "}
        <div className={css.eachSect}>
          <label className={css.label}> Type of space:</label>

          <select
            name="Type of space"
            id="spaces"
            className={css.field}
            {...register("Type of space")}
          >
            <option value="Flat">Flat</option>
            <option value="Room">Room</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <input type="submit" className={css.field} />
      </form>
    </div>
  );
};

export default SearchForm;
