import { useState } from "react";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import css from "./carousel.module.css";


// The carosel component. Takes in images as a props.
const CarouselImage = ({ images }) => {
  // Each images is set into a state ranging from 0-4
  const [current, setCurrent] = useState(0);

  // when you click on the next button this function runs
  const next = () => {
    // It checks if the state is 4 and sets it back to 1 or just sets it to the next number if its not 4.
    current === 4 ? setCurrent(0) : setCurrent(current + 1);
  };

  // when you click on the previous button this function runs
  const previous = () => {
    // It checks if the state is 0 and sets it back to 4 or just sets it to the previous number if its not 0.
    current === 0 ? setCurrent(4) : setCurrent(current - 1);
  };

  return (
    <div className={css.carousel}>
      {/* It displays this if the current state is  0 */}
      {current === 0 && (
        <div className={css.reserveImage}>
          <img src={images[0]} alt="" className={css.rImage} />
          <div className={css.arrows}>
            {/* previous arrow */}
            <p className={css.arrowLeft} onClick={previous}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
            {/* next arrow */}
            <p className={css.arrowRight} onClick={next}>
              <FontAwesomeIcon
                icon={faCaretRight}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      )}
      {/* It displays this if the current state is  1*/}
      {current === 1 && (
        <div className={css.reserveImage}>
          <img src={images[1]} alt="" className={css.rImage} />
          <div className={css.arrows}>
            {/* previous arrow */}
            <p className={css.arrowLeft} onClick={previous}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
            {/* next arrow */}
            <p className={css.arrowRight} onClick={next}>
              <FontAwesomeIcon
                icon={faCaretRight}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      )}
      {/* It displays this if the current state is  2 */}
      {current === 2 && (
        <div className={css.reserveImage}>
          <img src={images[2]} alt="" className={css.rImage} />
          <div className={css.arrows}>
            {/* previous arrow */}
            <p className={css.arrowLeft} onClick={previous}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
            {/* next arrow */}
            <p className={css.arrowRight} onClick={next}>
              <FontAwesomeIcon
                icon={faCaretRight}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      )}
      {/* It displays this if the current state is  3 */}
      {current === 3 && (
        <div className={css.reserveImage}>
          <img src={images[3]} alt="" className={css.rImage} />
          <div className={css.arrows}>
            {/* previous arrow */}
            <p className={css.arrowLeft} onClick={previous}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
            {/* next arrow */}
            <p className={css.arrowRight} onClick={next}>
              <FontAwesomeIcon
                icon={faCaretRight}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      )}
      {/* It displays this if the current state is  4 */}
      {current === 4 && (
        <div className={css.reserveImage}>
          <img src={images[4]} alt="" className={css.rImage} />
          <div className={css.arrows}>
            {/* previous arrow */}
            <p className={css.arrowLeft} onClick={previous}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
            {/* next arrow */}
            <p className={css.arrowRight} onClick={next}>
              <FontAwesomeIcon
                icon={faCaretRight}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselImage;
