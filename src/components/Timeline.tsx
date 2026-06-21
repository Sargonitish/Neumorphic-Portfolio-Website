"use client";

import { experiences } from "@/data/portfolio";

export default function Timeline() {
  return (
    <section id="experience" className="relative z-10 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Experience
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            Where I&apos;ve Worked
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-[var(--dark-shadow)]/30 -translate-x-1/2" />

          {experiences.map((exp, i) => (
            <div
              key={`${exp.company}-${exp.duration}`}
              className={`relative flex flex-col sm:flex-row gap-6 sm:gap-12 mb-12 animate-fade-up ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                <div className="neu-card p-6">
                  <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">
                    {exp.position}
                  </h3>
                  <p className="text-[var(--accent)] text-sm font-medium mt-1">{exp.company}</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">{exp.duration}</p>
                  <ul className={`mt-4 space-y-2 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                    {exp.responsibilities.map((r, ri) => (
                      <li key={ri} className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-6 sm:left-1/2 top-6 -translate-x-1/2">
                <div className="neu-circle w-4 h-4 bg-[var(--accent)]" />
              </div>

              <div className="flex-1 hidden sm:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
