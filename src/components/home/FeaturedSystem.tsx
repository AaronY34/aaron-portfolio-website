import type { Project } from "@/data/projects";

type FeaturedSystemProps = {
  project: Project;
};

const systemSteps = [
  "Track Opportunities",
  "Analyze & Match",
  "Generate Materials",
  "Daily Execution",
  "Human Review",
  "Track Progress",
];

export function FeaturedSystem({ project }: FeaturedSystemProps) {
  return (
    <section
      id="systems"
      className="grid gap-8 bg-[#fafaf8]/78 p-6 shadow-[0_18px_55px_rgba(85,73,57,0.08)] lg:grid-cols-[0.92fr_1.08fr] lg:p-8"
    >
      <div>
        <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-sm text-[#8a6a4d]">
          {project.status}
        </span>
        <p className="eyebrow mt-6">
          Featured System
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
          {project.title}
        </h2>
        <p className="mt-5 text-base leading-8 text-[#344154]">{project.summary}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {["AI-assisted", "Workflow Automation", project.status].map((item) => (
            <span key={item} className="rounded-md bg-white/78 px-3 py-1.5 text-xs text-[#344154]">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#f7fbff]/76 p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(96,165,250,0.16),transparent_11rem),linear-gradient(rgba(96,165,250,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.08)_1px,transparent_1px)] bg-[size:auto,48px_48px,48px_48px]" />
        <div className="relative grid gap-4 sm:grid-cols-2">
          {systemSteps.map((step, index) => (
            <div key={step} className="relative rounded-md bg-white/76 px-4 py-3 text-sm text-[#344154] shadow-sm">
              <span className="mr-3 font-semibold text-[#2563eb]">0{index + 1}</span>
              {step}
            </div>
          ))}
        </div>
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M28 24 C40 24 42 40 50 40 C58 40 60 24 72 24" fill="none" stroke="rgba(37,99,235,0.22)" strokeWidth="0.45" />
          <path d="M28 50 C40 50 42 64 50 64 C58 64 60 50 72 50" fill="none" stroke="rgba(37,99,235,0.18)" strokeWidth="0.45" />
          <path d="M28 76 C43 76 48 64 50 64" fill="none" stroke="rgba(37,99,235,0.16)" strokeWidth="0.45" />
        </svg>
      </div>
    </section>
  );
}
