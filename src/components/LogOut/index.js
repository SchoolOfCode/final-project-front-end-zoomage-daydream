import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

// log out button
const LogoutButton = () => {
  // logout button destructured from Auth0
  const { logout } = useAuth0();

  return (
    // onClick it logs you out and redirects you back to the home page.
    <p onClick={() => logout({ returnTo: window.location.origin })}>
      LOG OUT
    </p>
  );
};

export default LogoutButton;
