import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="soft-card soft-card-hover rounded-2xl p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-[#8a6a4d]">{project.category}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#111827]">{project.title}</h2>
        </div>
        <span className="rounded-full bg-white/70 px-3 py-1 text-sm text-[#8a6a4d]">
          {project.status}
        </span>
      </div>
      <p className="mt-5 text-sm leading-7 text-[#596574]">{project.summary}</p>
      <dl className="mt-6 grid gap-4 text-sm leading-6 sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-[#111827]">Problem</dt>
          <dd className="mt-1 text-[#596574]">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-semibold text-[#111827]">Approach</dt>
          <dd className="mt-1 text-[#596574]">{project.role}</dd>
        </div>
        <div>
          <dt className="font-semibold text-[#111827]">Tools / workflows</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="rounded-full bg-white/66 px-2.5 py-1 text-xs text-[#596574]">
                {tool}
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-[#111827]">Current progress</dt>
          <dd className="mt-1 text-[#596574]">{project.currentProgress}</dd>
        </div>
      </dl>
    </article>
  );
}
