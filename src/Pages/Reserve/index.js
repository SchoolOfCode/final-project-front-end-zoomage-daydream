import { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import API_URL from "../../config";
import { ReserveForm } from "../../components/ReserveForm";
import css from "./reserve.module.css";
import useFetch from "../../components/hooks/useFetch";
import { useAuth0 } from "@auth0/auth0-react";
import CarouselImage from "../../components/Carousel";

import LoginButtonReserve from "../../components/LoginReserve";

const Reserve = () => {
  const location = useLocation();
  const id = location.state;
  const [spaces] = useFetch(`${API_URL}/spaces/${id}`); //custom hook fetch
  const space = spaces[0];
  const [users] = useFetch(`${API_URL}/users/${id}`); //custom hook fetch
  const user = users[0];
  const { isAuthenticated } = useAuth0();

  return (
    <div className={css.reserveContainer}>
      <Header />
      <div className={css.topContainer}>
        {space && (
          <div>
            {" "}
            <p>{space.purpose_of_space}</p>
            <p>{space.address}</p>
            <p>4.5</p>
            <p>Reviews(44)</p>
          </div>
        )}
      </div>
      <div>
        <div className={css.CarouselImage}>
          {space && <CarouselImage images={spaces[0].images} />}
        </div>
      </div>
      <div className={css.bottomContainer}>
        <div>
          <h2 className={css.propertyHeader}>Property Details</h2>
          <div>
            {space && (
              <div className={css.details}>
                {" "}
                <p>Type of space: {space.type_of_space}</p>
                <p>Fraction of space: {space.fraction_of_space}</p>
                <p>
                  Check in: Up to fifteen minutes before your allocated start
                  time
                </p>
                <p>Cancellation: At least 24 hours notice</p>
                <p>Ring the doorbell upon arrival</p>
              </div>
            )}{" "}
          </div>
          <h3 className={css.amenitiesHeader}>Amenities</h3>
          <div className={css.amenities}>
            {space && (
              <div>
                {space.amenities.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
              </div>
            )}
            {space && (
              <div className={css.host}>
                {" "}
                <p>Our host says "{space.additional_information}"</p>
              </div>
            )}
          </div>
        </div>
        <div>
          {user &&
            space &&
            (isAuthenticated ? (
              <div>
                <ReserveForm price={space.hourly_price} user={user} />
              </div>
            ) : (
              <p>
                Please <LoginButtonReserve /> to reserve the space
              </p>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reserve;
