"use client";

import { featuredProjects } from "@/data/portfolio";

export default function FeaturedProjects() {
  return (
    <section id="featured" className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Featured Work
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">
            Projects I&apos;m Proud Of
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, i) => (
            <div
              key={project.id}
              className="neu-card group cursor-pointer overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative h-48 overflow-hidden">
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
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-[var(--dark-shadow)]/10 text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-xs">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
