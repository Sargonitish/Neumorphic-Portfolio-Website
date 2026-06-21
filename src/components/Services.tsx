"use client";

import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Services
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            What I Offer
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="neu-card p-8 text-center animate-fade-up group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="neu-circle w-16 h-16 mx-auto mb-5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
