import BackgroundImage from "../../../sharable-components/BackgroundImage";
import Container from "../../../sharable-components/Container";
import Logo from "../../../sharable-components/Logo";

export default function AuthContainer(props) {
  return (
    <>
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className={"relative"}>
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Logo className="mx-auto h-10 w-auto text-slate-900" />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              {props.title}
            </h2>
          </div>
          {props.children}
        </div>
      </Container>
    </>
  );
}
