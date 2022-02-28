import React from "react";
import css from "./ReserveForm.module.css";
import { useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import TimeRange from "react-time-range";
import moment from "moment";
import { useState, useEffect } from "react";

export const ReserveForm = ({ price }) => {
  const { register, handleSubmit } = useForm(); // using hookform in react
  const [form, setForm] = useState({}); // store form input into a state
  const [dates, setDates] = useState([{ payload: "" }]); // store dates input into a state
  const [startTime, setStartTime] = useState(moment()); // Time Range
  const [endTime, setEndTime] = useState(moment()); // Time Range

  // Calendar for you to select your set of dates
  const datesSelected = dates.map((value) => {
    return `${value.day}-${value.month}-${value.year}`;
  });

  // sets the start time
  const handleStartTime = (e) => {
    setStartTime(e.startTime);
  };
  //   // sets the end time
  const handleEndTime = (e) => {
    setEndTime(e.endTime);
  };
  //   // gets the actual time from the startTime and EndTime date format
  let start = String(startTime).slice(11, 16);
  let end = String(endTime).slice(11, 16);

  const findHours = (sTime, eTime) => {
    const startTimeNum = Number(sTime.split(/[.:]/).join("."));
    const endTimeNum = Number(eTime.split(/[.:]/).join("."));
    return endTimeNum - startTimeNum;
  };
  console.log("dd",findHours(start, end));

  return (
    <div className={css.reserveSpace}>
      <h2 className={css.formHeading}>Reserve your space</h2>
      <p>£{price} per hour</p>
      <div className={`${css.Datecontainer} ${css.eachSect}`}>
        <label className={css.label}>Dates:</label>
        <DatePicker
          value={dates}
          onChange={setDates}
          placeholder="Choose dates"
          format="DD/MM/YYYY"
          className={css.justoff}
          required
        />
      </div>
      <br />
      <div className={`${css.eachSect} ${css.times}`}>
        <TimeRange
          startMoment={startTime}
          endMoment={endTime}
          onStartTimeChange={handleStartTime}
          onEndTimeChange={handleEndTime}
          required
        />{" "}
      </div>
      <div>
        <label>No of People</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3+</option>
        </select>
      </div>
    </div>
  );
};
