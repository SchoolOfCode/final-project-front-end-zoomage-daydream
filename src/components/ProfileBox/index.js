import React, { useState, useEffect, useRef } from "react";
import API_URL from "../../config";
import Profile from "../Profile";
import { useAuth0 } from "@auth0/auth0-react";
function ProfileBox() {
  const [users, setUsers] = useState([
    {
      date_of_birth:"wwww"
    }
  ]);
  const { user, isAuthenticated } = useAuth0();

  
  useEffect(() => {
    if (isAuthenticated === true) {
      const fetchProfileData = async () => {
        const url = `${API_URL}/users/?email=${user.email}`;
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data.payload);
      };
      fetchProfileData();
    }
  }, []);
  


  return (
    <div>
      {" "}
  
      {users[0] && isAuthenticated && (
        <Profile
          date_of_birth={users[0].date_of_birth.split("").slice(0, 10)}
          email={user.email}
          full_name={users[0].full_name}
          username={users[0].username}
        />
      )}
    </div>
  );
}
export default ProfileBox;
