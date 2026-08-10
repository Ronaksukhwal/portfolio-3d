import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const projectsData = [
  {
    title: "Sukhwal Auto Services",
    description: "Developed and shipped a live specialized bike workshop portal for Hero Honda & Hero MotoCorp motorcycles in Bhilwara, featuring doorstep pickup/drop scheduling, automated online order bookings, and engine tuning services.",
    tags: ["React", "Vite", "Tailwind CSS", "Live Portal"],
    color: "from-orange-500/30 via-red-500/20 to-transparent",
    link: "https://sukhwalautoservice.in"
  },
  {
    title: "Jarvis AI Assistant",
    description: "Built an advanced voice-activated personal assistant in Python that executes system commands, performs real-time queries, and automates daily tasks using NLP.",
    tags: ["Python", "Voice AI", "NLP", "SpeechRec"],
    color: "from-blue-500/30 via-indigo-500/20 to-transparent",
    link: "https://github.com/Ronaksukhwal"
  },
  {
    title: "P2P Payment Application",
    description: "Engineered a secure peer-to-peer mobile payment app featuring direct ledger transactions, multi-party authentication, and real-time wallet sync (Frontend Only).",
    tags: ["React Native", "Expo", "Frontend Only"],
    color: "from-cyan-500/30 via-brand-primary/20 to-transparent",
    link: "https://p2ppaymentwebapp.vercel.app",
    isFrontendOnly: true
  },
  {
    title: "Secure Authentication Site",
    description: "Developed a bulletproof full-stack user authentication portal with session locks, encrypted credentials storage, registration gates, and bootstrap grids.",
    tags: ["Django", "Bootstrap", "MySQL", "Security"],
    color: "from-purple-500/30 via-pink-500/20 to-transparent",
    link: "https://github.com/Ronaksukhwal"
  }
];

const Projects = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => console.log("Video play interrupted:", err));
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      {/* Dynamic ambient lights */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-slow" />
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-brand-primary/8 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-black tracking-wider uppercase font-outfit text-brand-secondary bg-brand-secondary/10 px-4 py-1.5 rounded-full border border-brand-secondary/30 backdrop-blur-sm shadow-sm flex items-center justify-center gap-1.5 w-fit">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-outfit text-white mb-4 leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary drop-shadow-md">Work</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full" />
        </motion.div>

        {/* Layout: Split Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* LEFT: Project Cards */}
          <div className="lg:col-span-7 space-y-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                className="relative rounded-3xl p-6 md:p-8 glass-panel glow-border border-white/10 hover:bg-white/5 transition-all duration-300 shadow-xl overflow-hidden group flex flex-col justify-between cursor-pointer"
              >
                {/* Embedded dynamic corner gradient badge */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${project.color} blur-2xl rounded-full opacity-60 group-hover:scale-110 transition-transform duration-500`} />

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold font-outfit text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-secondary transition-all">
                          {project.title}
                        </h3>
                        {project.isFrontendOnly && (
                          <span className="text-[8px] font-black tracking-widest uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 px-2 py-0.5 rounded-md shadow-[0_0_10px_rgba(6,182,212,0.15)] select-none">
                            Frontend Only
                          </span>
                        )}
                      </div>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>

                    {/* Desc */}
                    <p className="text-slate-300 font-inter text-sm leading-relaxed mb-6 max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Badges footer */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 text-[9px] font-bold font-outfit tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Breathtaking Featured Work Video Loop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 h-[350px] md:h-[450px] relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 z-10 w-full h-full rounded-3xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm bg-black/40">
              <video
                ref={videoRef}
                src="/featured_work_bg.mp4"
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ pointerEvents: "none" }}
              />
              {/* Blend overlay mask to hide the video edges and make it look like a background animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-[#030014]/60 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;