import { useAuth0 } from "@auth0/auth0-react";
import css from "./login.module.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  

  return (
    <p className={css.links} onClick={() => loginWithRedirect()}>
      LOG IN
    </p>
  );
};

export default LoginButton;
