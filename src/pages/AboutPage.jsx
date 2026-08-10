import { useEffect, useState } from "react";
import { initScrollAnimations } from "../animations/scrollAnimations";
import About from "../components/About/About";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutPage = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  const stats = [
    { label: "B.Tech IT Degree", value: "Completed" },
    { label: "Completed Credentials", value: "10+ Certified" },
    { label: "API Optimizations", value: "25% Latency Cut" },
    { label: "Reusable Components", value: "100% Atomic" }
  ];

  return (
    <div className="space-y-24 py-10">
      {/* SECTION 1: Academic Header & Hero */}
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
              Creative Tech Specialist
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black font-outfit text-white mb-6 leading-[0.95]"
          >
            Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow-secondary">Am</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 font-inter text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12"
          >
            Detailing my structural IT background, development philosophy, and forward goals. Let's explore the milestones.
          </motion.p>

          {/* Quick Metrics stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="p-5 rounded-2xl glass-panel border-white/5 relative overflow-hidden group hover:border-white/15 transition-all duration-300"
              >
                <h4 className="text-xl md:text-2xl font-black font-outfit text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary transition-all">
                  {stat.value}
                </h4>
                <p className="text-[10px] font-bold font-outfit tracking-wider uppercase text-slate-400 mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 & SECTION 3: Visual Core (Video) & Core Bio */}
      <section className="py-6">
        <About isSubpage={true} />
      </section>

      {/* SECTION 4: My Core Philosophy */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-widest text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full uppercase border border-brand-secondary/30">
              Ideals
            </span>
            <h3 className="text-3xl font-bold font-outfit text-white mt-4">Core Philosophy</h3>
            <div className="w-12 h-0.5 bg-brand-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl glass-panel glow-border border-white/10 group transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-30 -z-10" />
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center mb-6 text-brand-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold font-outfit text-white mb-2 group-hover:text-brand-secondary transition-colors">Clean Code</h4>
              <p className="text-slate-300 font-inter text-xs leading-relaxed">
                Writing semantic, self-documenting code. Standardizing component layers, preventing runtime regressions, and maintaining clean versioning histories.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-panel glow-border border-white/10 group transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-transparent opacity-30 -z-10" />
              <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 border border-brand-secondary/30 flex items-center justify-center mb-6 text-brand-secondary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold font-outfit text-white mb-2 group-hover:text-brand-secondary transition-colors">Fluid UX Details</h4>
              <p className="text-slate-300 font-inter text-xs leading-relaxed">
                Detailing responsive micro-interactions. Creating magnetic button layouts, 3D tilt structures, and custom spring cursors that encourage tactile exploration.
              </p>
            </div>

            <div className="p-8 rounded-3xl glass-panel glow-border border-white/10 group transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-30 -z-10" />
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6 text-blue-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold font-outfit text-white mb-2 group-hover:text-brand-secondary transition-colors">Scalable Performance</h4>
              <p className="text-slate-300 font-inter text-xs leading-relaxed">
                Reducing visual re-renders, profiling Django query databases, compressing texture meshes, and implementing smart lazy-loading structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.5: Domains of Interest (Fills Empty Space) */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full uppercase border border-brand-primary/30">
              Focus Fields
            </span>
            <h3 className="text-3xl font-bold font-outfit text-white mt-4">Domains of Interest</h3>
            <div className="w-12 h-0.5 bg-brand-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Cybersecurity", desc: "Understanding encryption gates, network security, and secure API auth keys." },
              { title: "Open Source", desc: "Contributing to developer boilerplates and tooling utilities." },
              { title: "System Performance", desc: "Optimizing database schemas and reducing web latency ratios." },
              { title: "Spatial Web (3D)", desc: "Integrating WebGL/Three.js assets into responsive client interfaces." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl glass-panel border-white/5 relative overflow-hidden group hover:border-white/10 transition-all duration-300">
                <h4 className="text-sm font-bold font-outfit text-white mb-2 group-hover:text-brand-secondary transition-colors">{item.title}</h4>
                <p className="text-slate-400 font-inter text-[10px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Future Roadmaps */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-primary/5 blur-3xl rounded-full -z-10" />
          
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="text-[10px] font-black tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full uppercase border border-brand-primary/30">
                Forward Horizon
              </span>
              <h3 className="text-3xl font-bold font-outfit text-white mt-4 mb-4">Future Roadmaps</h3>
              <p className="text-slate-300 font-inter text-sm leading-relaxed mb-6">
                I am actively expanding my studies into advanced graphics shaders using GLSL, robust Web3 blockchain structures, and artificial intelligence model pipelines to build intelligent spatial visual web applications.
              </p>
              <div className="flex flex-wrap gap-2">
                {["WebGL/GLSL", "Next.js 15", "Transformers", "State Management"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-[9px] font-bold font-outfit tracking-wider bg-white/5 border border-white/10 rounded-full text-slate-400 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-4 flex justify-center text-brand-secondary">
              <svg className="w-16 h-16 md:w-24 md:h-24 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Gateway */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto glass-panel p-10 rounded-3xl border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/3 to-brand-secondary/3 -z-10 animate-pulse-slow" />
          <h3 className="text-2xl md:text-3xl font-bold font-outfit text-white mb-2">Want to build something unique?</h3>
          <p className="text-slate-300 font-inter text-xs md:text-sm mb-6 max-w-sm mx-auto">Let's connect and construct a beautiful, performance-driven 3D web platform.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 py-3.5 px-8 rounded-full font-bold font-outfit text-xs text-white tracking-widest uppercase bg-gradient-to-r from-brand-primary to-brand-secondary shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_35px_rgba(124,58,237,0.5)] transition-all transform hover:scale-[1.03] active:scale-[0.98] mx-auto w-fit"
          >
            Reach Out
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
