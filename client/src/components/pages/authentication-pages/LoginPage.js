import AuthContainer from "./components/AuthContainer";
import AuthFooter from "./components/AuthFooter";
import AuthFormContainer from "./components/AuthFormContainer";
import AuthInput from "./components/AuthInput";
import SubmitButton from "./components/SubmitButton";
import { authenticateUser } from "../../../redux/reducer/authenticationReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(authenticateUser({ email, password }));
    navigate("/home");
  };

  return (
    <AuthContainer title="Sign in to your account">
      <AuthFormContainer
        footer={
          <AuthFooter title="Not a member?" text="Sign up now" herf="/signup" />
        }
        onSubmit={handleLogin}
      >
        <AuthInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          label="Email address:"
        />
        <AuthInput
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          label="Password:"
        />
        <div className="flex items-center justify-between">
          <div className="text-sm leading-6">
            <a
              href="/password-recovery"
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <SubmitButton text="Sign in" />
      </AuthFormContainer>
    </AuthContainer>
  );
}
