import React from "react";
import css from "./homecard.module.css";
import { useNavigate } from "react-router-dom";

function HomeCard({ image, address, starttime, id, price }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    const id = e.target.id;
    navigate("/reserve", { state: id });
  };

  return (
    <div className={css.card}>
      <div>
        <img
          data-testid="img"
          className={css.image}
          src={image}
          alt="cardPic"
          onClick={handleClick}
          id={id}
        />
      </div>
      <div className={css.details} data-testid="details" onClick={handleClick}>
        <p>{address}</p>
        <p>{starttime} - 17:00</p>
        <p>Sundays - Fridays</p>
        <p>Price: £{price}/hour</p>
        <p>4.5*</p>
      </div>
    </div>
  );
}

export default HomeCard;
