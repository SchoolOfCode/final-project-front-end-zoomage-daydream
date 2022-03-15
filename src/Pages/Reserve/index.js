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
        <div className={css.carouselImage}>
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
                <p className={css.eachDetail}>
                  <span className={css.eachDetailLabel}>Type of space:</span>{" "}
                  {space.type_of_space}{" "}
                </p>
                <p className={css.eachDetail}>
                  <span className={css.eachDetailLabel}>
                    Fraction of space:
                  </span>{" "}
                  {space.fraction_of_space}
                </p>
                <p className={css.eachDetail}>
                  <span className={css.eachDetailLabel}>Check in:</span> Up to
                  fifteen minutes before your allocated start time
                </p>
                <p className={css.eachDetail}>
                  <span className={css.eachDetailLabel}>Cancellation:</span> At
                  least 24 hours notice
                </p>
                <p className={css.eachDetail}>Ring the doorbell upon arrival</p>
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
                <p className={css.hostInformation}>
                  Our host says "{space.additional_information}"
                </p>
              </div>
            )}
          </div>
        </div>
        <div>
          {
            space &&
            (isAuthenticated ? (
              <div>
                <ReserveForm price={space.hourly_price} user={user} />
              </div>
            ) : (
              <LoginButtonReserve />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reserve;
