import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import profile from "../../assets/profile.png"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 }
    }
  }

  return (
    <section id="home" className="relative overflow-hidden flex items-center justify-center px-8 sm:px-12 lg:px-16 pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 bg-white dark:bg-[#0B0F19] transition-colors duration-300">
      
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/20 dark:bg-violet-600/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT SIDE: Copy & Call-to-actions */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          
          {/* Badge/Tag */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/10 dark:border-violet-400/10 bg-violet-500/5 dark:bg-violet-400/5 text-violet-600 dark:text-violet-400 font-medium tracking-wider uppercase text-xs mb-6"
          >
            CS Engineering Student
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
              Jeevan M
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
          >
            A passionate Computer Science Engineering student focused on building scalable full-stack applications, AI-powered systems, and impactful digital experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <Link to="/projects" className="inline-flex items-center justify-center bg-violet-600 hover:bg-violet-700 transition duration-200 text-white px-7 py-3.5 rounded-xl font-medium shadow-md shadow-violet-500/10 hover:shadow-violet-500/20 active:scale-95 cursor-pointer">
              View Projects
            </Link>

            <a 
              href="/resume.pdf"
              download="Jeevan_Resume.pdf"
              className="inline-flex items-center justify-center border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition duration-200 text-slate-800 dark:text-slate-200 px-7 py-3.5 rounded-xl font-medium backdrop-blur-sm active:scale-95 cursor-pointer"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="https://github.com/jeevan-m-21"
              target="_blank"
              className="p-3 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/30 dark:hover:border-violet-500/30 transition duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/jeevan-m-294aa8311/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B270ykcxWSxyLkT81XUZZ0A%3D%3D"
              target="_blank"
              className="p-3 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/30 dark:hover:border-violet-500/30 transition duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </motion.div>

        </motion.div>

        {/* RIGHT SIDE: Profile Image with soft glow and float */}
        <div className="flex justify-center lg:justify-end items-center">
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative animate-float"
          >
            
            {/* Glow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-cyan-500/30 rounded-full blur-3xl opacity-80" />

            {/* Glass Card Container */}
            <div className="relative bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-slate-200/10 dark:border-white/10 rounded-full p-3 sm:p-4 shadow-2xl">
              <img
                src={profile}
                alt="Jeevan"
                className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px] rounded-full object-cover"
              />
            </div>

          </motion.div>
        </div>

      </div>

    </section>
  )
}

export default Hero