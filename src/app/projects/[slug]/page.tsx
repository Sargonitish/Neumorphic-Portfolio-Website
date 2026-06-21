import { projects, projectCaseStudies } from "@/data/portfolio";
import CaseStudyContent from "./CaseStudyContent";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  const study = projectCaseStudies[slug];

  if (!project || !study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-[var(--text-primary)] mb-4">Project Not Found</h1>
          <a href="/" className="neu-btn px-6 py-3 text-sm text-[var(--accent)]">Back Home</a>
        </div>
      </div>
    );
  }

  return <CaseStudyContent project={project} study={study} />;
}
