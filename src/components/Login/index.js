import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <p id="login1" className='loginmian' onClick={() => loginWithRedirect()}>
      LOG IN
    </p>
  );
};

export default LoginButton;
