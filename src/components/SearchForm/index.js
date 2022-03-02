import React, { useEffect, useState, useRef } from "react";
import "./searchform.css";
import { useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import TimeRange from "react-time-range";
import moment from "moment";
import API_URL from "../../config";
import { useNavigate } from "react-router-dom";
import background from "../../images/background.jpg";

const SearchForm = () => {
  // const [bgimage, setBgImage] = useState();
  const { register, handleSubmit } = useForm(); // using hookform in react
  const [form, setForm] = useState({}); // store form input into a state
  const [dates, setDates] = useState([{ payload: "" }]); // store dates input into a state
  const [startTime, setStartTime] = useState(moment()); // Time Range
  const [endTime, setEndTime] = useState(moment()); // Time Range
  const navigate = useNavigate(); // use navigate to navigate to a diffeerent page

  const firstMount = useRef(false);

  // Calendar for you to select your set of dates
  const datesSelected = dates.map((value) => {
    return `${value.day}-${value.month}-${value.year}`;
  });

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
  const onSubmit = (selected) => {
    const obj = Object.assign(selected, {
      date: datesSelected,
      startT: start,
      endT: end
    });
    setForm(obj);
  };

  const { location, type_of_space } = form;

  useEffect(() => {
    if (firstMount.current === false) {
      firstMount.current = true;
      return;
    }

    const fetchData = async () => {
      const result = await fetch(
        `${API_URL}/spaces/?address=${location}&type_of_space=${type_of_space}`
      );
      const data = await result.json();
      // navigate("/result", { state: data });
    };
    fetchData();
  }, [form]);


  return (
    <div className="formBackground">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          {" "}
          <h2 className="formHeading">Reserve Your Space</h2>
        </div>
        <div className="eachSect">
          <label className="label"> Location: </label>
          <input
            className="field"
            type="text"
            placeholder="City"
            {...register("location")}
            required
          />
        </div>
        <div className="eachSect">
          <label className="label">Dates:</label>
          <div className="dateContainer">
            <DatePicker
              value={dates}
              onChange={setDates}
              placeholder="Choose dates"
              format="DD/MM/YYYY"
              required
            />
          </div>
        </div>

        <div className="times">
          <TimeRange
            startMoment={startTime}
            endMoment={endTime}
            onStartTimeChange={handleStartTime}
            onEndTimeChange={handleEndTime}
            required
          />{" "}
        </div>
        <div className="spaceType">
          <label className="labelSpace"> Type of space:</label>

          <select
            name="type_of_space"
            id="spaces"
            className="spaces"
            {...register("type_of_space")}
            required
          >
            <option>Select</option>
            <option value="flat">Flat</option>
            <option value="house">House</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="submitSection">
          <input type="submit" className="submit" />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
