import { useParams, Link, Navigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaInfoCircle } from "react-icons/fa"
import { projects } from "../data/projects"
import { useEffect, useState } from "react"

const ProjectDetails = () => {
  const { id } = useParams()
  const [showToast, setShowToast] = useState(false)
  const project = projects.find(p => p.id === id)

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const handleDemoClick = (e) => {
    if (!project.demoUrl) {
      e.preventDefault()
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3500)
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F19] pt-24 pb-20 px-8 sm:px-12 lg:px-16 transition-colors duration-300">
      
      {/* Background Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/10 dark:bg-violet-600/15 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Back Link */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 transition-colors mb-8 sm:mb-12"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href={project.demoUrl || "#"} 
              target={project.demoUrl ? "_blank" : "_self"} 
              rel={project.demoUrl ? "noreferrer" : ""}
              onClick={handleDemoClick}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600 transition-all duration-300 text-white px-6 py-3 rounded-xl font-medium shadow-md shadow-violet-500/20 active:scale-95"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition duration-200 text-slate-800 dark:text-slate-200 px-6 py-3 rounded-xl font-medium backdrop-blur-sm active:scale-95"
              >
                <FaGithub /> View Source
              </a>
            )}
          </div>
        </motion.div>

        {/* Main Banner Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl bg-slate-100 dark:bg-slate-900 mb-20 flex items-center justify-center border border-slate-200/50 dark:border-white/10 shadow-2xl overflow-hidden relative"
        >
           {project.preview ? (
              <img src={project.preview} alt={`${project.title} Preview`} className="w-full h-full object-cover" />
            ) : (
              /* Premium Gradient Fallback Banner for CampusHive */
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-950 via-[#0E131F] to-cyan-950 flex flex-col items-center justify-center p-8 text-center select-none">
                <div className="absolute inset-0 bg-violet-600/5 rounded-full blur-[120px] opacity-40 pointer-events-none" />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600/10 to-cyan-500/10 border border-violet-500/20 flex items-center justify-center text-3xl font-bold text-violet-400 dark:text-violet-400 mb-4 shadow-xl">
                  CH
                </div>
                <h2 className="text-3xl font-extrabold text-white tracking-wide">
                  {project.title}
                </h2>
                <p className="text-xs font-semibold text-violet-400 dark:text-violet-400 uppercase tracking-widest mt-2 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
                  Featured Flagship Project
                </p>
              </div>
            )}
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 lg:gap-20">
          
          {/* Left Column: Details */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="space-y-16"
          >
            
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 text-sm">01</span>
                Problem Statement
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {project.problem}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-sm">02</span>
                Proposed Solution
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {project.solution}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 bg-slate-50 dark:bg-[#151B29] p-4 rounded-xl border border-slate-200 dark:border-white/5">
                    <div className="w-2 h-2 mt-2 rounded-full bg-violet-500 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Case-study Dynamic Screenshot Gallery */}
            {project.images && project.images.length > 0 && (
              <section className="space-y-8">
                <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 text-sm">03</span>
                    System Implementation & Interface
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-medium">
                    Actual interface screens from the running application, showcasing user journeys, interactive dashboards, and design implementation.
                  </p>
                </div>

                <div className="flex flex-col gap-10">
                  {project.images.map((image, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#151B29]/30 shadow-xl hover:shadow-2xl hover:border-violet-500/30 transition-all duration-500"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 opacity-0 group-hover:opacity-[0.03] blur-[1px] transition-opacity duration-500 pointer-events-none" />
                      <img 
                        src={image} 
                        alt={`${project.title} Interface Screen ${index + 1}`} 
                        className="w-full h-auto object-cover max-h-[550px] object-top rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Empty Screenshots fallback (CampusHive) */}
            {(!project.images || project.images.length === 0) && (
              <section className="bg-gradient-to-tr from-violet-600/5 to-cyan-500/5 border border-violet-500/10 dark:border-violet-400/10 p-8 rounded-2xl shadow-inner relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-gradient-to-tr from-violet-600 to-cyan-500 rounded-full blur-[90px] opacity-10 pointer-events-none" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  🚀 Development Roadmap & Architecture
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  CampusHive is currently under active architecture design and early implementation phases. Cryptographic authentication schemes and system mockups are being mapped. While direct screenshots are not yet available, the full system deployment plan is targeted for completion in the next development cycle.
                </p>
              </section>
            )}

          </motion.div>

          {/* Right Column: Sidebar */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="bg-slate-50 dark:bg-[#151B29] p-8 rounded-2xl border border-slate-200 dark:border-white/5 sticky top-28">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 pb-4 border-b border-slate-200 dark:border-white/10">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Unavailable Demo Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md"
          >
            <div className="bg-slate-900/80 dark:bg-slate-900/90 backdrop-blur-xl border border-violet-500/20 shadow-2xl shadow-violet-500/10 rounded-2xl p-4 flex items-start gap-4">
              <div className="text-cyan-400 mt-0.5">
                <FaInfoCircle className="w-5 h-5 flex-shrink-0" />
              </div>
              <p className="text-sm font-medium text-slate-200 leading-relaxed">
                Live demo is currently unavailable. Please check the GitHub repository for source code and project details.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectDetails
