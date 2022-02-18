import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <p>Contact Us</p>
        <SocialIcon url="https://www.facebook.com/schoolofcode" />
        <SocialIcon url="https://www.instagram.com/theschoolofcode/?hl=en" />
        <SocialIcon url="https://twitter.com/jaketrent" />
        <SocialIcon url="https://www.youtube.com/channel/UCKBzheEKcrqsaJhMV0f_Dmg" />
        <SocialIcon url="mailto:myemailaddress@gmail.com" />
        <p>Copyright ©️ Space 2022 </p>
      </footer>
    </div>
  );
};

export default Footer;
