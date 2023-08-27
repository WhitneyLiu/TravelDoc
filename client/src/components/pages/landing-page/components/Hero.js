import BackgroundImage from '../../../sharable-components/BackgroundImage'
import Button from '../../../sharable-components/Button'
import Container from '../../../sharable-components/Container'

export default function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            Streamline Your Travel Paperwork with TravelDoc
          </h1>
          <div className="font-display mt-6 space-y-6 text-2xl tracking-tight text-blue-900">
            <p>Simplify Documentation, Maximize Adventures</p>
            <p>
              Elevate your travel experience with TravelDoc. Tired of
              deciphering complex travel documents? Our innovative platform,
              integrated with Dropbox Sign API, empowers you to handle paperwork
              with ease.
            </p>
          </div>
          <Button href="/login" className="mt-10 w-full sm:hidden">
            Sign your docs
          </Button>
        </div>
      </Container>
    </div>
  )
}
