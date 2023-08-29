import AuthContainer from "./components/AuthContainer";
import AuthFooter from "./components/AuthFooter";
import AuthFormContainer from "./components/AuthFormContainer";
import AuthInput from "./components/AuthInput";
import SubmitButton from "./components/SubmitButton";
import { useState } from "react";

export default function PasswordRecoverPage() {
  const [isEmailStage, setIsEmailStage] = useState(true);
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
      >
        {isEmailStage ? (
          <>
            <AuthInput type="email" label="Email address:" />
            <SubmitButton text="Send verification code" />
          </>
        ) : (
          <>
            <AuthInput type="number" label="Verification code:" />
            <AuthInput type="password" label="New password:" />
            <AuthInput type="password" label="Confirm password:" />
            <SubmitButton text="Send verification code" />
          </>
        )}
      </AuthFormContainer>
    </AuthContainer>
  );
}
