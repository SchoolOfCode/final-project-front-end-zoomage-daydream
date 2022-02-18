import React from "react";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
   return (
   <div> 
    <footer>
    <p>Contact Us</p>
    <SocialIcon url="https://www.facebook.com/schoolofcode" />
    <SocialIcon url = "https://www.instagram.com/theschoolofcode/?hl=en" />
    <SocialIcon url="https://twitter.com/jaketrent" />
    <SocialIcon url ="https://www.youtube.com/channel/UCKBzheEKcrqsaJhMV0f_Dmg"/>
    <p>Copyright ©️ Space 2022 </p>
    <SocialIcon url ="email"/>

    </footer>
   </div> 
   )
}

export default Footer;