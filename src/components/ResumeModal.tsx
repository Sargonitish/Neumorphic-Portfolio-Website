"use client";

import { personalInfo } from "@/data/portfolio";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl max-h-[80vh] neu-card p-8 animate-scale-in overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)]">Resume</h3>
          <button onClick={onClose} className="neu-circle w-8 h-8 flex items-center justify-center text-sm">
            ✕
          </button>
        </div>

        <div className="neu-pressed-sm rounded-xl p-6 mb-6">
          <p className="text-lg font-bold text-[var(--text-primary)]">{personalInfo.name}</p>
          <p className="text-sm text-[var(--accent)]">{personalInfo.title}</p>
          <p className="text-xs text-[var(--text-secondary)] mt-1">{personalInfo.email}</p>
        </div>

        <div className="space-y-4 mb-6">
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{personalInfo.bio}</p>
        </div>

        <a
          href={personalInfo.resumeUrl}
          download
          className="neu-btn w-full py-3 rounded-xl text-center text-sm font-medium text-[var(--accent)] block"
        >
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
}
