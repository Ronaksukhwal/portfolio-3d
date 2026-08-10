import { useEffect } from "react";
import { initScrollAnimations } from "../animations/scrollAnimations";

import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const Home = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <>
      <div className="section"><Hero /></div>
      <div className="section"><About /></div>
      <div className="section"><Experience /></div>
      <div className="section"><Education /></div>
      <div className="section"><Skills /></div>
      <div className="section"><Projects /></div>
      <div className="section"><Contact /></div>
    </>
  );
};

export default Home;