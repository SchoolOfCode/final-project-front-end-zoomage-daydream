import React from "react";
import css from "./ReserveForm.module.css";
// import { useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import TimeRange from "react-time-range";
import moment from "moment";
import { useState } from "react";

export const ReserveForm = ({ price, user }) => {
  // const { register, handleSubmit } = useForm(); // using hookform in react
  // const [form, setForm] = useState({}); // store form input into a state
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
  const allDays = datesSelected.join();
  const numberOfDays = datesSelected.length;

  const findHours = (sTime, eTime) => {
    const startTimeNum = Number(sTime.split(/[.:]/).join("."));
    const endTimeNum = Number(eTime.split(/[.:]/).join("."));
    return endTimeNum - startTimeNum;
  };

  const hourDifference = findHours(start, end).toFixed(2);
  const totalPrice = hourDifference * price * numberOfDays;
  const cleaningFee = 20;
  const totalPriceWithCleaningFee = totalPrice + cleaningFee;
  const emailLink = `mailto:${user.email}?subject=Enquiry about your space&body=Hi ${user.full_name}. These are the details for my reservation. The total cost is £${totalPriceWithCleaningFee}. I am looking to book for these days ${allDays} for the following time slot ${start} - ${end}.`;

  return (
    <div className={css.reserveSpace}>
      <h2 className={css.formHeading}>Reserve your space</h2>
      <div className={css.price}>
        <p>Price: £{price}/per hour</p>
        <p>4.5*</p>
      </div>

      <div className={css.date}>
        <label className={css.label}>Dates:</label>
        <DatePicker
          value={dates}
          onChange={setDates}
          placeholder="Choose dates"
          format="DD/MM/YYYY"
          required
        />
      </div>
      <br />
      <div className={css.times}>
        <TimeRange
          startMoment={startTime}
          endMoment={endTime}
          onStartTimeChange={handleStartTime}
          onEndTimeChange={handleEndTime}
          required
        />{" "}
      </div>
      <div className={css.reserveBottom}>
        <div className={css.selectSection}>
          <label className={css.people}>No of People</label>
          <select className={css.sect}>
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>
        </div>
        <div className={css.priceSection}>
          <p className={css.sect}>
            £{price} x {hourDifference}hrs x {numberOfDays}days
          </p>
          <p className={css.sect}>£{totalPrice}</p>
          <p className={css.sect}>Cleaning fee: £{cleaningFee}</p>
          <p className={css.sect}>Total price: £{totalPriceWithCleaningFee} </p>
        </div>
      </div>
      <div>
        <a href={emailLink}>
          <div className={css.buttonContainer}>
            <button className={css.button}>RESERVE</button>
          </div>
        </a>
      </div>
    </div>
  );
};

// "{!'https://' + v.boxStatus}";
