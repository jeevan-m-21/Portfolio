import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import { projects } from "../data/projects"

const Projects = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F19] pt-32 pb-20 px-8 sm:px-12 lg:px-16 transition-colors duration-300">
      {/* Background Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/10 dark:bg-violet-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-violet-600 dark:text-violet-400 font-semibold tracking-widest uppercase text-[13px] mb-4">
            PORTFOLIO
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Featured Projects
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            A collection of my recent work in web development, focusing on scalable architecture, interactive UI, and robust backends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-[#151B29] border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-violet-500/30 transition-all duration-300 flex flex-col min-h-[420px]"
            >
              {/* Featured Badge */}
              {project.isFeatured && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-md">
                    Featured
                  </span>
                </div>
              )}

              {/* Absolute Invisible Overlay Link covering the card */}
              <Link 
                to={`/projects/${project.id}`} 
                className="absolute inset-0 z-10 rounded-2xl" 
                aria-label={`View details of ${project.title}`}
              />

              {/* Thumbnail Placeholder */}
              <div className="w-full h-56 bg-slate-100 dark:bg-slate-900 relative overflow-hidden flex items-center justify-center border-b border-slate-200/50 dark:border-white/5">
                {project.preview ? (
                  <img 
                    src={project.preview} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                ) : (
                  /* Premium Gradient Fallback for CampusHive */
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-950/40 via-[#0E131F] to-cyan-950/40 flex flex-col items-center justify-center p-6 text-center select-none">
                    {/* Decorative ambient glowing blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-tr from-violet-600 to-cyan-500 rounded-full blur-[40px] opacity-20 pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                    
                    {/* Modern graphic symbol */}
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-gradient-to-tr from-violet-600/10 to-cyan-500/10 border border-violet-500/20 flex items-center justify-center text-xl font-bold text-violet-400 dark:text-violet-400 mb-3 shadow-inner">
                      CH
                    </div>
                    <h4 className="relative z-10 text-lg font-bold text-slate-800 dark:text-white group-hover:tracking-wider transition-all duration-300">
                      {project.title}
                    </h4>
                    <p className="relative z-10 text-[10px] font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mt-1">
                      Upcoming Flagship
                    </p>
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/5 transition-colors duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* GitHub link icon (Clicking this is safe as it's a sibling of the absolute Link overlay, z-20 keeps it clickable) */}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white transition-colors z-20 p-1 relative" 
                      aria-label="GitHub Repository"
                    >
                      <FaGithub className="w-[18px] h-[18px]" />
                    </a>
                  )}
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 relative z-20">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
