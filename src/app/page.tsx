"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import LoadingScreen from "@/components/LoadingScreen";
import MouseBackground from "@/components/MouseBackground";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import TerminalSection from "@/components/TerminalSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ResumeModal from "@/components/ResumeModal";
import { useCommandPalette } from "@/hooks/useCommandPalette";

export default function Home() {
  const { isOpen, close, setIsOpen } = useCommandPalette();
  const [resumeOpen, setResumeOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
    }
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <Navbar onOpenPalette={() => setIsOpen(true)} />
      <CommandPalette isOpen={isOpen} onClose={close} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <MouseBackground />
      <main className="relative z-10">
        <Hero />
        <FeaturedProjects />
        <About />
        <Skills />
        <TechStack />
        <Services />
        <Timeline />
        <Education />
        <Achievements />
        <Projects />
        <Testimonials />
        <CurrentlyLearning />
        <TerminalSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
