import { useAuth0 } from "@auth0/auth0-react";

import css from "./loginReserve.module.css";

// Login button the redirects you to Auth0
const LoginButtonReserve = () => {
  // Login button the redirects you to Auth0
  const { loginWithRedirect } = useAuth0();

  return (
    // Login button the redirects you to Auth0
    <p className={css.links} onClick={() => loginWithRedirect()}>
      Please Log In to reserve this space
    </p>
  );
};

export default LoginButtonReserve;
