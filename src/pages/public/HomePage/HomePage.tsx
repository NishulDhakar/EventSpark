
import { Header } from "../../../components"
import { Footer } from "../../../components/layout/Footer"
import CTASection from "./CTASection"
import FeaturedEvents from "./FeaturedEvents"
import { HeroSection } from "./HeroSection"




const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedEvents />
      <CTASection />
      <Footer />  
    </div>
  )
}

export default HomePage
 