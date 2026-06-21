"use client";

import { useState, useEffect, useRef } from "react";
import { projects, navLinks, personalInfo } from "@/data/portfolio";
import { useTheme } from "./ThemeProvider";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

type Action = {
  id: string;
  label: string;
  type: "nav" | "project" | "action";
  action: () => void;
};

export default function CommandPalette({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { toggle } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const actions: Action[] = [
    ...navLinks.map((l) => ({
      id: `nav-${l.href}`,
      label: `Go to ${l.label}`,
      type: "nav" as const,
      action: () => {
        document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    })),
    ...projects.map((p) => ({
      id: `project-${p.id}`,
      label: `Search: ${p.title}`,
      type: "project" as const,
      action: () => {
        const el = document.querySelector("#projects");
        el?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    })),
    {
      id: "theme",
      label: "Switch Theme",
      type: "action" as const,
      action: () => { toggle(); onClose(); },
    },
    {
      id: "resume",
      label: "Download Resume",
      type: "action" as const,
      action: () => { window.open(personalInfo.resumeUrl, "_blank"); onClose(); },
    },
  ];

  const filtered = query
    ? actions.filter((a) => a.label.toLowerCase().includes(query.toLowerCase()))
    : actions;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]" onClick={onClose}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg mx-4 neu-card p-2 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search pages, projects, or actions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="neu-input w-full px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
        />
        <div className="mt-2 max-h-64 overflow-y-auto">
          {filtered.map((action) => (
            <button
              key={action.id}
              onClick={action.action}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--text-primary)] rounded-lg hover:bg-[var(--dark-shadow)]/10 transition-colors text-left"
            >
              <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)] font-medium uppercase">
                {action.type === "nav" ? "Go" : action.type === "project" ? "Project" : "Action"}
              </span>
              {action.label}
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="px-4 py-8 text-sm text-[var(--text-secondary)] text-center">
              No results for &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
