import React from "react";
import css from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
function Profile({ date_of_birth, email, full_name, username }) {
  return (
    <div className={css.profileInformation}>
      <FontAwesomeIcon icon={faUserCircle} className={css.usernameInfo} />
      <h2 className={css.usernameInfo}>Username: {username}</h2>
      <h2 className={css.usernameInfo}>Name: {full_name}</h2>
      <h2 className={css.usernameInfo}>email: {email}</h2>
      <h2 className={css.usernameInfo}>Date of Birth: {date_of_birth}</h2>
    </div>
  );
}
export default Profile;
