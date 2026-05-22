import { motion } from "framer-motion"
import { 
  LuGraduationCap, 
  LuCalendar, 
  LuBrain, 
  LuShield, 
  LuCloud, 
  LuDatabase, 
  LuGlobe, 
  LuSparkles 
} from "react-icons/lu"
import { FiBarChart2 } from "react-icons/fi"

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-24 bg-white dark:bg-[#0B0F19] transition-colors duration-300">
      
      {/* Decorative background ambient glows */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] bg-violet-600/10 dark:bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Text Intro & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-violet-600 dark:text-violet-400 font-semibold tracking-widest uppercase text-[13px] mb-8">
              ABOUT ME
            </p>
            
            <div className="space-y-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              <p>
                I am a Computer Science Engineering student at KS Institute of Technology with a CGPA of 9.38 (6th semester). I am passionate about Data Engineering, AI/ML, Software Development, and DevOps.
              </p>
              <p>
                I believe in innovation, continuous learning, and building impactful solutions. Inspired by Dr. A. P. J. Abdul Kalam's vision of using technology for the betterment of society, my goal is to invent, innovate and contribute meaningfully through technology.
              </p>
              <p>
                My projects reflect my interest in solving real-world problems through intelligent automation, secure systems, and scalable backend solutions.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-slate-200 dark:bg-slate-800/60 my-10" />

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="flex items-center gap-4 bg-slate-50 dark:bg-[#141A27] border border-slate-200/50 dark:border-white/5 rounded-xl p-4 transition-all hover:bg-slate-100 dark:hover:bg-[#1A2131]">
                <div className="text-violet-600 dark:text-violet-400 text-2xl">
                  <LuGraduationCap />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Education</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">KS Institute of Technology</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 dark:bg-[#141A27] border border-slate-200/50 dark:border-white/5 rounded-xl p-4 transition-all hover:bg-slate-100 dark:hover:bg-[#1A2131]">
                <div className="text-blue-500 dark:text-blue-400 text-2xl">
                  <FiBarChart2 />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">CGPA</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">9.38 / 10</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 dark:bg-[#141A27] border border-slate-200/50 dark:border-white/5 rounded-xl p-4 transition-all hover:bg-slate-100 dark:hover:bg-[#1A2131]">
                <div className="text-purple-500 dark:text-purple-400 text-2xl">
                  <LuCalendar />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Semester</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">6th</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interests Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Darker Card Background matching the image */}
            <div className="relative bg-slate-50 dark:bg-[#151B29] border border-slate-200 dark:border-white/5 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Interests
              </h3>
              
              <div className="flex flex-col">
                {[
                  {
                    title: "AI / ML",
                    icon: <LuBrain className="w-5 h-5" />
                  },
                  {
                    title: "Cyber Security",
                    icon: <LuShield className="w-5 h-5" />
                  },
                  {
                    title: "Cloud Computing",
                    icon: <LuCloud className="w-5 h-5" />
                  },
                  {
                    title: "Data Engineering",
                    icon: <LuDatabase className="w-5 h-5" />
                  },
                  {
                    title: "Web Development",
                    icon: <LuGlobe className="w-5 h-5" />
                  },
                  {
                    title: "Animations",
                    icon: <LuSparkles className="w-5 h-5" />
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-5 py-4 border-b border-slate-200 dark:border-white/5 last:border-0 last:pb-0 group"
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-[14px] bg-slate-200/50 dark:bg-[#1D2435] text-violet-600 dark:text-violet-400 group-hover:scale-110 group-hover:bg-violet-100 dark:group-hover:bg-violet-500/20 transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-base font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
