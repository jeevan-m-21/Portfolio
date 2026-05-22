import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const contactLinks = [
    {
      name: "Email",
      value: "jeevanjeeva0304@gmail.com", // Placeholder
      icon: <FaEnvelope className="w-6 h-6" />,
      href: "mailto:jeevanjeeva0304@gmail.com",
      color: "from-blue-500/20 to-cyan-500/20",
      textColor: "text-cyan-500",
      hoverBorder: "hover:border-cyan-500/30"
    },
    {
      name: "LinkedIn",
      value: "Connect professionally",
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/jeevan-m-294aa8311/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B270ykcxWSxyLkT81XUZZ0A%3D%3D",
      color: "from-blue-600/20 to-blue-400/20",
      textColor: "text-blue-500",
      hoverBorder: "hover:border-blue-500/30"
    },
    {
      name: "GitHub",
      value: "Explore my code",
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/jeevan-m-21",
      color: "from-slate-600/20 to-slate-400/20",
      textColor: "text-slate-700 dark:text-slate-300",
      hoverBorder: "hover:border-slate-500/30"
    },
    {
      name: "Resume",
      value: "Download PDF",
      icon: <FaFileDownload className="w-6 h-6" />,
      href: "/resume.pdf",
      download: "Jeevan_Resume.pdf",
      color: "from-violet-600/20 to-purple-500/20",
      textColor: "text-violet-500",
      hoverBorder: "hover:border-violet-500/30"
    }
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-24 bg-white dark:bg-[#0B0F19] transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 dark:bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={itemVariants}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-violet-600 dark:text-violet-400 font-semibold tracking-widest uppercase text-[13px] mb-4">
            CONTACT
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-8">
            I'm currently open for new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-medium">
            <FaMapMarkerAlt className="text-violet-500" />
            Bangalore, India
          </div>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={link.href}
              download={link.download}
              target={link.name !== "Email" && !link.download ? "_blank" : undefined}
              rel="noreferrer"
              className={`group flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-[#151B29] border border-slate-200 dark:border-white/5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${link.hoverBorder}`}
            >
              <div className={`w-14 h-14 mb-5 rounded-xl flex items-center justify-center bg-gradient-to-tr ${link.color} ${link.textColor} group-hover:scale-110 transition-transform duration-300`}>
                {link.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {link.name}
              </h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 text-center">
                {link.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
