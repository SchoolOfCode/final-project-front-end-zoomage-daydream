import React, { useState, useEffect } from "react";
import API_URL from "../../config";
import Profile from "../Profile";
import { useAuth0 } from "@auth0/auth0-react";
function ProfileBox() {
  const [users, setUsers] = useState([
    {
      date_of_birth: "1971-05-12T00:00:00.000Z",
      email: "ayomide@gmail.com",
      full_name: "Ayomide Ojelade",
      id: 1,
      username: "Ayomide"
    }
  ]);
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getUserMetadata = async () => {};

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  useEffect(() => {
    const fetchProfileData = async () => {
      const url = `${API_URL}/users/?email=${user.email}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      setUsers(data.payload);
    };
    fetchProfileData();
  }, [user]);

  return (
    <div>
      {" "}
      {users && (
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
