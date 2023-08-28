import BackgroundImage from "../../sharable-components/BackgroundImage";
import Button from "../../sharable-components/Button";
import Container from "../../sharable-components/Container";
import Logo from "../../sharable-components/Logo";

export default function LoginPage() {
  return (
    <>
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className={"relative"}>
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Logo className="mx-auto h-10 w-auto text-slate-900" />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white/60 px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900 text-left"
                  >
                    Email address:
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900 text-left"
                  >
                    Password:
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

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

                <div>
                  <Button
                    type="submit"
                    className="w-full rounded-md px-3 py-1.5 text-sm leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Sign in
                  </Button>
                </div>
              </form>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{" "}
              <a
                href="/signup"
                className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
              >
                Sign up now
              </a>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
