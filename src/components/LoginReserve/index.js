import { useAuth0 } from "@auth0/auth0-react";
import css from "./loginReserve.module.css";

const LoginButtonReserve = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <p className={css.links} onClick={() => loginWithRedirect()}>
      Log In
    </p>
  );
};

export default LoginButtonReserve;
