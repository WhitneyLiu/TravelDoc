import Button from '../../../sharable-components/Button'
import Container from '../../../sharable-components/Container'
import Logo from '../../../sharable-components/Logo'

export default function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="/login">Sign your docs</Button>
        </div>
      </Container>
    </header>
  )
}
