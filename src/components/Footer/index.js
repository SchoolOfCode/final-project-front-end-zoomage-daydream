import React from "react";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
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
         <FontAwesomeIcon
              icon={faInstagram}
              className={css.brandIcon}
            ></FontAwesomeIcon>
         <FontAwesomeIcon
              icon={faYoutube}
              className={css.brandIcon}
            ></FontAwesomeIcon>
         <FontAwesomeIcon
              icon={faTwitter}
              className={css.brandIcon}
            ></FontAwesomeIcon>
         <FontAwesomeIcon
              icon={faEnvelope}
              className={css.brandIcon}
            ></FontAwesomeIcon>
      </div>
        <p>Copyright ©️ Space 2022 </p>
      </footer>
   
  );
};

export default Footer;
