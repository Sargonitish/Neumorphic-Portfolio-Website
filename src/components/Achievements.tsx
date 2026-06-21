"use client";

import { achievements } from "@/data/portfolio";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({ value, label }: { value: string; label: string }) {
  const num = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const { count, ref } = useCountUp(num);

  return (
    <div ref={ref} className="neu-card p-8 text-center">
      <p className="font-heading text-3xl sm:text-4xl font-bold text-[var(--accent)]">
        {count}{suffix}
      </p>
      <p className="text-sm text-[var(--text-secondary)] mt-2">{label}</p>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Achievements
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            By the Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a, i) => (
            <div key={a.label} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <StatCard value={a.value} label={a.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
