import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const location = useLocation()

  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("")
      return
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220 // Offset for fixed navbar

      const homeSection = document.getElementById("home")
      const aboutSection = document.getElementById("about")
      const skillsSection = document.getElementById("skills")
      const contactSection = document.getElementById("contact")

      let currentSection = "home"

      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        currentSection = "contact"
      } else if (skillsSection && scrollPosition >= skillsSection.offsetTop) {
        currentSection = "skills"
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        currentSection = "about"
      } else if (homeSection && scrollPosition >= homeSection.offsetTop) {
        currentSection = "home"
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" }, // Assuming you might want to handle hash scrolling later
    { name: "Skills", path: "/#skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/#contact" }
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-black/5 dark:border-white/5 bg-white/70 dark:bg-[#0B0F19]/70 backdrop-blur-md transition-all duration-300">
      <nav className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition cursor-pointer">
              Jeevan
            </h1>
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => {
            let isActive = false;
            if (location.pathname === "/") {
              if (item.path === "/") {
                isActive = activeSection === "home";
              } else if (item.path.startsWith("/#")) {
                isActive = activeSection === item.path.substring(2);
              }
            } else {
              if (!item.path.startsWith("/#") && item.path !== "/") {
                isActive = location.pathname.startsWith(item.path);
              }
            }

            return (
              <li key={item.name} className="relative py-2 group">
                <Link 
                  to={item.path}
                  className={`transition-colors duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent font-bold' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
                {/* Underline animation */}
                <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
                  isActive 
                    ? 'w-full bg-gradient-to-r from-violet-600 to-cyan-500' 
                    : 'w-0 bg-violet-500 dark:bg-violet-400 group-hover:w-full'
                }`} />
                {/* Hover Glow effect for the underline */}
                <span className={`absolute bottom-0 left-0 h-[2px] blur-[4px] transition-all duration-300 ease-out ${
                  isActive 
                    ? 'w-full bg-gradient-to-r from-violet-600 to-cyan-500 opacity-50' 
                    : 'w-0 bg-violet-500 dark:bg-violet-400 opacity-0 group-hover:w-full group-hover:opacity-50'
                }`} />
              </li>
            )
          })}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {!mounted ? (
              <div className="w-[18px] h-[18px]" />
            ) : resolvedTheme === "dark" ? (
              <FiSun className="w-[18px] h-[18px] text-amber-400" />
            ) : (
              <FiMoon className="w-[18px] h-[18px] text-slate-700" />
            )}
          </button>

          {/* Resume Button */}
          <a 
            href="/resume.pdf" 
            download="Jeevan_Resume.pdf"
            className="hidden sm:inline-flex bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 transition-all duration-300 text-white text-sm px-5 py-2.5 rounded-xl font-medium shadow-md shadow-violet-500/5 hover:shadow-violet-500/15 active:scale-95 cursor-pointer"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-all duration-200 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full border-b border-slate-200/50 dark:border-slate-800/50 bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-lg transition-all duration-300 px-6 py-6 flex flex-col gap-6 shadow-xl">
          <ul className="flex flex-col gap-4 text-base font-medium text-slate-600 dark:text-slate-300">
            {navItems.map((item) => {
              let isActive = false;
              if (location.pathname === "/") {
                if (item.path === "/") {
                  isActive = activeSection === "home";
                } else if (item.path.startsWith("/#")) {
                  isActive = activeSection === item.path.substring(2);
                }
              } else {
                if (!item.path.startsWith("/#") && item.path !== "/") {
                  isActive = location.pathname.startsWith(item.path);
                }
              }

              return (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className={`transition-colors duration-200 cursor-pointer py-1 block ${
                      isActive 
                        ? 'text-violet-600 dark:text-violet-400 font-bold' 
                        : 'hover:text-violet-600 dark:hover:text-violet-400'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
          
          <div className="flex flex-col gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
            <a 
              href="/resume.pdf"
              download="Jeevan_Resume.pdf"
              className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 text-white py-3 rounded-xl font-medium shadow-md transition-all duration-300 text-center cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar