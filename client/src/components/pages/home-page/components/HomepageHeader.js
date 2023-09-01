import Container from "../../../sharable-components/Container";
import HeaderLogo from "./HeaderLogo";

export default function HomepageHeader() {
  return (
    <header className="relative z-50 flex-none lg:pt-11 mb-10">
      <Container className="flex flex-wrap items-center relative lg:flex-nowrap z-50">
        <div
          className="hidden md:block fixed left-0 top-0 mt-4 ml-4 z-50"
          style={{ zIndex: 50 }}
        >
          <HeaderLogo className="h-12 w-auto" />
        </div>
      </Container>
    </header>
  );
}
