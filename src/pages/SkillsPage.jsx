import { useEffect } from "react";
import { initScrollAnimations } from "../animations/scrollAnimations";
import Skills from "../components/Skills/Skills";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SkillsPage = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  const proficiencies = [
    { name: "Python Programming", level: 90, color: "from-blue-500 to-indigo-600" },
    { name: "React (Vite/JSX) UI", level: 85, color: "from-cyan-400 to-blue-500" },
    { name: "Django REST Backend", level: 88, color: "from-green-400 to-emerald-600" },
    { name: "SQL (MySQL/Oracle) DB", level: 82, color: "from-indigo-500 to-purple-600" },
    { name: "JavaScript Engineering", level: 85, color: "from-yellow-400 to-amber-500" }
  ];

  return (
    <div className="space-y-24 py-10">
      {/* SECTION 1: Skills Hero */}
      <section className="py-16 text-center px-6 relative overflow-hidden">
        {/* Glow flare */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="text-xs font-black tracking-widest uppercase font-outfit text-brand-secondary bg-brand-secondary/10 px-4 py-1.5 rounded-full border border-brand-secondary/30 backdrop-blur-sm">
              TECHNOLOGY
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black font-outfit text-white mb-6 leading-[0.95]"
          >
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow-secondary">Tools</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 font-inter text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            Full engineering stack including frontend UI layers, backend MVC frameworks, databases, and versioning pipelines.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: Advanced Tech Arsenal */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <Skills />
        </div>
      </section>

      {/* SECTION 3: Competency Level Meters */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full uppercase border border-brand-primary/30">
              Proficiencies
            </span>
            <h3 className="text-3xl font-bold font-outfit text-white mt-4">Competency Levels</h3>
            <div className="w-12 h-0.5 bg-brand-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="p-8 rounded-3xl glass-panel border-white/10 space-y-6 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/2 to-transparent -z-10" />

            {proficiencies.map((item, i) => (
              <div key={item.name} className="space-y-2">
                <div className="flex justify-between text-xs font-bold font-outfit">
                  <span className="text-white">{item.name}</span>
                  <span className="text-brand-secondary">{item.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Architecture Pillars */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-widest text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full uppercase border border-brand-secondary/30">
              Pillars
            </span>
            <h3 className="text-3xl font-bold font-outfit text-white mt-4">Architecture Focus</h3>
            <div className="w-12 h-0.5 bg-brand-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl glass-panel glow-border border-white/10 group transition-all duration-300">
              <h4 className="text-base font-bold font-outfit text-white mb-2 group-hover:text-brand-secondary transition-colors">RESTful Payload Design</h4>
              <p className="text-slate-400 font-inter text-[11px] leading-relaxed">
                Structuring neat, serialized REST endpoints, handling structured JWT locks, nesting datasets, and keeping request payloads optimized.
              </p>
            </div>
            <div className="p-6 rounded-3xl glass-panel glow-border border-white/10 group transition-all duration-300">
              <h4 className="text-base font-bold font-outfit text-white mb-2 group-hover:text-brand-secondary transition-colors">Database Normalization</h4>
              <p className="text-slate-400 font-inter text-[11px] leading-relaxed">
                Designing structured schemas with foreign constraints, indexing key lookup columns, normalization, and preventing session thread blocks.
              </p>
            </div>
            <div className="p-6 rounded-3xl glass-panel glow-border border-white/10 group transition-all duration-300">
              <h4 className="text-base font-bold font-outfit text-white mb-2 group-hover:text-brand-secondary transition-colors">Atomic UI Layouts</h4>
              <p className="text-slate-400 font-inter text-[11px] leading-relaxed">
                Configuring reusable, standalone component trees that encapsulate styling states, preventing large re-render operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.5: Coding Standards (Fills Empty Space) */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto glass-panel p-8 rounded-3xl border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-primary/5 blur-2xl rounded-full -z-10" />
          <span className="text-[10px] font-black tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full uppercase border border-brand-primary/30">
            Engineering Code
          </span>
          <h3 className="text-2xl font-bold font-outfit text-white mt-4 mb-4">Coding Standards</h3>
          <p className="text-slate-300 font-inter text-xs leading-relaxed mb-6">
            I write clean, maintainable code following PEP 8 guidelines for Python/Django and ESLint rules for JavaScript/React, maintaining clean separation of concerns, high reusability, and descriptive, clean Git commits.
          </p>
          <div className="flex flex-wrap gap-2">
            {["PEP 8 (Python)", "ESLint (React)", "SOLID Design", "Clean Separation"].map((standard) => (
              <span key={standard} className="px-2.5 py-1 text-[9px] font-bold font-outfit tracking-wider bg-white/5 border border-white/10 rounded-full text-slate-400 uppercase">
                {standard}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Code Consultation CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto glass-panel p-10 rounded-3xl border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/3 to-brand-secondary/3 -z-10 animate-pulse-slow" />
          <h3 className="text-2xl md:text-3xl font-bold font-outfit text-white mb-2">Want to consult my code repositories?</h3>
          <p className="text-slate-300 font-inter text-xs md:text-sm mb-6 max-w-sm mx-auto">Get in touch to check out specific repos, code reviews, and sample architectures.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 py-3.5 px-8 rounded-full font-bold font-outfit text-xs text-white tracking-widest uppercase bg-gradient-to-r from-brand-primary to-brand-secondary shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_35px_rgba(124,58,237,0.5)] transition-all transform hover:scale-[1.03] active:scale-[0.98] mx-auto w-fit"
          >
            Connect
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
