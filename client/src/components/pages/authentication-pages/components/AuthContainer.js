import BackgroundImage from "../../../sharable-components/BackgroundImage";
import Container from "../../../sharable-components/Container";
import Logo from "../../../sharable-components/Logo";
import Notification from "../../../sharable-components/Notification";

export default function AuthContainer(props) {
  const { title, children } = props;
  return (
    <>
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className={"relative"}>
        <Notification />
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Logo className="mx-auto h-10 w-auto text-slate-900 hover:cursor-default" />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              {title}
            </h2>
          </div>
          {children}
        </div>
      </Container>
    </>
  );
}
