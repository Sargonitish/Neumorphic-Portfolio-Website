"use client";

import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Education
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            My Learning Path
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <div
              key={item.degree}
              className="neu-card p-6 animate-fade-up group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="neu-circle w-12 h-12 flex items-center justify-center mb-4 text-lg">
                🎓
              </div>
              <h3 className="font-heading text-base font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                {item.degree}
              </h3>
              <p className="text-sm text-[var(--accent)] font-medium">{item.institution}</p>
              <p className="text-xs text-[var(--text-secondary)] mt-2">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
