import React from "react";
import css from "../Card/card.module.css";

function EmptyCard({ address, starttime, endtime, image }) {
  return (
    <div className={css.card}>
    <p>{address}</p>
    </div>
  );
}

export default EmptyCard;
