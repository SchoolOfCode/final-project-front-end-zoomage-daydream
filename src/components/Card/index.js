import React from "react";
import css from "./card.module.css";
import { useNavigate } from "react-router-dom";

function Card({ image, address, starttime, id, price }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    const id = e.target.id;
    navigate("/reserve", { state: id });
  };

  return (
    <div className={css.card}>
      <div data-testid="img">
        <img
          className={css.image}
          src={image}
          alt="cardPic"
          onClick={handleClick}
          id={id}
        />
      </div>
      <div className={css.details} data-testid="details">
        <p>{address}</p>
        <p>{starttime} - 17:00</p>
        <p>Sundays - Fridays</p>
        <p>Price: £{price}/hour</p>
        <p>4.5*</p>
      </div>
    </div>
  );
}

export default Card;
