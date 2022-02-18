import React from "react";
import { SocialIcon } from "react-social-icons";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footerContainer}>
      <div className={css.icons}>
        <p>Contact Us</p>
        <SocialIcon className={css.icon} url="https://www.facebook.com/schoolofcode" />
        <SocialIcon className={css.icon} url="https://www.instagram.com/theschoolofcode/?hl=en" />
        <SocialIcon className={css.icon} url="https://twitter.com/jaketrent" />
        <SocialIcon className={css.icon} url="https://www.youtube.com/channel/UCKBzheEKcrqsaJhMV0f_Dmg" />
        <SocialIcon className={css.icon} url="mailto:myemailaddress@gmail.com" />
      </div>
        <p>Copyright ©️ Space 2022 </p>
      </footer>
   
  );
};

export default Footer;
