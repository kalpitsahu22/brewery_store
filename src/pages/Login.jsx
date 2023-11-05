import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;

  gap: 3.2rem;
  background-color: #ededed;
`;

function Login() {
  return (
    <LoginLayout>
      <Heading as="h4" style={{ color: "#5389a0", fontSize: "25px" }}>
        Log In To Your Account
      </Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
