import { useAuth0 } from "@auth0/auth0-react";

import "./login.css";

// Login button the redirects you to Auth0
const LoginButton = () => {
  // Login button the redirects you to Auth0
  const { loginWithRedirect } = useAuth0();

  return (
    // Login button the redirects you to Auth0
    <p id="login1" className="loginmian" onClick={() => loginWithRedirect()}>
      LOG IN
    </p>
  );
};

export default LoginButton;
