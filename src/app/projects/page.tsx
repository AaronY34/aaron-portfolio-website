import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="site-shell text-[#111827]">
      <section className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="pointer-events-none absolute inset-y-0 left-6 right-6  sm:left-10 sm:right-10" />
        <div className="relative">
          <SectionHeader
            eyebrow="Projects"
            title="Systems, workflows, implementations, and ongoing builds."
            description="This page is the single place for current portfolio evidence. Projects are framed as systems or processes: what problem they address, how they are being approached, what tools are involved, and what exists now."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl  px-6 py-20 sm:px-10">
        <div className="grid gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
