import React from "react";
import cardPic1 from "../../images/cardPic1.jpg";
import css from "./card.module.css"

function Card() {
  return (
    <div className={css.card}>
      <div>
        <img className={css.image}  src={cardPic1} alt="cardPic" />
      </div>
      <div className={css.details}>
        <p>BERMONDSEY</p>
        <p>9:00 - 17:00</p>
        <p>Sundays - Fridays</p>
        <p>4.5*</p>
      </div>
    </div>
  );
}

export default Card;
