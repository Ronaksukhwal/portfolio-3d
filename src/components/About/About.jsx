import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const About = ({ isSubpage = false }) => {
  const [showBrief, setShowBrief] = useState(false);
  const videoRef = useRef(null);
  const videoSrc = isSubpage ? "/hacker_bg.mp4" : "/home_about_bg.mp4";

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
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Dynamic background lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-brand-primary/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-slow" />
      <div className="absolute right-10 bottom-10 w-[450px] h-[450px] bg-brand-secondary/8 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-black tracking-wider uppercase font-outfit text-brand-primary bg-brand-primary/10 px-4 py-1.5 rounded-full border border-brand-primary/30 backdrop-blur-sm shadow-sm flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Who I Am
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-outfit text-white mb-4 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary drop-shadow-md">Me</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Core Layout Split */}
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* LEFT: Text & Interactive details card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <div 
              onClick={() => setShowBrief(!showBrief)}
              className="p-8 md:p-10 rounded-3xl glass-panel glow-border-primary cursor-pointer relative overflow-hidden transition-all duration-500 shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-40 -z-10" />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-brand-primary/40 shadow-xl shrink-0 bg-black/40">
                    <img
                      src="/original_headshot.jpg"
                      alt="Ronak Sukhwal"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "50% 12%" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-outfit text-white flex items-center gap-2">
                      <span className="text-brand-secondary">✦</span> Creative Tech Specialist
                    </h3>
                    <p className="text-xs text-brand-secondary font-semibold font-outfit mt-1">Full-Stack & IT Engineer</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {showBrief ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-slate-300 font-inter leading-relaxed space-y-4 text-[0.95rem]"
                    >
                      <p>
                        I have successfully completed my <span className="font-semibold text-white">B.Tech in Information Technology</span> from <span className="text-brand-secondary font-semibold">MLV Textile And Engineering College</span> in Bhilwara, Rajasthan.
                      </p>
                      <p>
                        With a strong foundation in modern backend patterns using <span className="text-brand-primary font-semibold">Django & Python</span>, and visual frontend architecture with <span className="text-blue-400 font-semibold">React</span>, I build applications that excel in both efficiency and design.
                      </p>
                      <p>
                        I have completed a <span className="text-white font-semibold">Full Stack / Frontend Probation</span>, optimizing API endpoints, streamlining user journeys, and debugging real-world systems under production constraints.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-slate-300 font-inter leading-relaxed space-y-4 text-[0.95rem]"
                    >
                      <p>
                        I specialize in sculpting high-performance <span className="text-brand-secondary font-semibold">web experiences</span>. My philosophy centers on bridging clean, functional code architectures with beautiful micro-interactions and visual cues.
                      </p>
                      <p>
                        Whether designing custom database architectures using <span className="text-brand-primary font-semibold">MySQL / Oracle SQL</span>, or engineering responsive visual elements, I thrive on shipping product improvements.
                      </p>
                      <p>
                        I focus on reducing page loads, structuring reusable component libraries, and translating design wireframes into clean software assets.
                      </p>
                    </motion.div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>📍 Bhilwara, Rajasthan, India</span>
                  <span className="text-brand-secondary group-hover:underline">
                    {showBrief ? "Click for general bio →" : "Click for academic brief →"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: High-fidelity Hacker Animation Video Loop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 h-[340px] md:h-[450px] relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 z-10 w-full h-full rounded-3xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm bg-black/40">
              <video
                ref={videoRef}
                src={videoSrc}
                loop
                muted
                playsInline
                onTimeUpdate={(e) => {
                  if (isSubpage && e.target.currentTime >= 20.0) {
                    e.target.currentTime = 0;
                  }
                }}
                className="w-full h-full object-cover"
                style={{ pointerEvents: "none" }}
              />
              {/* Blend overlay mask to hide the video edges and make it look like a background effect */}
              {!isSubpage && (
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-[#030014]/60 pointer-events-none" />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;