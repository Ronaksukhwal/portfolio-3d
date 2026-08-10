import { useEffect } from "react";
import { initScrollAnimations } from "../animations/scrollAnimations";
import Experience from "../components/Experience/Experience";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  const metrics = [
    { value: "25%", label: "API Query Latency Cuts", desc: "Optimized Django backend query pipelines to streamline response packages." },
    { value: "100%", label: "Atomic Component Structures", desc: "Crafted modular reusable frontend components following rigorous design constraints." },
    { value: "0", label: "Breaking Regressions Released", desc: "Utilized strict type testing and branch reviews prior to production releases." }
  ];

  return (
    <div className="space-y-24 py-10">
      {/* SECTION 1: Experience Hero */}
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
            <span className="text-xs font-black tracking-widest uppercase font-outfit text-brand-primary bg-brand-primary/10 px-4 py-1.5 rounded-full border border-brand-primary/30 backdrop-blur-sm flex items-center justify-center gap-1.5 w-fit mx-auto">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Professional Journey
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black font-outfit text-white mb-6 leading-[0.95]"
          >
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow-primary">Experience</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 font-inter text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            A track record of shipping full-stack improvements, styling modular frontends, and resolving database bottlenecks.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: Timelines Section */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <Experience />
        </div>
      </section>

      {/* SECTION 3: Key Competencies */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-widest text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full uppercase border border-brand-secondary/30">
              Expertise
            </span>
            <h3 className="text-3xl font-bold font-outfit text-white mt-4">Key Competencies</h3>
            <div className="w-12 h-0.5 bg-brand-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl glass-panel glow-border border-white/10 group transition-all duration-300">
              <h4 className="text-lg font-bold font-outfit text-white mb-2 group-hover:text-brand-secondary transition-colors">API Architecture</h4>
              <p className="text-slate-300 font-inter text-xs leading-relaxed">
                Structuring clean REST endpoints, handling nested JSON payloads, integrating authentication gates, and optimizing request cycles.
              </p>
            </div>
            <div className="p-6 rounded-3xl glass-panel glow-border border-white/10 group transition-all duration-300">
              <h4 className="text-lg font-bold font-outfit text-white mb-2 group-hover:text-brand-secondary transition-colors">Responsive Systems</h4>
              <p className="text-slate-300 font-inter text-xs leading-relaxed">
                Building highly modular, fluid UI elements that adapt smoothly across mobile viewports, tablet screens, and desktop displays.
              </p>
            </div>
            <div className="p-6 rounded-3xl glass-panel glow-border border-white/10 group transition-all duration-300">
              <h4 className="text-lg font-bold font-outfit text-white mb-2 group-hover:text-brand-secondary transition-colors">Code Debugging</h4>
              <p className="text-slate-300 font-inter text-xs leading-relaxed">
                Profiling component re-renders, debugging database session locks, resolving asynchronous race conditions, and clearing bundler lints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Deliverables & Metrics */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full uppercase border border-brand-primary/30">
              Achievements
            </span>
            <h3 className="text-3xl font-bold font-outfit text-white mt-4">Key Deliverables</h3>
            <div className="w-12 h-0.5 bg-brand-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="p-8 rounded-3xl glass-panel border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-transparent opacity-30 -z-10" />
                <div>
                  <h4 className="text-4xl md:text-5xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary mb-4 drop-shadow-md">
                    {metric.value}
                  </h4>
                  <h5 className="text-white font-bold font-outfit text-sm mb-3">
                    {metric.label}
                  </h5>
                  <p className="text-slate-400 font-inter text-xs leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4.5: Tooling & Environments (Fills Empty Space) */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto glass-panel p-8 rounded-3xl border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-brand-secondary/5 blur-2xl rounded-full -z-10" />
          <span className="text-[10px] font-black tracking-widest text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full uppercase border border-brand-secondary/30">
            Workspace Tooling
          </span>
          <h3 className="text-2xl font-bold font-outfit text-white mt-4 mb-4">Operations Stack</h3>
          <p className="text-slate-300 font-inter text-xs leading-relaxed mb-6">
            For streamlined operational workflows, I utilize Git and GitHub for version control, Postman for rigorous API payload testing, Docker containers for standard deployment setups, and MySQL Workbench/Oracle Developer for managing relational database schemas.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Git/GitHub", "Postman API", "Docker", "MySQL Workbench", "Oracle SQL Developer"].map((tool) => (
              <span key={tool} className="px-2.5 py-1 text-[9px] font-bold font-outfit tracking-wider bg-white/5 border border-white/10 rounded-full text-slate-400 uppercase">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Operational References Gateway */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto glass-panel p-10 rounded-3xl border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/3 to-brand-secondary/3 -z-10 animate-pulse-slow" />
          <h3 className="text-2xl md:text-3xl font-bold font-outfit text-white mb-2">Want to consult my reference letters?</h3>
          <p className="text-slate-300 font-inter text-xs md:text-sm mb-6 max-w-sm mx-auto">Reference documents and internship certification letters from corporate executives are available upon request.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 py-3.5 px-8 rounded-full font-bold font-outfit text-xs text-white tracking-widest uppercase bg-gradient-to-r from-brand-primary to-brand-secondary shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_35px_rgba(124,58,237,0.5)] transition-all transform hover:scale-[1.03] active:scale-[0.98] mx-auto w-fit"
          >
            Request References
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
