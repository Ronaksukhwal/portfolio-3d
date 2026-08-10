import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#030014]/90 backdrop-blur-xl py-14 px-6 overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand/IT Column */}
          <div className="md:col-span-2 space-y-4">
            <Link 
              to="/" 
              className="text-2xl font-black font-outfit tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary inline-block transition-transform hover:scale-105 active:scale-95"
              onClick={handleScrollToTop}
            >
              R.
            </Link>
            <p className="text-slate-400 font-inter text-xs leading-relaxed max-w-sm">
              Sculpting interactive web frameworks using React & Django. Focused on bridging performance with exceptional 3D visual graphics and micro-interactions.
            </p>
            <div className="text-[10px] font-black font-outfit text-brand-secondary uppercase tracking-widest">
              B.Tech IT Graduate • 2026
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold font-outfit text-sm tracking-wider uppercase">Navigation</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "About", path: "/about" },
                { label: "Experience", path: "/experience" },
                { label: "Education", path: "/education" },
                { label: "Skills", path: "/skills" },
                { label: "Projects", path: "/projects" },
                { label: "Contact", path: "/contact" }
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-slate-400 hover:text-white transition-colors text-xs font-inter font-medium w-fit"
                  onClick={handleScrollToTop}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials / Direct Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold font-outfit text-sm tracking-wider uppercase">Connect</h4>
            <div className="flex flex-col gap-2.5">
              <a 
                href="mailto:ronaksukhwal5@gmail.com" 
                className="text-slate-400 hover:text-brand-secondary transition-colors text-xs font-inter font-medium w-fit"
              >
                Email Address ✉️
              </a>
              <a 
                href="https://www.linkedin.com/in/ronak-sukhwal-730b87287" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-brand-secondary transition-colors text-xs font-inter font-medium w-fit"
              >
                LinkedIn Profile 💼
              </a>
              <a 
                href="https://github.com/Ronaksukhwal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-brand-secondary transition-colors text-xs font-inter font-medium w-fit"
              >
                GitHub Repositories 💻
              </a>
            </div>
          </div>
        </div>

        {/* Divider with high-fidelity glow */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative mb-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-brand-primary to-brand-secondary blur-[1px]" />
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-500 font-outfit tracking-wider uppercase">
            © {currentYear} Ronak Sukhwal. All Rights Reserved.
          </p>

          {/* Floating Back to Top */}
          <motion.button
            onClick={handleScrollToTop}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 text-[10px] font-bold font-outfit tracking-wider uppercase text-slate-400 hover:text-white transition-all cursor-pointer border border-white/5 bg-white/3 px-4 py-2 rounded-full backdrop-blur-md shadow-sm"
          >
            Back to Top ⏏
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
