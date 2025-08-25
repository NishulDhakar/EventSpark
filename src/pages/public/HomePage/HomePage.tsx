
import { Header } from "../../../components"
import { Footer } from "../../../components/layout/Footer"
import FeaturedEvents from "./FeaturedEvents"
import { HeroSection } from "./HeroSection"




const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedEvents />
      <Footer />  
    </div>
  )
}

export default HomePage
 