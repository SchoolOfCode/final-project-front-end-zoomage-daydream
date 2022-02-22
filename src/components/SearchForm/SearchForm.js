// import React, { useState } from "react";

// const SearchForm =(props) => {
//   const [enteredDate, setEnteredDate] = useState("");
  
//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
    
//     const submitHandler = (event) => {
//     event.preventDefault();
  
//     const Date = {
//         date: new Date(enteredDate),
//       };
  
//     props.onSaveData(Date);
//       setEnteredDate("");
//     };
//   return (
    
    
    
//     <form onSubmit={submitHandler}>
//    <div className="search">
//      <label>Date</label>
//      <input
//        type="date"
//        min="2019-01-01"
//        max="2022-12-31"
//        value={enteredDate}
//        onChange={dateChangeHandler}
//      />
//       <div className="button">
//         <button type="button" onClick={props.onCancel}>
//           Cancel
//         </button>
//         <button type="submit">Add Date</button>
//       </div>
//    </div>
//    </form>
//   )
//   }
// }

// export default SearchForm;
