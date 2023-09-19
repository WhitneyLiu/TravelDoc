import AuthContainer from "./components/AuthContainer";
import AuthFooter from "./components/AuthFooter";
import AuthFormContainer from "./components/AuthFormContainer";
import AuthInput from "./components/AuthInput";
import PasswordCheck from "./components/PasswordCheck";
import Pool from "../../../UserPool";
import SubmitButton from "./components/SubmitButton";
import { CognitoUser } from "amazon-cognito-identity-js";
import {
  showError,
  showSuccess,
} from "../../../redux/reducer/notificationReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function PasswordRecoverPage() {
  const dispatch = useDispatch();

  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailStage, setIsEmailStage] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const getUser = () => {
    return new CognitoUser({
      Username: email.toLocaleLowerCase(),
      Pool,
    });
  };

  const sendCode = async (event) => {
    event.preventDefault();

    try {
      getUser().getUserData((err, userData) => {
        if (err) {
          console.log(err);
        } else {
          console.log(userData);
        }
      });
      getUser().forgotPassword({
        onSuccess: (data) => {
          console.log(data);
        },
        onFailure: (err) => {
          dispatch(showError(err.message));
        },
        inputVerificationCode: (data) => {
          console.log(data);
          dispatch(
            showSuccess({
              title: "Verification Code Sent",
              message: `An email has been sent to ${email}. Please check your inbox.`,
            })
          );
          setIsEmailStage(false);
        },
      });

      // Rest of your logic here, including the forgotPassword and confirmPassword handling
    } catch (err) {
      dispatch(showError(err.message));
      return; // Terminate the function
    }
  };

  const changePassword = (event) => {
    event.preventDefault();

    getUser().confirmPassword(code, password, {
      onSuccess: (data) => {
        dispatch(
          showSuccess({
            title: "Password Changed!",
            message:
              "Your password has been changed successfully. Please navigate to the login page to log in.",
          })
        );
      },
      onFailure: (err) => {
        dispatch(showError(err.message));
      },
    });
  };

  return (
    <AuthContainer title="Reset your password">
      <AuthFormContainer
        footer={
          <AuthFooter
            title="Ready to access your account?"
            text="Click here to log in"
            herf="/login"
          />
        }
        onSubmit={isEmailStage ? sendCode : changePassword}
      >
        {isEmailStage ? (
          <>
            <AuthInput
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              label="Email address:"
            />
            <SubmitButton text="Send verification code" />
          </>
        ) : (
          <>
            <AuthInput
              value={code}
              onChange={(event) => setCode(event.target.value)}
              type="number"
              label="Verification code:"
            />
            <AuthInput
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              label="New password:"
            />
            <PasswordCheck password={password} />
            <AuthInput
              value={passwordConfirm}
              onChange={(event) => setPasswordConfirm(event.target.value)}
              type="password"
              label="Confirm password:"
            />
            <SubmitButton text="Send verification code" />
          </>
        )}
      </AuthFormContainer>
    </AuthContainer>
  );
}
