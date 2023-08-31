import Button from '../../../sharable-components/Button';
import Container from '../../../sharable-components/Container';
import Logo from '../../../sharable-components/Logo';

export default function HomepageHeader() {
  return (
    <header className="relative z-50 flex-none lg:pt-11 mb-10">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
      </Container>
    </header>
  );
}