import { useEffect } from "react";
import { initScrollAnimations } from "../animations/scrollAnimations";
import Projects from "../components/Projects/Projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  const additionalRepos = [
    { title: "React Boilerplate", desc: "Custom configuration of Vite + Tailwind CSS v4 + Framer Motion ready for fast scaffolding." },
    { title: "Django API Starter", desc: "Dockerized boilerplate with pre-configured JWT authentication, MySQL drivers, and REST models." },
    { title: "Python Utility Scripts", desc: "Automation scripts for scraping, text classification, and API bulk verification pipelines." },
    { title: "Oracle normalizer", desc: "Set of clean SQL queries and normalization diagnostics to profile table relations." }
  ];

  const lifecycle = [
    { step: "01", name: "Ideation & Specs", desc: "Defining structural system parameters, charting REST data shapes, selecting technical modules, and planning database relationships." },
    { step: "02", name: "System Architecture", desc: "Configuring atomic frontend folders, database schemas, API serializer layers, and standardizing Git workflows." },
    { step: "03", name: "Development Sprint", desc: "Writing clean modular components, optimizing rendering, and coding backend query pipelines." },
    { step: "04", name: "Rigorous Testing", desc: "Unit testing, routing path validation, responsiveness diagnostics, and clearing bundler lints." },
    { step: "05", name: "Deployment & Stats", desc: "Building optimized assets, setting up local hosting diagnostics, and tracking response speeds." }
  ];

  return (
    <div className="space-y-24 py-10">
      {/* SECTION 1: Selected Work Hero */}
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
            <span className="text-xs font-black tracking-widest uppercase font-outfit text-brand-primary bg-brand-primary/10 px-4 py-1.5 rounded-full border border-brand-primary/30 backdrop-blur-sm">
              PORTFOLIO
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black font-outfit text-white mb-6 leading-[0.95]"
          >
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow-secondary">Projects</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 font-inter text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            Selective collection of voice systems, ledger apps, and authentication gates next to live 3D models.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: Featured Work Canvas */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <Projects />
        </div>
      </section>

      {/* SECTION 3: Open-Source Contributions & Archives */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-widest text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full uppercase border border-brand-secondary/30">
              Utilities
            </span>
            <h3 className="text-3xl font-bold font-outfit text-white mt-4">Open Source Contributions</h3>
            <div className="w-12 h-0.5 bg-brand-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalRepos.map((repo) => (
              <div key={repo.title} className="p-6 rounded-3xl glass-panel border-white/10 group hover:border-white/20 transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-secondary">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-base font-bold font-outfit text-white mb-2 group-hover:text-brand-secondary transition-colors">
                  {repo.title}
                </h4>
                <p className="text-slate-400 font-inter text-[11px] leading-relaxed">
                  {repo.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Project Lifecycle & Workflow */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full uppercase border border-brand-primary/30">
              Workflow
            </span>
            <h3 className="text-3xl font-bold font-outfit text-white mt-4">Engineering Lifecycle</h3>
            <div className="w-12 h-0.5 bg-brand-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="relative border-l border-dashed border-white/10 ml-4 md:ml-20 space-y-10">
            {lifecycle.map((step, idx) => (
              <div key={step.name} className="relative pl-8">
                {/* Node counter badge */}
                <span className="absolute -left-[14px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-brand-secondary text-[10px] font-black text-white shadow-md">
                  {step.step}
                </span>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl glass-panel border-white/10"
                >
                  <h4 className="text-base font-bold font-outfit text-white mb-2">
                    {step.name}
                  </h4>
                  <p className="text-slate-400 font-inter text-xs leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Collaboration CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto glass-panel p-10 rounded-3xl border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/3 to-brand-secondary/3 -z-10 animate-pulse-slow" />
          <h3 className="text-2xl md:text-3xl font-bold font-outfit text-white mb-2">Want custom case study sheets?</h3>
          <p className="text-slate-300 font-inter text-xs md:text-sm mb-6 max-w-sm mx-auto">Get in touch to consult complete system schemas, flow diagrams, or detailed architecture sheets.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 py-3.5 px-8 rounded-full font-bold font-outfit text-xs text-white tracking-widest uppercase bg-gradient-to-r from-brand-primary to-brand-secondary shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_35px_rgba(124,58,237,0.5)] transition-all transform hover:scale-[1.03] active:scale-[0.98] mx-auto w-fit"
          >
            Contact Me
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
