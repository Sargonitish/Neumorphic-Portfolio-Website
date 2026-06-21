"use client";

import { currentlyLearning } from "@/data/portfolio";

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="relative z-10 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Growth Mindset
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            Currently Learning
          </h2>
        </div>

        <div className="neu-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">📚</span>
            <p className="text-sm text-[var(--text-secondary)]">
              Always exploring new technologies and sharpening my skills
            </p>
          </div>
          <div className="space-y-4">
            {currentlyLearning.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-4 animate-slide-in-left"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="neu-circle w-8 h-8 flex items-center justify-center text-xs text-[var(--accent)] font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm sm:text-base text-[var(--text-primary)]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
