import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import API_URL from "../../config";
import { ReserveForm } from "../../components/ReserveForm";
import css from "./reserve.module.css";
import useFetch from "../../components/hooks/useFetch";

const Reserve = () => {
  const location = useLocation();
  const id = location.state;
  const [spaces] = useFetch(`${API_URL}/spaces/${id}`); //custom hook fetch
  const space = spaces[0];
  const [users] = useFetch(`${API_URL}/users/${id}`); //custom hook fetch
  const user = users[0];

  console.log(space);

  return (
    <div>
      <Header />
      <div className={css.topContainer}>
        {space && (
          <div>
            {" "}
            <p>{space.purpose_of_space}</p>
            <p>{space.address}</p>
            <p>4.5</p>
            <p>Reviews(48)</p>
          </div>
        )}

        {space && (
          <div>
            <div className={css.imageContainer}>
              <div className={css.images}>
                {space.images.slice(0, 2).map((item, index) => {
                  return (
                    <div key={index}>
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </div>
              <div>
                {space.images.slice(2, 2).map((item, index) => {
                  return (
                    <div key={index}>
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </div>
              <div className={css.images}>
                {space.images.slice(3, 5).map((item, index) => {
                  return (
                    <div key={index}>
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={css.reserveContainer}>
              <div>
                <h2>Property Details</h2>
                <h3>{space.type_of_space}</h3>
                <h3>{space.fraction_of_space}</h3>
                <p>Check in: </p>
                <p>Cancellation</p>
                <p>Instructions on how to use go here</p>
                <h3>Amenities</h3>
                <div>
                  {space.amenities.map((item, index) => {
                    return <p key={index}>{item}</p>;
                  })}
                </div>
                <p>Our host says "{space.additional_information}"</p>
              </div>
              {user && (
                <div>
                  <ReserveForm price={space.hourly_price} user={user} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Reserve;
