import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
// import DatePanel from "react-multi-date-picker/plugins/date_panel";

const Calendar = () => {
  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);
  const [values, setValues] = useState([today, tomorrow]);

  console.log(values);
  return (
    <DatePicker
      value={values}
      onChange={setValues}
      placeholder="Choose dates"
      format="DD/MM/YYYY"
      animations={[transition({ duration: 800, from: 35 })]}
    />
  );
};

export default Calendar;
