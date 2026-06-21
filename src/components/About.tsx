"use client";

import { personalInfo } from "@/data/portfolio";
import { achievements } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            About Me
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            Get to Know Me
          </h2>
        </div>

        <div className="neu-card p-8 sm:p-12">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="neu-raised-lg w-56 h-56 sm:w-72 sm:h-72 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center text-7xl sm:text-8xl font-bold text-[var(--accent)]">
                  JD
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source
                projects, or working on my latest creative idea. I believe in writing clean, accessible code
                that makes a real difference for users.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {achievements.map((a) => (
                  <div key={a.label} className="neu-pressed-sm rounded-xl p-4 text-center">
                    <p className="font-heading text-xl sm:text-2xl font-bold text-[var(--accent)]">{a.value}</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{a.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
