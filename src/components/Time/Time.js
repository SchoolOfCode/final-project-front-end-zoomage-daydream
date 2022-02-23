
import TimeRange from 'react-time-range';
import moment from 'moment';
import React from 'react'

const Time = () => {
  return (
 <div>
     <TimeRange
    startMoment={this.state.startTime}
    endMoment={this.state.endTime}
    onChange={this.returnFunction}
/>
 </div>
  )
}
export default Time