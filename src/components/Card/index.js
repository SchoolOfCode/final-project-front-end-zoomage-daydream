import { useNavigate } from "react-router-dom";

import css from "./card.module.css";


// card component to display the card. Takes in props of (images, address, starttime, id and price)
function Card({ image, address, starttime, id, price }) {
  // use naviagate from react router dom to navigate to different pages.
  const navigate = useNavigate();

  // when you click on each card handle click function navigates you yo a different page with the id sent aswell
  const handleClick = (e) => {
    const id = e.target.id;
    // navigate to the reserve page when clicked
    navigate("/reserve", { state: id });
  };

  return (
    <div className={css.card}>
      <div>
      {/* the card with the onclick event listener to invoke handle click function on click. */}
        <img
          data-testid="img"
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
