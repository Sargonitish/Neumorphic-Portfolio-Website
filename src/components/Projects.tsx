"use client";

import { useState, useMemo } from "react";
import { projects } from "@/data/portfolio";

const categories = ["all", "web", "mobile", "ui", "opensource"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCategory = filter === "all" || p.category === filter;
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [filter, search]);

  return (
    <section id="projects" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Projects
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            All Work
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`neu-btn px-5 py-2 rounded-xl text-xs sm:text-sm font-medium capitalize transition-colors ${
                  filter === cat
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                {cat === "opensource" ? "Open Source" : cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="neu-input px-4 py-2.5 rounded-xl text-sm w-full sm:w-56 text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="neu-card group cursor-pointer overflow-hidden animate-fade-up"
              style={{ animationDelay: `${Math.min(i * 0.05, 0.3)}s` }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)";
              }}
            >
              <div className="relative h-44 overflow-hidden rounded-t-[20px]">
                <div className="w-full h-full bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent-secondary)]/10 flex items-center justify-center text-4xl">
                  🚀
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-base font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-[var(--dark-shadow)]/10 text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neu-btn px-3 py-1.5 rounded-lg text-[var(--text-secondary)]"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neu-btn px-3 py-1.5 rounded-lg text-[var(--accent)]"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={`/projects/${project.id}`}
                    className="neu-btn px-3 py-1.5 rounded-lg text-[var(--text-secondary)] ml-auto"
                  >
                    Case Study →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-16 text-[var(--text-secondary)]">
            No projects match your search.
          </p>
        )}
      </div>
    </section>
  );
}
