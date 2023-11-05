import styled from "styled-components";
import Heading from "../ui/Heading";
import SignupForm from "../features/authentication/SignupForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  background-color: #ededed;
`;

function Login() {
  return (
    <LoginLayout>
      <Heading as="h4">Sign up a new account</Heading>
      <SignupForm />
    </LoginLayout>
  );
}

export default Login;
