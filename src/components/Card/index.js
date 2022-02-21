import React from "react";
import cardPic1 from "../../images/cardPic1.jpg";
import css from "./card.module.css";
function Card() {
  return (
    <div className="cards">
      <img src={cardPic1} alt="" className={css.card1} />
    </div>
  );
}

export default Card;
