import Container from '../../../sharable-components/Container'
import Logo from '../../../sharable-components/Logo'

export default function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-slate-900 hover:cursor-default" />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} TravelDoc, LLC. All
          rights reserved.
        </p>
      </Container>
    </footer>
  )
}
