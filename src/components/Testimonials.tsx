"use client";

import { useState, useEffect, useCallback } from "react";
import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative z-10 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            What People Say
          </h2>
        </div>

        <div className="neu-card p-8 sm:p-10 text-center animate-scale-in" key={current}>
          <div className="neu-circle w-16 h-16 mx-auto mb-5 flex items-center justify-center text-xl font-bold text-[var(--accent)]">
            {t.name.charAt(0)}
          </div>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed italic mb-6">
            &ldquo;{t.review}&rdquo;
          </p>
          <p className="font-heading font-semibold text-[var(--text-primary)]">{t.name}</p>
          <p className="text-sm text-[var(--text-secondary)]">{t.designation}</p>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button onClick={prev} className="neu-circle w-10 h-10 flex items-center justify-center text-sm" aria-label="Previous">
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-[var(--accent)] w-6" : "bg-[var(--dark-shadow)]/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="neu-circle w-10 h-10 flex items-center justify-center text-sm" aria-label="Next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
