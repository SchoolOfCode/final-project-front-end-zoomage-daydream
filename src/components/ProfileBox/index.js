import React, { useState, useEffect, useRef } from "react";
import API_URL from "../../config";
import Profile from "../Profile";
import { useAuth0 } from "@auth0/auth0-react";
function ProfileBox() {
  const [users, setUsers] = useState([{}]);
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated === true) {
    console.log("dd", user.email);
  }

  useEffect(() => {
    if (isAuthenticated === true) {
      const fetchProfileData = async () => {
        const url = `${API_URL}/users/?email=${user.email}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setUsers(data.payload);
      };
      fetchProfileData();
    }
  }, []);

  return (
    <div>
      {" "}
      {users[0].username && isAuthenticated && (
        <Profile
          date_of_birth={users[0].date_of_birth.split("").slice(0, 10)}
          email={user.email}
          full_name={user.name}
          username={users[0].username}
        />
      )}
    </div>
  );
}
export default ProfileBox;
