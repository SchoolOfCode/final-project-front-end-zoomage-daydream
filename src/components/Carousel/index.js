import React, { useState } from "react";

import css from "./carousel.module.css";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarouselImage = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    current === 4 ? setCurrent(0) : setCurrent(current + 1);
  };
  const previous = () => {
    current === 0 ? setCurrent(4) : setCurrent(current - 1);
  };

  return (
    <div className={css.carousel}>
      {current === 0 && (
        <div className={css.reserveImage}>
          <img src={images[0]} alt="" className={css.rImage} />
          <div className={css.arrows}>
            <p className={css.arrowLeft} onClick={previous}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
            <p className={css.arrowRight} onClick={next}>
              <FontAwesomeIcon
                icon={faCaretRight}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      )}
      {current === 1 && (
        <div className={css.reserveImage}>
          <img src={images[1]} alt="" className={css.rImage} />
          <div className={css.arrows}>
            <p className={css.arrowLeft} onClick={previous}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
            <p className={css.arrowRight} onClick={next}>
              <FontAwesomeIcon
                icon={faCaretRight}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      )}
      {current === 2 && (
        <div className={css.reserveImage}>
          <img src={images[2]} alt="" className={css.rImage} />
          <div className={css.arrows}>
            <p className={css.arrowLeft} onClick={previous}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
            <p className={css.arrowRight} onClick={next}>
              <FontAwesomeIcon
                icon={faCaretRight}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      )}
      {current === 3 && (
        <div className={css.reserveImage}>
          <img src={images[3]} alt="" className={css.rImage} />
          <div className={css.arrows}>
            <p className={css.arrowLeft} onClick={previous}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
            <p className={css.arrowRight} onClick={next}>
              <FontAwesomeIcon
                icon={faCaretRight}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
          </div>
        </div>
      )}
      {current === 4 && (
        <div className={css.reserveImage}>
          <img src={images[4]} alt="" className={css.rImage} />
          <div className={css.arrows}>
            <p className={css.arrowLeft} onClick={previous}>
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={css.brandIcon}
              ></FontAwesomeIcon>
            </p>
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
