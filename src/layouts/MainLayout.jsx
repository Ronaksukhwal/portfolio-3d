import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import CustomCursor from "../components/CustomCursor";
import TwinklingStars from "../components/Effects/TwinklingStars";

const Home = lazy(() => import("../pages/Home"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ExperiencePage = lazy(() => import("../pages/ExperiencePage"));
const EducationPage = lazy(() => import("../pages/EducationPage"));
const SkillsPage = lazy(() => import("../pages/SkillsPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <TwinklingStars />
      <CustomCursor />
      <Navbar />
      <main className={isHome ? "pt-0" : "pt-28"}>
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-white/50 font-outfit text-sm animate-pulse">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default MainLayout;