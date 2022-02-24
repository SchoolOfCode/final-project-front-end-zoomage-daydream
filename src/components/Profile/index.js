import React from "react";
import css from "./Profile.module.css";
function Profile() {
  return (
    <div className={css.profileInformation}>
      <h2>Username</h2>
      <h2>Name</h2>
      <h2>email</h2>
    </div>
  );
}
export default Profile;
