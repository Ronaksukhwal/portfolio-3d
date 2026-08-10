import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const educationData = [
  {
    degree: "B.Tech – Information Technology",
    institution: "MLV Textile And Engineering College, Bhilwara",
    duration: "2022 – 2026",
    grade: "Completed",
    details: "Focusing on data structures, algorithmic design, database systems, web architectures, and full-stack engineering."
  },
  {
    degree: "XII Standard (PCM & CS)",
    institution: "New Look Central School, Bhilwara",
    duration: "Apr 2021 – Apr 2022",
    grade: "70.0%",
    details: "Physics, Chemistry, Mathematics, and Computer Science foundation with practical programming assignments."
  }
];

const certificationsData = [
  { title: "Full Stack Internship", issuer: "Shunyatax Global", file: "/certificates/shunyatax_internship.png" },
  { title: "Python Essential 1", issuer: "Cisco Networking Academy", file: "/certificates/cisco_python_essentials.pdf" },
  { title: "Introduction to Data Science", issuer: "Cisco Networking Academy", file: "/certificates/cisco_data_science.pdf" },
  { title: "Starting Python Programming", issuer: "Alison", file: "/certificates/alison_python.jpg" },
  { title: "Software Engineer Intern Certificate", issuer: "HackerRank", file: "/certificates/hackerrank_software_engineer.pdf" },
  { title: "Python Programming Course", issuer: "GeeksForGeeks", file: "/certificates/geeksforgeeks_python.pdf" },
  { title: "Responsive Web Design", issuer: "FreeCodeCamp", file: "/certificates/freecodecamp_web_design.jpg" },
  { title: "Data Analytics Virtual Experience", issuer: "Deloitte", file: "/certificates/deloitte_data_analytics.pdf" },
  { title: "Java Programming Core", issuer: "MSME Technology Centres", file: "/certificates/msme_java.jpg" },
  { title: "Software Engineering Simulation", issuer: "JPMorgan Chase & Co.", file: "/certificates/jpmorgan_software_engineering.pdf" }
];

const Education = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCertClick = (cert) => {
    if (cert.file) {
      setSelectedCert(cert);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="education">
      {/* Visual background atmospheric lights */}
      <div className="absolute left-1/4 top-1/4 w-[450px] h-[450px] bg-brand-primary/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-slow" />
      <div className="absolute right-10 bottom-10 w-[550px] h-[550px] bg-brand-secondary/8 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-4">
            <span className="text-xs font-black tracking-wider uppercase font-outfit text-brand-primary bg-brand-primary/10 px-4 py-1.5 rounded-full border border-brand-primary/30 backdrop-blur-sm shadow-sm flex items-center justify-center gap-1.5 mx-auto w-fit">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Learning & Growth
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-outfit text-white mb-4 leading-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary drop-shadow-md">Certifications</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Side-by-side Dual Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Academic Achievements */}
          <div className="lg:col-span-6 space-y-10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary">
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </span>
              <h3 className="text-2xl md:text-3xl font-black font-outfit text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="p-6 md:p-8 rounded-3xl glass-panel glow-border border-white/10 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-30 -z-10" />
                  
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h4 className="text-lg md:text-xl font-bold font-outfit text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary transition-all">
                      {edu.degree}
                    </h4>
                    <span className="text-[10px] font-bold font-outfit tracking-wide bg-brand-primary/20 text-brand-primary border border-brand-primary/40 px-2.5 py-1 rounded-full flex-shrink-0">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-brand-secondary font-inter mb-4">
                    {edu.institution}
                  </p>
                  
                  <p className="text-slate-300 font-inter text-xs leading-relaxed mb-6">
                    {edu.details}
                  </p>

                  <span className="inline-block text-[10px] font-bold text-slate-400 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-inter flex items-center gap-1.5 w-fit">
                    <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {edu.duration}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Professional Credentials Shield */}
          <div className="lg:col-span-6 space-y-10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-brand-secondary/10 border border-brand-secondary/30 flex items-center justify-center text-brand-secondary">
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </span>
              <h3 className="text-2xl md:text-3xl font-black font-outfit text-white">
                Certifications
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="p-6 md:p-8 rounded-3xl glass-panel glow-border-primary border-white/10 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-transparent opacity-20 -z-10" />

              <div className="grid sm:grid-cols-2 gap-4">
                {certificationsData.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={cert.file ? { x: 4, scale: 1.02 } : { x: 4 }}
                    onClick={() => handleCertClick(cert)}
                    className={`p-4 rounded-2xl border transition-all duration-300 flex gap-3 items-start ${
                      cert.file 
                        ? "bg-white/5 border-white/10 cursor-pointer hover:bg-white/10 hover:border-brand-secondary/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] group" 
                        : "bg-white/3 border-white/5 opacity-80 cursor-default"
                    }`}
                  >
                    {/* Glowing Check / Eye Icon */}
                    <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full mt-0.5 border transition-all duration-300 ${
                      cert.file 
                        ? "bg-brand-secondary/15 border-brand-secondary/40 text-brand-secondary group-hover:bg-brand-secondary/35 group-hover:border-brand-secondary group-hover:text-white"
                        : "bg-white/5 border-white/10 text-slate-500"
                    }`}>
                      {cert.file ? (
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      ) : (
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>

                    <div className="flex-1 min-w-0">
                      <h5 className="text-[11px] font-bold text-white leading-snug font-outfit truncate">
                        {cert.title}
                      </h5>
                      <span className="text-[9px] text-slate-400 font-semibold font-inter mt-1 block">
                        {cert.issuer}
                      </span>
                      {cert.file && (
                        <span className="text-[8px] text-brand-secondary font-bold font-outfit uppercase tracking-wider mt-1.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Certificate 👁️
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Responsive Glassmorphic Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-4xl rounded-3xl glass-panel-heavy border border-white/10 p-6 md:p-8 relative max-h-[90vh] overflow-y-auto flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                <div>
                  <h3 className="text-base md:text-xl font-bold font-outfit text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-brand-secondary font-medium font-inter mt-1">
                    {selectedCert.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content Body */}
              <div className="flex-1 flex justify-center items-center overflow-hidden mb-6 bg-black/40 rounded-2xl border border-white/5 p-2 md:p-4 min-h-[50vh]">
                {selectedCert.file.endsWith(".pdf") ? (
                  <div className="w-full h-full min-h-[50vh] flex flex-col items-center justify-center">
                    {/* Responsive iframe for Desktop, and fallback buttons for Mobile */}
                    <iframe
                      src={`${selectedCert.file}#toolbar=0`}
                      className="hidden md:block w-full h-[60vh] rounded-xl border border-white/5"
                      title={selectedCert.title}
                    />
                    <div className="md:hidden text-center p-6 space-y-6">
                      <span className="text-6xl block select-none">📄</span>
                      <h4 className="text-white font-bold font-outfit text-sm">PDF Document</h4>
                      <p className="text-slate-400 text-xs font-inter leading-relaxed max-w-xs mx-auto">
                        Mobile web browsers do not always support inline PDF rendering. Tap the button below to view or download the certificate in full resolution.
                      </p>
                      <a
                        href={selectedCert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-3 px-6 rounded-full font-bold font-outfit text-xs text-white tracking-widest uppercase bg-gradient-to-r from-brand-primary to-brand-secondary shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all cursor-pointer"
                      >
                        Open Certificate ↗
                      </a>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedCert.file}
                    alt={selectedCert.title}
                    className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-lg border border-white/5"
                  />
                )}
              </div>

              {/* Footer Actions */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-white/5 text-xs">
                <span className="text-slate-400 font-inter">
                  Verified Credentials Security Shield
                </span>
                <div className="flex gap-3">
                  <a
                    href={selectedCert.file}
                    download
                    className="py-2.5 px-5 rounded-full font-bold font-outfit text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    Download File 💾
                  </a>
                  {selectedCert.file.endsWith(".pdf") && (
                    <a
                      href={selectedCert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden md:flex py-2.5 px-5 rounded-full font-bold font-outfit text-white bg-gradient-to-r from-brand-primary to-brand-secondary shadow-md hover:shadow-lg transition-all cursor-pointer items-center gap-1.5"
                    >
                      Open Fullscreen ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;
