import AuthContainer from "./components/AuthContainer";
import AuthFooter from "./components/AuthFooter";
import AuthFormContainer from "./components/AuthFormContainer";
import AuthInput from "./components/AuthInput";
import PasswordCheck from "./components/PasswordCheck";
import SubmitButton from "./components/SubmitButton";
import UserPool from "../../../UserPool";
import { isValid } from "../../../helper/password";
import { show } from "../../../redux/reducer/notificationReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function SignupPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const createAccount = (event) => {
    event.preventDefault();
    if (!isValid(password)) {
      dispatch(
        show({
          isError: true,
          message: "Invalid password.",
        })
      );
      return;
    }
    if (password !== passwordConfirm) {
      dispatch(
        show({
          isError: true,
          message: "Passwords do not match.",
        })
      );
      return;
    }

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        dispatch(
          show({
            isError: true,
            message: err.message,
          })
        );
        console.error(err);
      } else {
        dispatch(
          show({
            isError: false,
            title: "Registration Success",
            message: `Thank you. We have sent you email to ${email}. Please check the link in that message to activate your account.`,
          })
        );
        console.log(data);
      }
    });
  };

  return (
    <AuthContainer title="Create new account">
      <AuthFormContainer
        footer={
          <AuthFooter
            title="Already have an account?"
            text="Log in here"
            herf="/login"
          />
        }
        onSubmit={createAccount}
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
        <PasswordCheck password={password}/>
        <AuthInput
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
          type="password"
          label="Confirm password:"
        />

        <SubmitButton text="Sign up" />
      </AuthFormContainer>
    </AuthContainer>
  );
}
