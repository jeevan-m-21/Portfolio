import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Skills from "../components/sections/Skills"
import Contact from "../components/sections/Contact"

const Home = () => {
  return (
    <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home
