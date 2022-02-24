import React from "react";
import cardPic1 from "../../images/cardPic1.jpg";
import css from "./card.module.css";

function Card({ image, address, starttime }) {
  <div>
    {" "}
    return (
    <div className={css.card}>
      <div>
        <img className={css.image} src={image} alt="cardPic" />
      </div>
      <div className={css.details}>
        <p>{address}</p>
        <p>{starttime} - 17:00</p>
        <p>Sundays - Fridays</p>
        <p>4.5*</p>
      </div>
    </div>
    );
  </div>;
}

export default Card;
