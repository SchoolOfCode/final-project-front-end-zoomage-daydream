import React from "react";
import css from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
function Profile() {
  return (
    <div className={css.profileInformation}>
      <FontAwesomeIcon icon={faUserCircle} className={css.usernameInfo}/>
      <h2 className={css.usernameInfo}>Username</h2>
      <h2 className={css.usernameInfo}>Name</h2>
      <h2 className={css.usernameInfo}>email</h2>
    </div>
  );
}
export default Profile;
