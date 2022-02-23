import React, { useState } from "react";
import TimeRange from "react-time-range";
import moment from "moment";


const Time = () => {
  const [startTime, setStartTime] = useState(moment());
  const [endTime, setEndTime] = useState(moment());

  const returnFunctionStart = (e) => {
    setStartTime(e.startTime);
  };

  const returnFunctionEnd = (e) => {
    setEndTime(e.endTime);
  };

  let timeString = String(startTime).split("T")[1].slice(0, 5);
  let timeString1 = String(endTime).split("T")[1].slice(0, 5);

  console.log(timeString, timeString1);
  return (
    <div>
      <TimeRange
        startMoment={startTime}
        endMoment={endTime}
        onStartTimeChange={returnFunctionStart}
        onEndTimeChange={returnFunctionEnd}
      />
    </div>
  );
}

export default Time