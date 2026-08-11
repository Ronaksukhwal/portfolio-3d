import { Canvas } from "@react-three/fiber";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Experience from "../../canvas/Experience";

const Hero = () => {
  const cardRef = useRef(null);
  
  // Interactive 3D Tilt state tracking mouse coordinates
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsPastHero(true);
      } else {
        setIsPastHero(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    
    // Core offset relative to card center
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    // Convert coordinates to tilt angles (max 8 degrees tilt)
    const factor = 8;
    const rotX = -(y / (box.height / 2)) * factor;
    const rotY = (x / (box.width / 2)) * factor;

    setTilt({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  return (
    <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[#030014]">
      {/* Immersive radial gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(6,182,212,0.15),_transparent_30%),linear-gradient(180deg,_rgba(3,0,20,0.4),_rgba(3,0,20,0.85))]" />

      {/* Global 3D background Experience */}
      {!isPastHero && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0.8, 8], fov: 45 }}>
            <Experience />
          </Canvas>
        </div>
      )}

      {/* Glowing background flares */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.18, 0.4, 0.18], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-brand-primary/14 blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.12, 0.35, 0.12], x: [0, -10, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-brand-secondary/10 blur-[140px]"
      />

      {/* 3D INTERACTIVE TILT HEADER CARD */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 25 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="z-10 pointer-events-auto text-center max-w-5xl mx-auto px-6"
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${hovered ? 1.02 : 1}, ${hovered ? 1.02 : 1}, 1)`,
            transition: hovered ? "none" : "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
            boxShadow: hovered 
              ? "0 40px 100px rgba(124, 58, 237, 0.18), 0 10px 40px rgba(0, 0, 0, 0.5)" 
              : "0 25px 70px rgba(0, 0, 0, 0.4)",
            borderColor: hovered ? "rgba(124, 58, 237, 0.35)" : "rgba(255, 255, 255, 0.08)"
          }}
          className="relative overflow-hidden rounded-[2.5rem] border bg-black/40 px-6 py-12 md:px-14 md:py-16 backdrop-blur-xl transform-gpu select-none transition-all duration-300"
        >
          {/* Subtle inside gradient background */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(124,58,237,0.06),rgba(2,6,23,0.1),rgba(6,182,212,0.05))] pointer-events-none" />

          {/* Floating glowing circle inside card */}
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, 15, 0], y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-16 -right-16 h-36 w-36 rounded-full bg-brand-primary/12 blur-3xl pointer-events-none"
          />

          <div className="relative z-10">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4.5 py-1.5 text-xs font-bold tracking-wider uppercase font-outfit text-slate-200 shadow-md backdrop-blur-md mb-8">
              <motion.span
                animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-2 w-2 rounded-full bg-brand-secondary shadow-[0_0_12px_rgba(6,182,212,0.95)]"
              />
              Available for opportunities & Freelance
            </div>

            {/* Headline Title */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white font-outfit mb-6 leading-[0.92] select-none"
              style={{ textShadow: '0 8px 30px rgba(0, 0, 0, 0.95), 0 0 40px rgba(124,58,237,0.18)' }}
            >
              Hi, I'm{" "}
              <span className="whitespace-nowrap">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-purple-400 to-brand-secondary text-glow-secondary font-black">
                  Ronak
                </span>
                <span className="inline-block align-middle ml-3 animate-bounce">👋</span>
              </span>
            </h1>

            {/* Glowing Accent Separator */}
            <div className="w-20 h-1 bg-gradient-to-r from-brand-primary via-fuchsia-500 to-brand-secondary mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(124,58,237,0.4)]" />

            {/* Subtext description */}
            <p className="text-base md:text-xl font-medium text-slate-300 tracking-wide font-inter max-w-2xl mx-auto leading-relaxed" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
              Sculpting <span className="text-brand-secondary font-bold">interactive</span> web frameworks using <span className="text-brand-primary font-bold">React</span> & <span className="text-indigo-400 font-bold">Django</span>. Focused on bridging performance with exceptional 3D visual graphics.
            </p>

            {/* Interactive tag clouds */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {['React', 'Django', 'Python', 'Three.js', 'SQL'].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -3, scale: 1.03, borderColor: "rgba(6,182,212,0.5)", backgroundColor: "rgba(6,182,212,0.08)" }}
                  className="rounded-full border border-white/10 bg-white/3 px-4 py-1.5 text-xs font-bold font-outfit text-slate-200 backdrop-blur-md shadow-sm transition-all"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Call to Actions - Magnetic hover triggers */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/projects"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-7 py-3.5 text-xs font-black tracking-widest uppercase text-white shadow-[0_15px_30px_rgba(124,58,237,0.25)] transition-all cursor-pointer"
              >
                View Projects 📁
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ y: -3, scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-white/10 bg-white/4 px-7 py-3.5 text-xs font-black tracking-widest uppercase text-white backdrop-blur-md transition-all cursor-pointer"
              >
                Contact Me ✉️
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;