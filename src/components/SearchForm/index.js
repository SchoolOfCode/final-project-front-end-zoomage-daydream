import React, { useEffect, useState, useRef } from "react";
import "./searchform.css";
import { set, useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import TimeRange from "react-time-range";
import moment from "moment";
import API_URL from "../../config";
import background from "../../images/background.jpg";
import cardPic1 from "../../images/cardPic1.jpg";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  // const [bgimage, setBgImage] = useState();
  const { register, handleSubmit } = useForm(); // using hookform in react
  const [form, setForm] = useState({}); // store form input into a state
  const [dates, setDates] = useState([{ payload: "" }]); // store dates input into a state
  const [startTime, setStartTime] = useState(moment()); // Time Range
  const [endTime, setEndTime] = useState(moment()); // Time Range
  const navigate = useNavigate(); // use navigate to navigate to a diffeerent page
  const [bgImage, setBgImage] = useState(1);
  const [url1, setUrl] = useState(background);
  const [data1, setData] = useState(true);

  const firstMount = useRef(false); // useRef used to prevent useEffect from running on first mount.

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
      return 1;
    }
    if (firstMount.current && data1 === false) {
      const fetchData = async () => {
        const result = await fetch(
          `${API_URL}/spaces/?address=${location}&type_of_space=${type_of_space}`
        );
        const data = await result.json();
        navigate("/result", { state: data });
      };
      fetchData();
      setData(true);
    }
  }, [form]);

  // console.log(form);
  // const imageChange = () => {
  //   if (bgImage === 1) {
  //     setBgImage(2);
  //     setUrl(cardPic1);
  //   } else if (bgImage === 2) {
  //     setUrl(background);
  //     setBgImage(1);
  //   }
  // };
  // setInterval(imageChange, 10000);

  return (
    <div className="formBackground" style={{ backgroundImage: url1 }}>
      <form id="fbackground"className="form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          {" "}
          <h2 className="formHeading">Reserve Your Space</h2>
        </div>
        <div className="eachSect">
          <label className="label"> Location: </label>
          <input
            id="location"
       
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
            id="dates"
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
          id="time"
            className="timerange"
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
            <option value="flat">Apartment/Flat</option>
            <option value="house">House</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="submitSection">
          <input
          id="submit"
            type="submit"
            className="submit"
            onClick={() => {
              setData(false);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
