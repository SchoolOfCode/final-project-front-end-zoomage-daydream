import React, { useState } from "react";
import css from "./AdditionalInfo.module.css";

function AdditionalInfo() {
  const [text, setText] = useState("");
  //
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className={css.additionalInfoContainer}>
      <div>
        <h2>Additional Information</h2>
      </div>
      <textarea
        rows="8"
        cols="50"
        onChange={handleChange}
        value={text}
      ></textarea>
    </div>
  );
}

export default AdditionalInfo;
