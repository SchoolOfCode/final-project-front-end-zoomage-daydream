// import css from "./Sidebar.module.css";

// function Sidebar() {
//   return (
//     <div className={css.sidebarContainer}>
//       <h2>👤 Username</h2>
//       <h2>🏠 Home</h2>
//       <h2>💬 Messages</h2>
//       <h2>📆 My Bookings</h2>
//       <h2>❤️ Favourites</h2>
//       <h2>⚙️ Settings</h2>
//       <h2>🅇 Log Out</h2>
//     </div>
//   );
// }
// export default Sidebar
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
        <FontAwesomeIcon icon={faHouse} className={css.sidebarIcons} />
        Home
      </h2>

      <h2>
        <FontAwesomeIcon icon={faMessage} className={css.sidebarIcons}/>
        Messages
      </h2>

      <h2>
        <FontAwesomeIcon icon={faCalendarCheck} className={css.sidebarIcons}/>
        My Bookings
      </h2>

      <h2>
        <FontAwesomeIcon icon={faHeart} className={css.sidebarIcons} />
        Favourites
      </h2>
      <h2>
        <FontAwesomeIcon icon={faGear} className={css.sidebarIcons} />
        Settings
      </h2>
      <h2>
        <FontAwesomeIcon icon={faArrowRightFromBracket} className={css.sidebarIcons}/>
        Log Out
      </h2>
    </div>
  );
}
export default Sidebar;
