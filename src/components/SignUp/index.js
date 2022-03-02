import { useAuth0 } from "@auth0/auth0-react";

const SignUp = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <p onClick={() => loginWithRedirect()}>SIGN UP</p>
    </div>
  );
};

export default SignUp;
