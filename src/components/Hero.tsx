"use client";

import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="neu-raised-lg w-36 h-36 sm:w-44 sm:h-44 rounded-full flex items-center justify-center animate-float">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center text-5xl sm:text-6xl font-bold text-[var(--accent)]">
              JD
            </div>
          </div>
        </div>

        <div className="animate-fade-up">
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] mb-3">
            {personalInfo.greeting}
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-[var(--accent)] mb-3">
            {personalInfo.title}
          </p>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
            {personalInfo.valueProposition}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-up stagger-3">
          {personalInfo.techStack.map((tech) => (
            <span
              key={tech}
              className="neu-raised-sm px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-[var(--text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-up stagger-4">
          <button
            onClick={() => scrollTo("#featured")}
            className="neu-btn px-8 py-3.5 rounded-xl font-medium text-[var(--accent)]"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="neu-btn px-8 py-3.5 rounded-xl font-medium text-[var(--text-primary)]"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
