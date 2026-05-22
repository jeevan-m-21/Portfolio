import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ProjectDetails from "./pages/ProjectDetails"

// Helper component to handle smooth scroll on hash changes or route changes
function ScrollToHashElement() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1))
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 80)
        return () => clearTimeout(timer)
      }
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0F19] transition-colors duration-300">
      <ScrollToHashElement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App