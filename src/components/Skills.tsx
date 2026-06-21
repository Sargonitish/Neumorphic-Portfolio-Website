"use client";

import { skills } from "@/data/portfolio";

const categories = ["Frontend", "Backend", "Languages", "Tools"];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-20 px-4 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Skills
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            What I Know
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, ci) => {
            const categorySkills = skills.filter((s) => s.category === category);
            return (
              <div
                key={category}
                className="neu-card p-6 animate-fade-up"
                style={{ animationDelay: `${ci * 0.1}s` }}
              >
                <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-5">
                  {category}
                </h3>
                <div className="flex flex-col gap-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-[var(--text-primary)] font-medium">{skill.name}</span>
                        <span className="text-[var(--text-secondary)]">{skill.proficiency}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-[var(--dark-shadow)]/20 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] transition-all duration-1000 ease-out"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
