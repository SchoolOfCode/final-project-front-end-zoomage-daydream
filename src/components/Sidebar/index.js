import css from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMessage,
  faCalendarCheck,
  faUser,
  faHeart,
  faGear,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  return (
    <div className={css.sidebarContainer}>
      <h2>
        {" "}
        <FontAwesomeIcon icon={faUser} className={css.sidebarIcons} />
        Username
      </h2>

      <h2>
        <FontAwesomeIcon icon={faCalendarCheck} className={css.sidebarIcons} />
        My Bookings
      </h2>
      <h2>
        <FontAwesomeIcon icon={faCalendarCheck} className={css.sidebarIcons} />
        Listings
      </h2>
      <h2>
        <FontAwesomeIcon icon={faMessage} className={css.sidebarIcons} />
        Listings
      </h2>

      <h2>
        <FontAwesomeIcon icon={faGear} className={css.sidebarIcons} />
        Settings
      </h2>
    </div>
  );
}
export default Sidebar;
