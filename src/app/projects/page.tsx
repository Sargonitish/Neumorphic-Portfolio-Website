"use client";

import { projects } from "@/data/portfolio";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
            All Projects
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            A complete collection of my work — from web apps to open source contributions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="neu-card p-6 group"
            >
              <div className="neu-circle w-14 h-14 flex items-center justify-center mb-4 text-2xl">
                🚀
              </div>
              <h2 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-[var(--text-secondary)] mb-3 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded bg-[var(--dark-shadow)]/10 text-[var(--text-secondary)]">
                    {t}
                  </span>
                ))}
              </div>
              <span className="inline-block mt-4 text-sm text-[var(--accent)] font-medium">
                View Case Study →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
