import { Navbar } from "./commponents/navbar";
import { Hero } from "./commponents/hero";
import { Features } from "./commponents/features";
import { Faq } from "./commponents/faq";
import { Newsletter } from "./commponents/newsletter";
import { Footer } from "./commponents/footer";
import './app.css'


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Faq />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
