import React from "react";

// import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footerContainer}>
      <div className={css.icons}>
        <p>Contact Us</p>

        <a
          href="https://twitter.com/theSchoolOfCode?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          className="twitter"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className={css.brandIcon}
          ></FontAwesomeIcon>
        </a>

        <a
          href="https://www.instagram.com/theschoolofcode/?hl=en"
          className="instagram"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className={css.brandIcon}
          ></FontAwesomeIcon>
        </a>

        <a
          href="https://www.youtube.com/channel/UCKBzheEKcrqsaJhMV0f_Dmg"
          className="youtube"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            className={css.brandIcon}
          ></FontAwesomeIcon>
        </a>

        <a href="mailto:someone@yoursite.com" className="mail">
          <FontAwesomeIcon
            icon={faEnvelope}
            className={css.brandIcon}
          ></FontAwesomeIcon>
        </a>


      </div>
      <p>Copyright ©️ Space 2022 </p>
    </footer>
  );
};

export default Footer;
