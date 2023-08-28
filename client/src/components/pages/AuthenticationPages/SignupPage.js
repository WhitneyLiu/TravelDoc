import AuthContainer from "./components/AuthContainer";
import AuthFooter from "./components/AuthFooter";
import AuthFormContainer from "./components/AuthFormContainer";
import AuthInput from "./components/AuthInput";
import SubmitButton from "./components/SubmitButton";

export default function SignupPage() {
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
      >
        <AuthInput type="email" label="Email address:" />
        <AuthInput type="password" label="Password:" />
        <AuthInput type="password" label="Confirm password:" />

        <SubmitButton text="Sign up" />
      </AuthFormContainer>
    </AuthContainer>
  );
}
