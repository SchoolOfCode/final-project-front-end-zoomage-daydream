import React from "react";
// import cardPic1 from "../../images/cardPic1.jpg";

function EmptyCard({ address, starttime, endtime, images }) {
  return (
    <div>
      <div>
        <img src={images} alt="cardPic" />
      </div>
      <div>
        <p>{address}</p>
        <p>
          {starttime}-{endtime}
        </p>
        <p>4.7*</p>
        <p>Hi</p>
      </div>
    </div>
  );
}

export default EmptyCard;
