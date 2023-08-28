import AuthContainer from "./components/AuthContainer";
import AuthFooter from "./components/AuthFooter";
import AuthFormContainer from "./components/AuthFormContainer";
import AuthInput from "./components/AuthInput";
import SubmitButton from "./components/SubmitButton";

export default function LoginPage() {
  return (
    <AuthContainer title="Sign in to your account">
      <AuthFormContainer
        footer={
          <AuthFooter title="Not a member?" text="Sign up now" herf="/signup" />
        }
      >
        <AuthInput type="email" label="Email address:" />
        <AuthInput type="password" label="Password:" />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
            />
            <label
              htmlFor="remember-me"
              className="ml-3 block text-sm leading-6 text-gray-900"
            >
              Remember me
            </label>
          </div>

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
