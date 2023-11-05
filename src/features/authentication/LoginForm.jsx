import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
// import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123456789");
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("test@test.com");
          setPassword("123456789");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical
        label={
          <span style={{ color: "#5389a0", fontSize: "18px" }}>
            Email Address
          </span>
        }
      >
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical
        label={
          <span style={{ color: "#5389a0", fontSize: "18px" }}>Password</span>
        }
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log In" : <SpinnerMini />}
        </Button>
        <Button
          size="large"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
