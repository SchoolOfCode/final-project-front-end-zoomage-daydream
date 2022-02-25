import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Profile from "../Profile";
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
  useEffect(() => {
    const fetchProfileData = async () => {
      const url = "https://space-project-backend.herokuapp.com/users";
      const res = await fetch(url);
      const data = await res.json();
      //data.?
      setUsers(data.payload);
      // console.log(data.payload);
    };
    fetchProfileData();
  }, []);
  // console.log(users[0]);
  // return (
  //   <div>
  //     {users.map((user, index) => {
  //       return (
  //         <Profile
  //           date_of_birth={user.date_of_birth}
  //           email={user.email}
  //           full_name={user.full_name}
  //           username={user.username}
  //           key={index}
  //         />
  //       );
  //     })}
  //   </div>
  return (
    <div>
      <Profile
        date_of_birth={users[0].date_of_birth}
        email={users[0].email}
        full_name={users[0].full_name}
        username={users[0].username}
      />
    </div>
  );
}
export default ProfileBox;
