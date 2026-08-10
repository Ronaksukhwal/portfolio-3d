import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="h-[80vh] w-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background neon visual flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-slow" />
      <div className="absolute right-10 bottom-10 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="relative z-10 max-w-lg">
        {/* Glow Code */}
        <motion.h1 
          initial={{ scale: 0.82, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="text-8xl md:text-9xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary drop-shadow-2xl text-glow-primary tracking-tight mb-4"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-2xl font-bold text-white font-outfit mb-4"
        >
          Lost in Cosmic Space
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-slate-400 font-inter text-sm leading-relaxed mb-10 max-w-sm mx-auto"
        >
          The coordinate grid you are trying to scan does not exist. It may have drifted past the event horizon.
        </motion.p>

        {/* CTA Home Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link
            to="/"
            className="inline-block py-3.5 px-8 rounded-full font-bold font-outfit text-white text-xs tracking-widest uppercase bg-gradient-to-r from-brand-primary to-brand-secondary shadow-[0_0_24px_rgba(124,58,237,0.3)] hover:shadow-[0_0_36px_rgba(124,58,237,0.45)] transition-all transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Navigate Home 🛸
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
