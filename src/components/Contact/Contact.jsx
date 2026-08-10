import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ success: null, message: "" });
  const linkedinUrl = "https://www.linkedin.com/in/ronak-sukhwal-730b87287";
  const githubUrl = "https://github.com/Ronaksukhwal";
  const emailAddress = "ronaksukhwal5@gmail.com";

  const [time, setTime] = useState(() => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + (3600000 * 5.5)); // IST (Asia/Kolkata)
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      setTime(new Date(utc + (3600000 * 5.5)));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hrRot = ((hours % 12) * 30) + (minutes * 0.5);
  const minRot = (minutes * 6) + (seconds * 0.1);
  const secRot = seconds * 6;

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ success: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `New Inquiry from ${form.name}`,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ success: true, message: "Thank you! Your inquiry has been sent successfully. Check your email for confirmation." });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ success: false, message: data.message || "Failed to deliver message. Please try again." });
      }
    } catch (error) {
      console.error("Contact Form Submit Error:", error);
      setStatus({ success: false, message: "Server connection failure. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background visual atmosphere glows */}
      <div className="absolute left-0 bottom-0 w-[550px] h-[550px] bg-brand-primary/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-slow" />
      <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-brand-secondary/8 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-black tracking-wider uppercase font-outfit text-brand-primary bg-brand-primary/10 px-4 py-1.5 rounded-full border border-brand-primary/30 backdrop-blur-sm shadow-sm flex items-center justify-center gap-1.5 mx-auto w-fit">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-outfit text-white mb-4 leading-tight">
            Let's Create <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-purple-400 to-brand-secondary drop-shadow-md">
              Something Amazing
            </span>
          </h2>
          <p className="text-slate-300 font-inter text-sm md:text-[0.95rem] leading-relaxed max-w-xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to connect. Drop a message and let's construct the future together.
          </p>
          <div className="w-16 h-[3px] bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Contact Info Badges Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email card */}
          <div className="p-6 rounded-3xl glass-panel glow-border border-white/10 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-primary to-purple-600 flex items-center justify-center mb-4 shadow-lg text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-white font-bold font-outfit text-sm mb-1">Email Address</h4>
            <a href={`mailto:${emailAddress}`} className="text-slate-300 hover:text-brand-secondary transition-colors text-xs font-inter font-light">
              {emailAddress}
            </a>
          </div>
          
          {/* LinkedIn card */}
          <motion.a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="p-6 rounded-3xl glass-panel glow-border border-white/10 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-secondary to-cyan-600 flex items-center justify-center mb-4 shadow-lg text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <h4 className="text-white font-bold font-outfit text-sm mb-1">LinkedIn</h4>
            <span className="text-slate-300 text-xs font-inter font-light">
              ronak-sukhwal-730b87287
            </span>
          </motion.a>
          
          {/* GitHub card */}
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="p-6 rounded-3xl glass-panel glow-border border-white/10 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </div>
            <h4 className="text-white font-bold font-outfit text-sm mb-1">GitHub Profile</h4>
            <span className="text-slate-300 text-xs font-inter font-light">
              github/Ronaksukhwal
            </span>
          </motion.a>
        </div>

        {/* Split Grid for Watch and Form */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Live Timing Analog Watch Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 h-full"
          >
            <div className="flex flex-col items-center justify-center p-8 rounded-3xl glass-panel border-white/10 shadow-2xl relative overflow-hidden h-full group bg-black/20">
              {/* Glow flare behind */}
              <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-brand-primary/10 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform duration-500" />
              
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 font-outfit block text-center">
                Developer's Local Time
              </span>

              {/* Clock Face */}
              <div className="relative w-40 h-40 rounded-full border-2 border-white/10 bg-[#030014]/60 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.1)] group-hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-1 rounded-full border border-brand-primary/10 animate-pulse-slow" />
                
                {/* Center Pin */}
                <div className="absolute w-3 h-3 rounded-full bg-white z-40 border border-black/50 shadow-md" />
                <div className="absolute w-1 h-1 rounded-full bg-brand-secondary z-50" />

                {/* Hour Hand */}
                <div 
                  className="absolute origin-bottom rounded-full z-10"
                  style={{
                    width: "4px",
                    height: "34px",
                    backgroundColor: "#ffffff",
                    bottom: "50%",
                    transform: `rotate(${hrRot}deg)`,
                    transformOrigin: "bottom center",
                    boxShadow: "0 0 8px rgba(255,255,255,0.4)",
                    transition: "transform 0.5s cubic-bezier(0.4, 2.08, 0.55, 0.44)"
                  }}
                />

                {/* Minute Hand */}
                <div 
                  className="absolute origin-bottom rounded-full z-20"
                  style={{
                    width: "3px",
                    height: "46px",
                    backgroundColor: "var(--color-brand-primary)",
                    bottom: "50%",
                    transform: `rotate(${minRot}deg)`,
                    transformOrigin: "bottom center",
                    boxShadow: "0 0 10px var(--color-brand-primary)",
                    transition: "transform 0.5s cubic-bezier(0.4, 2.08, 0.55, 0.44)"
                  }}
                />

                {/* Second Hand */}
                <div 
                  className="absolute origin-bottom rounded-full z-30"
                  style={{
                    width: "1.5px",
                    height: "54px",
                    backgroundColor: "var(--color-brand-secondary)",
                    bottom: "50%",
                    transform: `rotate(${secRot}deg)`,
                    transformOrigin: "bottom center",
                    boxShadow: "0 0 12px var(--color-brand-secondary)",
                    transition: "transform 0.1s cubic-bezier(0.4, 2.08, 0.55, 1.44)"
                  }}
                />

                {/* Ticks */}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((tick) => {
                  const rotation = tick * 30;
                  const isMain = tick % 3 === 0;
                  return (
                    <div
                      key={tick}
                      className="absolute origin-bottom"
                      style={{
                        width: isMain ? "2px" : "1px",
                        height: isMain ? "8px" : "4px",
                        backgroundColor: isMain ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.25)",
                        bottom: "50%",
                        transform: `rotate(${rotation}deg) translateY(-68px)`,
                        transformOrigin: "bottom center"
                      }}
                    />
                  );
                })}
              </div>

              {/* Digital Readout */}
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-bold font-outfit text-white tracking-widest">
                    {formattedTime}
                  </span>
                </div>
                <p className="text-[9px] font-bold text-slate-500 tracking-wider uppercase font-inter">
                  IST (Asia/Kolkata)
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Input Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <form 
              onSubmit={handleSubmit} 
              className="p-8 md:p-10 rounded-3xl glass-panel border-white/10 shadow-2xl relative overflow-hidden group h-full flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/3 via-transparent to-brand-secondary/3 opacity-30 -z-10" />

              <div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 font-outfit">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      required
                      className="w-full bg-white/3 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all font-inter"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 font-outfit">Your Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      required
                      className="w-full bg-white/3 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary/20 transition-all font-inter"
                    />
                  </div>
                </div>
                
                {/* Message */}
                <div className="mb-8">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 font-outfit">Your Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project, ideas, or opportunities..."
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    required
                    className="w-full bg-white/3 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 transition-all font-inter resize-none"
                  />
                </div>

                {/* Status Toast Notification */}
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`mb-6 p-4 rounded-2xl border text-xs font-inter text-center ${
                      status.success 
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                        : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                    }`}
                  >
                    {status.success ? "✓ " : "✗ "} {status.message}
                  </motion.div>
                )}
              </div>

              {/* Submit Button */}
              <motion.button 
                whileHover={!submitting ? { scale: 1.01 } : {}}
                whileTap={!submitting ? { scale: 0.99 } : {}}
                disabled={submitting}
                type="submit"
                className={`w-full py-4 px-6 rounded-2xl font-bold font-outfit text-white text-sm tracking-widest uppercase relative overflow-hidden group ${
                  submitting 
                    ? "bg-slate-800 border border-white/5 cursor-wait" 
                    : "bg-gradient-to-r from-brand-primary via-purple-500 to-brand-secondary shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.45)] cursor-pointer"
                } transition-all mt-auto`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitting ? "Sending Message..." : "Send Message"}
                  {!submitting && <span className="text-sm">🚀</span>}
                </span>
                {!submitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;