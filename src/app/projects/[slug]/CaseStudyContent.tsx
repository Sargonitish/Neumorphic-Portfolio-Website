"use client";

import Link from "next/link";
import type { Project } from "@/types";

interface CaseStudyContentProps {
  project: Project;
  study: {
    problem: string;
    research: string;
    design: string;
    development: string;
    challenges: string;
    results: string;
    lessons: string;
  };
}

export default function CaseStudyContent({ project, study }: CaseStudyContentProps) {
  const sections = [
    { title: "Problem", content: study.problem },
    { title: "Research", content: study.research },
    { title: "Design", content: study.design },
    { title: "Development", content: study.development },
    { title: "Challenges", content: study.challenges },
    { title: "Results", content: study.results },
    { title: "Lessons Learned", content: study.lessons },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/#projects" className="neu-btn px-4 py-2 text-sm text-[var(--text-secondary)] inline-block mb-8">
          ← Back to Projects
        </Link>

        <div className="neu-card p-8 sm:p-12 mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
              {project.category}
            </span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((t) => (
              <span key={t} className="text-sm px-3 py-1 rounded-lg bg-[var(--dark-shadow)]/10 text-[var(--text-secondary)]">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="neu-btn px-5 py-2.5 text-sm text-[var(--text-secondary)]">
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="neu-btn px-5 py-2.5 text-sm text-[var(--accent)]">
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={section.title} className="neu-card p-8 animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
              <h2 className="font-heading text-xl font-semibold text-[var(--accent)] mb-3">{section.title}</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
