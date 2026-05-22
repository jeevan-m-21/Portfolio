import { motion } from "framer-motion"

const SkillBar = ({ name, percentage }) => {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800/60 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full relative"
        >
          {/* Subtle glow on the progress bar */}
          <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-[2px]" />
        </motion.div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="relative overflow-hidden py-20 md:py-24 bg-slate-50 dark:bg-[#090D16] border-y border-black/5 dark:border-white/5 transition-colors duration-300">
      
      {/* Background glow effects */}
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-violet-600/10 dark:bg-violet-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-violet-600 dark:text-violet-400 font-semibold tracking-widest uppercase text-[13px] mb-4">
            TECHNICAL EXPERTISE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Skills & Engineering Focus
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            My technical foundation built through academic coursework, hackathons, and real-world engineering projects.
          </p>
        </div>

        {/* Two-Column Masonry-Style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">
            
            {/* Programming Languages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-[#151B29] border border-slate-200 dark:border-white/5 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-violet-500/20 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-white/10 pb-4">
                Programming Languages
              </h3>
              <div>
                <SkillBar name="C / C++" percentage={85} />
                <SkillBar name="Java" percentage={85} />
                <SkillBar name="Python" percentage={80} />
                <SkillBar name="JavaScript" percentage={90} />
              </div>
            </motion.div>

            {/* Frontend Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-[#151B29] border border-slate-200 dark:border-white/5 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-violet-500/20 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-white/10 pb-4">
                Frontend & App Development
              </h3>
              <div>
                <SkillBar name="React" percentage={80} />
                <SkillBar name="Tailwind CSS" percentage={75} />
                <SkillBar name="Flutter" percentage={75} />
              </div>
            </motion.div>



          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">
            
            {/* Databases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-[#151B29] border border-slate-200 dark:border-white/5 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-violet-500/20 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-white/10 pb-4">
                Databases
              </h3>
              <div>
                <SkillBar name="MySQL" percentage={95} />
                <SkillBar name="PostgreSQL" percentage={85} />
              </div>
            </motion.div>

            {/* Engineering & Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-[#151B29] border border-slate-200 dark:border-white/5 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-violet-500/20 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-white/10 pb-4">
                Engineering & Collaboration
              </h3>
              <div>
                <SkillBar name="Leadership" percentage={95} />
                <SkillBar name="Team Collaboration" percentage={88} />
                <SkillBar name="Technical Communication" percentage={80} />
                <SkillBar name="Problem Solving" percentage={90} />
                <SkillBar name="Rapid Learning" percentage={92} />
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills
