import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Shunyatax GlobalFintech Solutions LLP",
    duration: "Jan 2025 - Present (Probation)",
    tags: ["React", "Django", "REST APIs", "Python", "SQL"],
    description: [
      "Designed and developed highly responsive React frontend architectures integrated with robust Python/Django backend systems.",
      "Consumed REST APIs and optimized endpoint structures, reducing request latency by up to 25%.",
      "Created modular, reusable UI components following rigorous atomic design principles.",
      "Actively debugged and streamlined data-flows across full-stack applications, increasing reliability."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Hukumsa IT solution",
    duration: "Oct 2025 - Dec 2025",
    tags: ["Software Engineering", "VCS Git", "APIs", "System Debugging"],
    description: [
      "Selected for an intensive internship program focusing on modern software engineering lifecycle practices.",
      "Collaborated with developers to review codebase architectures and debug critical user paths.",
      "Documented API integration paths and configured Git version control workflows for product teams."
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="experience">
      {/* Background space flares */}
      <div className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[550px] h-[550px] bg-brand-secondary/8 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-slow" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Title Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-black tracking-wider uppercase font-outfit text-brand-secondary bg-brand-secondary/10 px-4 py-1.5 rounded-full border border-brand-secondary/30 backdrop-blur-sm shadow-sm flex items-center justify-center gap-1.5 mx-auto w-fit">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Professional Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-outfit text-white mb-4 leading-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary drop-shadow-md">Experience</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Circuit Container */}
        <div className="relative border-l-2 border-dashed border-white/10 ml-4 md:ml-32 space-y-16">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Pulsing Timeline Anchor Checkpoint */}
              <span className="absolute -left-[11px] top-2 flex h-5 w-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-secondary shadow-[0_0_12px_rgba(6,182,212,0.9)]"></span>
              </span>

              {/* Floating Card Entrance */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ x: 6 }}
                className="relative p-6 md:p-8 rounded-3xl glass-panel glow-border border-white/10 hover:bg-white/5 transition-all duration-300 shadow-xl overflow-hidden group"
              >
                {/* Horizontal timeline connect bridge (wide screens only) */}
                <div className="hidden md:block absolute top-[28px] -left-12 w-12 h-[2px] bg-gradient-to-r from-white/10 to-transparent -z-10" />

                {/* Header detail grids */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold font-outfit text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary transition-all">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold font-outfit text-brand-secondary mt-1 inline-block">
                      {exp.company}
                    </span>
                  </div>
                  <span className="text-xs font-bold font-outfit text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10 w-fit">
                    {exp.duration}
                  </span>
                </div>

                {/* Bullets details list */}
                <ul className="space-y-3 mb-6">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-brand-primary font-bold text-sm mt-0.5">•</span>
                      <span className="text-slate-300 font-inter text-sm leading-relaxed">
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 text-[10px] font-bold font-outfit tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

