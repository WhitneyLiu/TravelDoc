import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

export default function LandingPage() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Features/>
      <Footer/>
    </div>
  )
}
