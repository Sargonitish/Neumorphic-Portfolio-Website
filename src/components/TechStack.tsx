"use client";

import { personalInfo } from "@/data/portfolio";

const techIcons: Record<string, string> = {
  "React": "⚛️",
  "Next.js": "▲",
  "TypeScript": "📘",
  "Java": "☕",
  "Swift": "🦅",
  "Python": "🐍",
};

export default function TechStack() {
  return (
    <section id="techstack" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Tech Stack
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            Technologies I Use
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {personalInfo.techStack.map((tech, i) => (
            <div
              key={tech}
              className="neu-card p-6 flex flex-col items-center gap-3 text-center animate-scale-in group"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110">
                {techIcons[tech] || "💻"}
              </span>
              <span className="text-sm font-medium text-[var(--text-primary)]">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
