import { useEffect } from "react";
import { initScrollAnimations } from "../animations/scrollAnimations";
import Education from "../components/Education/Education";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const EducationPage = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  const coursework = [
    { name: "Algorithms & DS", focus: "Sorting, Graph Searches, Complexity Ratios (Big O)" },
    { name: "Database Design", focus: "Normalization rules, SQL Query optimization, Indexing" },
    { name: "Web Architectures", focus: "REST APIs, MVC Design Patterns, Atomic Structures" },
    { name: "Operating Systems", focus: "Process scheduling, thread sync, session virtual blocks" }
  ];

  return (
    <div className="space-y-24 py-10">
      {/* SECTION 1: Academic Hero */}
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
              ACADEMICS
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black font-outfit text-white mb-6 leading-[0.95]"
          >
            Learning & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow-secondary">Growth</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 font-inter text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            Formal IT studies, high school PCM and computer sciences, and continuous online technical certifications.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: University & High School Timelines */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <Education />
        </div>
      </section>

      {/* SECTION 3: Key Coursework Details */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-widest text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full uppercase border border-brand-secondary/30">
              Curriculum
            </span>
            <h3 className="text-3xl font-bold font-outfit text-white mt-4">Academic Coursework</h3>
            <div className="w-12 h-0.5 bg-brand-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coursework.map((course) => (
              <div key={course.name} className="p-6 rounded-3xl glass-panel border-white/10 group hover:border-white/20 transition-all duration-300">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-primary">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-base font-bold font-outfit text-white mb-2 group-hover:text-brand-secondary transition-colors">
                  {course.name}
                </h4>
                <p className="text-slate-400 font-inter text-[11px] leading-relaxed">
                  {course.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Continuous Growth Agenda */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-brand-secondary/5 blur-3xl rounded-full -z-10 animate-pulse-slow" />
          
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center text-brand-secondary">
              <svg className="w-16 h-16 md:w-24 md:h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="md:col-span-8">
              <span className="text-[10px] font-black tracking-widest text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full uppercase border border-brand-secondary/30">
                Study Log
              </span>
              <h3 className="text-3xl font-bold font-outfit text-white mt-4 mb-4">Continuous Learning</h3>
              <p className="text-slate-300 font-inter text-sm leading-relaxed mb-6">
                To bridge B.Tech IT principles with cutting edge platforms, I am currently deep diving into Three.js shader materials (GLSL), secure session JWT filters, and advanced state management configurations in React 19.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Three.js/Fiber", "React 19 Hooks", "Secure JWT Gates"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-[9px] font-bold font-outfit tracking-wider bg-white/5 border border-white/10 rounded-full text-slate-400 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto glass-panel p-10 rounded-3xl border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/3 to-brand-secondary/3 -z-10 animate-pulse-slow" />
          <h3 className="text-2xl md:text-3xl font-bold font-outfit text-white mb-2">Want to consult my transcripts?</h3>
          <p className="text-slate-300 font-inter text-xs md:text-sm mb-6 max-w-sm mx-auto">Get in touch to request complete academic transcripts, verification IDs, or course syllabi.</p>
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

export default EducationPage;
