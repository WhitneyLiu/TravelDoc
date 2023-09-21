import AuthContainer from "./components/AuthContainer";
import AuthFooter from "./components/AuthFooter";
import AuthFormContainer from "./components/AuthFormContainer";
import AuthInput from "./components/AuthInput";
import SubmitButton from "./components/SubmitButton";
import { authenticateUser } from "../../../redux/reducer/authenticationReducer";
import { showError } from "../../../redux/reducer/notificationReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { sessionValid } = useSelector(
    (state) => state.authentication
  );

  useEffect(() => {
    if (sessionValid) {
      navigate("/home");
    }
  }, [sessionValid, navigate]);

  const handleLogin = (event) => {
    event.preventDefault();
    try {
      dispatch(authenticateUser({ email, password }));
    } catch (error) {
      dispatch(showError(error.message));
    }
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
