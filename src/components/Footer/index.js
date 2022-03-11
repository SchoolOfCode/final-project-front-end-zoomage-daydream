import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import css from "./Footer.module.css";

// footer component
const Footer = () => {
  return (
    <footer className={css.footerContainer}>
      <div className={css.icons}>
        <p className={css.text}>Contact Us</p>
        <div className={css.iconList}>
          <a
            href="https://twitter.com/theSchoolOfCode?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            className="twitter"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className={css.brandIcon}
            ></FontAwesomeIcon>
          </a>

          <a
            href="https://www.instagram.com/theschoolofcode/?hl=en"
            className="instagram"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className={css.brandIcon}
            ></FontAwesomeIcon>
          </a>

          <a
            href="https://www.youtube.com/channel/UCKBzheEKcrqsaJhMV0f_Dmg"
            className="youtube"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className={css.brandIcon}
            ></FontAwesomeIcon>
          </a>

          <a
            href="mailto:someone@yoursite.com"
            className="mail"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className={css.brandIcon}
            ></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <p className={css.text}>Copyright ©️ Space 2022 </p>
    </footer>
  );
};

export default Footer;
