"use client";

import { personalInfo, navLinks } from "@/data/portfolio";

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 py-12 px-4 border-t border-[var(--dark-shadow)]/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-heading text-xl font-bold text-[var(--text-primary)] mb-2">
              JD<span className="text-[var(--accent)]">.</span>
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              {personalInfo.title}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">Quick Links</p>
            <div className="flex flex-col gap-2">
              {navLinks.slice(0, 5).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">Connect</p>
            <div className="flex gap-3">
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="neu-circle w-9 h-9 flex items-center justify-center text-sm" aria-label="GitHub">
                🐙
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="neu-circle w-9 h-9 flex items-center justify-center text-sm" aria-label="LinkedIn">
                💼
              </a>
              <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="neu-circle w-9 h-9 flex items-center justify-center text-sm" aria-label="Twitter">
                🐦
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 border-t border-[var(--dark-shadow)]/10">
          <p className="text-xs text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
