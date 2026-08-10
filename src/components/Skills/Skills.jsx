import { motion } from "framer-motion";
import { useState, useRef } from "react";

// Official colored brand icon mapping using Devicon
const SkillIcon = ({ name }) => {
  switch (name) {
    case "Python":
      return <i className="devicon-python-plain colored text-2xl"></i>;
    case "Java":
      return <i className="devicon-java-plain colored text-2xl"></i>;
    case "React (JSX)":
      return <i className="devicon-react-original colored text-2xl"></i>;
    case "SQL":
      return <i className="devicon-mysql-plain colored text-2xl"></i>;
    case "Django":
      return <i className="devicon-django-plain colored text-2xl"></i>;
    case "JavaScript":
      return <i className="devicon-javascript-plain colored text-2xl"></i>;
    case "HTML & CSS":
      return (
        <div className="flex gap-1.5 items-center">
          <i className="devicon-html5-plain colored text-2xl"></i>
          <i className="devicon-css3-plain colored text-2xl"></i>
        </div>
      );
    case "Expo Mobile":
      return <i className="devicon-react-original colored text-2xl"></i>;
    case "Bootstrap":
      return <i className="devicon-bootstrap-plain colored text-2xl"></i>;
    case "MySQL & Oracle":
      return (
        <div className="flex gap-1.5 items-center">
          <i className="devicon-mysql-plain colored text-2xl"></i>
          <i className="devicon-oracle-original colored text-2xl"></i>
        </div>
      );
    case "Git":
      return <i className="devicon-git-plain colored text-2xl"></i>;
    case "VS Code & IDEs":
      return <i className="devicon-vscode-plain colored text-2xl"></i>;
    default:
      return null;
  }
};

const skillsData = [
  { name: "Python", level: "Advanced", color: "from-blue-500/20 to-indigo-600/30", borderColor: "rgba(59, 130, 246, 0.4)", shadow: "rgba(59, 130, 246, 0.3)" },
  { name: "Java", level: "Intermediate", color: "from-orange-500/20 to-red-600/30", borderColor: "rgba(249, 115, 22, 0.4)", shadow: "rgba(249, 115, 22, 0.3)" },
  { name: "React (JSX)", level: "Advanced", color: "from-cyan-400/20 to-blue-500/30", borderColor: "rgba(6, 182, 212, 0.4)", shadow: "rgba(6, 182, 212, 0.3)" },
  { name: "SQL", level: "Advanced", color: "from-indigo-500/20 to-purple-600/30", borderColor: "rgba(99, 102, 241, 0.4)", shadow: "rgba(99, 102, 241, 0.3)" },
  { name: "Django", level: "Advanced", color: "from-green-500/20 to-emerald-600/30", borderColor: "rgba(16, 185, 129, 0.4)", shadow: "rgba(16, 185, 129, 0.3)" },
  { name: "JavaScript", level: "Advanced", color: "from-yellow-400/20 to-amber-500/30", borderColor: "rgba(234, 179, 8, 0.4)", shadow: "rgba(234, 179, 8, 0.3)" },
  { name: "HTML & CSS", level: "Advanced", color: "from-orange-400/20 to-pink-500/30", borderColor: "rgba(251, 146, 60, 0.4)", shadow: "rgba(251, 146, 60, 0.3)" },
  { name: "Expo Mobile", level: "Familiar", color: "from-slate-400/20 to-slate-600/30", borderColor: "rgba(100, 116, 139, 0.4)", shadow: "rgba(100, 116, 139, 0.2)" },
  { name: "Bootstrap", level: "Advanced", color: "from-purple-500/20 to-pink-600/30", borderColor: "rgba(168, 85, 247, 0.4)", shadow: "rgba(168, 85, 247, 0.3)" },
  { name: "MySQL & Oracle", level: "Advanced", color: "from-blue-400/20 to-teal-500/30", borderColor: "rgba(37, 99, 235, 0.4)", shadow: "rgba(37, 99, 235, 0.3)" },
  { name: "Git", level: "Intermediate", color: "from-red-500/20 to-orange-600/30", borderColor: "rgba(239, 68, 68, 0.4)", shadow: "rgba(239, 68, 68, 0.3)" },
  { name: "VS Code & IDEs", level: "Advanced", color: "from-blue-500/20 to-cyan-600/30", borderColor: "rgba(14, 165, 233, 0.4)", shadow: "rgba(14, 165, 233, 0.3)" }
];

// Custom 3D Tilt Card Sub-component
const SkillCard = ({ skill, index }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    
    // Calculate cursor coordinate relative to element center
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    // Convert coordinates to tilt angles (max 12 deg tilt)
    const factor = 12;
    const rotX = -(y / (box.height / 2)) * factor;
    const rotY = (x / (box.width / 2)) * factor;

    setRotate({ x: rotX, y: rotY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.05, duration: 0.45 }}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${rotate.x !== 0 ? 1.03 : 1}, ${rotate.x !== 0 ? 1.03 : 1}, 1)`,
        transition: rotate.x === 0 ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s, box-shadow 0.3s" : "none",
        boxShadow: rotate.x !== 0 
          ? `0 15px 45px -10px ${skill.shadow}` 
          : `0 8px 25px -12px ${skill.shadow.replace('0.3', '0.15').replace('0.2', '0.08')}`,
        borderColor: rotate.x !== 0 ? skill.borderColor : skill.borderColor.replace('0.4', '0.15').replace('0.3', '0.1')
      }}
      className="p-6 rounded-3xl bg-white/4 border backdrop-blur-md overflow-hidden relative group cursor-pointer transition-all duration-300"
    >
      {/* Decorative gradient blob inside card */}
      <div className={`absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br ${skill.color} blur-[36px] rounded-full opacity-55 group-hover:opacity-85 group-hover:scale-150 transition-all duration-500`} />

      <div className="relative z-10">
        {/* Symbol badge */}
        <div className={`w-12 h-12 rounded-2xl mb-4 bg-gradient-to-br ${skill.color} border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_20px_${skill.shadow}] transition-all duration-300`}>
          <span style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.15)) brightness(1.2) saturate(1.15)" }} className="flex items-center justify-center">
            <SkillIcon name={skill.name} />
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 font-outfit group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-secondary transition-all">
          {skill.name}
        </h3>

        {/* Level badge */}
        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold font-outfit tracking-wider uppercase text-slate-300 bg-white/5 border border-white/10 group-hover:bg-brand-primary/20 group-hover:text-white group-hover:border-brand-primary/40 transition-all">
          {skill.level}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      {/* Atmospheric backgrounds */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-brand-primary/8 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-brand-secondary/8 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-outfit text-white mb-4 leading-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary drop-shadow-md">Arsenal</span>
          </h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Skill Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;