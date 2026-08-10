import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 2. Add dynamic header styling on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", id: "about", path: "/about" },
    { label: "Experience", id: "experience", path: "/experience" },
    { label: "Education", id: "education", path: "/education" },
    { label: "Skills", id: "skills", path: "/skills" },
    { label: "Projects", id: "projects", path: "/projects" },
    { label: "Contact", id: "contact", path: "/contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* FLOATING GLASSMORPHIC CAPSULE DOCK */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-4xl z-50 rounded-[2rem] border bg-slate-950/40 backdrop-blur-xl px-6 md:px-8 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 ${
          scrolled 
            ? "border-brand-primary/25 shadow-[0_15px_30px_rgba(124,58,237,0.18)] bg-slate-950/75" 
            : "border-white/10"
        } ${isOpen ? "rounded-[1.8rem] bg-slate-950/90 border-brand-primary/30" : ""}`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Logo with magnetic scale hover and green active dot */}
          <Link 
            to="/" 
            className="text-lg md:text-xl font-black font-outfit tracking-tight text-white flex items-center gap-2 group transition-transform hover:scale-[1.01]"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary font-black">
              Ronak
            </span>
            <span className="text-white/60 font-medium text-xs hidden sm:inline transition-colors group-hover:text-white">
              Sukhwal
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse" />
          </Link>

                  {/* Navigation Links - Desktop Centered capsule buttons */}
          <div className="hidden md:flex gap-1 md:gap-3 items-center">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <div key={item.id} className="relative px-2 py-1.5 md:px-3">
                  <Link
                    to={item.path}
                    className={`text-xs md:text-sm font-bold tracking-wide font-outfit transition-all duration-300 relative cursor-pointer ${
                      isActive 
                        ? "text-white text-glow-secondary" 
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Active highlight slider capsule under active link */}
                  {isActive && (
                    <motion.span 
                      layoutId="activePill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border border-brand-primary/20 shadow-[0_0_12px_rgba(124,58,237,0.08)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Underline highlighter */}
                  {isActive && (
                    <motion.span
                      layoutId="activeLine"
                      className="absolute bottom-[-6px] left-[20%] right-[20%] h-[2.5px] rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary shadow-[0_1px_8px_rgba(6,182,212,0.9)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}

            {/* Desktop GitHub Follow button */}
            <motion.a
              href="https://github.com/Ronaksukhwal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="ml-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-xs font-black tracking-wider uppercase text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Follow
            </motion.a>
          </div>

          {/* Hamburger Menu Button - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden text-white hover:text-brand-secondary transition-colors p-2 z-50 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg className="h-5 w-5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Animated Mobile Drawer (Inside Capsule) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 12 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="md:hidden overflow-hidden border-t border-white/10 flex flex-col gap-1.5 pt-3 pb-1"
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-xs font-bold tracking-wide font-outfit px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? "text-white bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 shadow-[inset_0_0_8px_rgba(124,58,237,0.1)]" 
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile GitHub Follow button */}
              <a
                href="https://github.com/Ronaksukhwal"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 text-xs font-bold tracking-wide font-outfit px-4 py-2.5 rounded-xl text-white bg-gradient-to-r from-brand-primary to-brand-secondary shadow-[0_5px_15px_rgba(124,58,237,0.2)] hover:shadow-[0_5px_25px_rgba(124,58,237,0.4)] transition-all cursor-pointer text-center mt-2"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Follow on GitHub
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;