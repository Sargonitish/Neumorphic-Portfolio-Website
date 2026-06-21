"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/data/portfolio";
import { useTheme } from "./ThemeProvider";

export default function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/80 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            className="font-heading text-xl font-bold text-[var(--text-primary)]"
          >
            JD<span className="text-[var(--accent)]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="neu-btn px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenPalette()}
              className="neu-btn px-3 py-2 text-xs text-[var(--text-secondary)] hidden sm:flex items-center gap-1"
              aria-label="Command palette"
            >
              <kbd className="text-[10px] opacity-60">⌘K</kbd>
            </button>

            <button
              onClick={toggle}
              className="neu-circle w-10 h-10 flex items-center justify-center text-lg"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden neu-circle w-10 h-10 flex flex-col items-center justify-center gap-1"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-[var(--text-primary)] transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--bg)] border-t border-[var(--dark-shadow)]/20">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="neu-btn px-4 py-3 text-sm text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
