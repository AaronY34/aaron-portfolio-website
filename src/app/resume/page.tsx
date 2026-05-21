import { SectionHeader } from "@/components/SectionHeader";
import { SkillTag } from "@/components/SkillTag";
import { capabilities, profile } from "@/data/profile";

const experienceNotes = [
  {
    title: "ALBA International Consulting",
    role: "System Implementation Consultant",
    detail:
      "Led implementation of a custom ERP platform that replaced manual Excel workflows, supported sales/service/management teams, coordinated with developers, created guides, and trained users in English and Mandarin.",
  },
  {
    title: "UBC ICON Lab",
    role: "Research Assistant",
    detail:
      "Coordinated research work, supported drone testing preparation, contributed to drone systems and data workflows, and co-authored research published at BuildSys 2024.",
  },
  {
    title: "Education",
    role: "BCIT Business IT Management + UBC Psychology & Computer Science",
    detail:
      "Built a cross-domain base in ERP/CRM implementation, business analytics, Python, MySQL, software architecture, data structures, and human behavior.",
  },
];

export default function ResumePage() {
  return (
    <main className="site-shell text-[#111827]">
      <section className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="pointer-events-none absolute inset-y-0 left-6 right-6  sm:left-10 sm:right-10" />
        <div className="relative">
          <SectionHeader
            eyebrow="Resume"
            title="Implementation background, presented as a working narrative."
            description="A concise view of the experience behind the portfolio: business systems implementation, workflow automation, data analysis, research coordination, and practical execution support."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl  px-6 py-20 sm:px-10">
        <div className="grid gap-5 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article key={capability.title} className="rounded-2xl bg-white/68 p-6 shadow-[0_18px_55px_rgba(85,73,57,0.10)]">
              <h2 className="text-xl font-semibold tracking-tight text-[#111827]">{capability.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#596574]">{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8a6a4d]">Experience Timeline</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111827]">From implementation to research operations.</h2>
        </div>
        <div className="grid gap-4">
          {experienceNotes.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white/68 p-6 shadow-[0_18px_55px_rgba(85,73,57,0.10)]">
              <p className="text-sm font-medium text-[#8a6a4d]">{item.role}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#111827]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#596574]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8a6a4d]">Skills / Tools</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#111827]">A practical mix of systems, data, and communication.</h2>
            <p className="mt-5 text-base leading-8 text-[#596574]">
              The toolset matters because it supports implementation: understanding requirements, organizing data, documenting workflows, and helping people adopt better systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.skills.concat(["ERP/CRM", "Power BI", "Tableau", "Python", "SQL", "Excel", "Mandarin / English"]).map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
        <div className="rounded-3xl bg-[#f3f1ed]/56 p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8a6a4d]">Current Direction</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#111827]">
            Moving toward AI-assisted systems, workflow orchestration, implementation consulting, and automation-driven execution systems.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#596574]">
            The current portfolio work is intentionally focused on building visible evidence: systems that organize work, reduce friction, keep humans in the loop, and make progress easier to inspect.
          </p>
        </div>
      </section>
    </main>
  );
}
