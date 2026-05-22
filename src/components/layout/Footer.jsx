const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer className="w-full bg-white dark:bg-[#090D16] border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-sm font-medium text-slate-500 dark:text-slate-400 text-center sm:text-left">
          &copy; {year} Jeevan M. All rights reserved.
        </div>
        
        <div className="text-sm font-medium text-slate-400 dark:text-slate-500 text-center sm:text-right flex items-center gap-1">
          Built with <span className="text-violet-500 font-semibold">React</span> & <span className="text-cyan-500 font-semibold">Tailwind CSS</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
