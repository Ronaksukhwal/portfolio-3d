import { useEffect, useState } from "react";
import { initScrollAnimations } from "../animations/scrollAnimations";
import Contact from "../components/Contact/Contact";
import { motion } from "framer-motion";

const ContactPage = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    { q: "What is your remote operation setup?", a: "I operate with a fully equipped high-performance developer workspace. I have gigabit connections and adapt dynamically to remote asynchronous workflows across timezones." },
    { q: "Are you available for contract roles?", a: "Yes. I am open to contract engagements, freelance operations, and long-term engineering probations/full-time placements." },
    { q: "How versatile is your technical stack?", a: "Very. While I specialize in React frontend systems and Django API backends, I adapt to new languages (e.g. Java, Python, SQL databases) and build pipelines rapidly." }
  ];

  return (
    <div className="space-y-24 py-10">
      {/* SECTION 1: Contact Hero */}
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
              CONNECT
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black font-outfit text-white mb-6 leading-[0.95]"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary text-glow-secondary">Touch</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 font-inter text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's bring your ideas to life together.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: Form Gateway & SECTION 3: Communication Nodes */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <Contact />
        </div>
      </section>

      {/* SECTION 4: Location Map & Workhours */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto glass-panel p-8 md:p-10 rounded-3xl border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/3 to-transparent -z-10 animate-pulse-slow" />
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] font-black tracking-widest text-brand-secondary bg-brand-secondary/10 px-3 py-1 rounded-full uppercase border border-brand-secondary/30">
                Coordinates
              </span>
              <h3 className="text-2xl font-bold font-outfit text-white mt-4 mb-4">Location Details</h3>
              <p className="text-slate-300 font-inter text-sm leading-relaxed mb-6">
                I am situated in Bhilwara, Rajasthan, India. Operating in Indian Standard Time (IST - UTC+5:30), but flexible to align with global operational working cycles.
              </p>
              <div className="space-y-3 text-xs font-semibold font-outfit text-slate-300">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                  </svg>
                  <span>Timezone: IST (UTC+05:30)</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Operations: Mon - Sat | 09:00 - 19:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Base: Bhilwara, Rajasthan, India</span>
                </div>
              </div>
            </div>
            
            {/* Visual Glass Compass Casing */}
            <div className="p-8 rounded-2xl bg-white/3 border border-white/5 flex flex-col items-center justify-center text-center shadow-lg relative min-h-[200px]">
              <div className="text-brand-secondary animate-spin" style={{ animationDuration: "20s" }}>
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <span className="text-[9px] font-black text-brand-secondary font-outfit tracking-widest uppercase mt-4 block">Active Scanning Mode</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ gates */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-widest text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full uppercase border border-brand-primary/30">
              Reference
            </span>
            <h3 className="text-3xl font-bold font-outfit text-white mt-4">Common Questions</h3>
            <div className="w-12 h-0.5 bg-brand-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="p-6 rounded-3xl glass-panel border-white/10 cursor-pointer transition-all hover:bg-white/5"
              >
                <div className="flex justify-between items-center gap-4">
                  <h4 className="text-sm font-bold font-outfit text-white">
                    {faq.q}
                  </h4>
                  <span className="text-slate-400 text-sm">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </div>

                {activeFaq === idx && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-300 font-inter text-xs leading-relaxed mt-4 pt-4 border-t border-white/5"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
