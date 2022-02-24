import React from "react";
import css from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
function Profile() {
  return (
    <div className={css.profileInformation}>
      <FontAwesomeIcon icon={faUserCircle} />
      <h2>Username</h2>
      <h2>Name</h2>
      <h2>email</h2>
    </div>
  );
}
export default Profile;
