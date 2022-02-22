import React from "react";
// import background from "./images/background.jpg"
import css from "./background.module.css"
import background from "../../images/background.jpg"


const Background = ()=>{

return (
    <div>
      <img
        src={background}
        alt="background-pic"
        className={css.backgroundPic}
      />
    </div>
  );
}

export default Background;