import type { Project } from "@/data/projects";

type ProjectSystemCardProps = {
  project: Project;
};

export function ProjectSystemCard({ project }: ProjectSystemCardProps) {
  return (
    <article className="soft-card soft-card-hover rounded-2xl p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm text-[#8a6a4d]">{project.category}</p>
          <h3 className="mt-2 text-xl font-semibold text-[#111827]">{project.title}</h3>
        </div>
        <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-[#8a6a4d]">
          {project.status}
        </span>
      </div>
      <dl className="mt-5 space-y-4 text-sm leading-6">
        <div>
          <dt className="text-[#111827]">Problem</dt>
          <dd className="mt-1 text-[#596574]">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-[#111827]">Role</dt>
          <dd className="mt-1 text-[#596574]">{project.role}</dd>
        </div>
        <div>
          <dt className="text-[#111827]">Tools</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="rounded-full bg-white/66 px-2.5 py-1 text-xs text-[#596574]">
                {tool}
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className="text-[#111827]">Current progress</dt>
          <dd className="mt-1 text-[#596574]">{project.currentProgress}</dd>
        </div>
      </dl>
    </article>
  );
}
