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
        <FontAwesomeIcon icon={faUser} />
        Username
      </h2>

      <h2>
        <FontAwesomeIcon icon={faHouse} />
        Home
      </h2>

      <h2>
        <FontAwesomeIcon icon={faMessage} />
        Messages
      </h2>

      <h2>
        <FontAwesomeIcon icon={faCalendarCheck} />
        My Bookings
      </h2>

      <h2>
        <FontAwesomeIcon icon={faHeart} />
        Favourites
      </h2>
      <h2>
        <FontAwesomeIcon icon={faGear} />
        Settings
      </h2>
      <h2>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        Log Out
      </h2>
    </div>
  );
}
export default Sidebar;
