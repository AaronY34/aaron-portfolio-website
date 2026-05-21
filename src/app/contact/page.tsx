import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <main className="site-shell text-[#111827]">
      <section className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="pointer-events-none absolute inset-y-0 left-6 right-6  sm:left-10 sm:right-10" />
        <div className="relative">
          <SectionHeader
            eyebrow="Contact"
            title="Open to teams building clearer workflows and better execution systems."
            description="A simple way to connect for implementation, workflow automation, data analysis, operations, research coordination, or AI-assisted systems work."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl  px-6 py-20 sm:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl bg-white/68 p-6 shadow-[0_18px_55px_rgba(85,73,57,0.10)] md:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8a6a4d]">Positioning</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#111827]">{profile.positioning}</h2>
            <p className="mt-4 text-sm leading-7 text-[#596574]">
              Best fit: roles or collaborations that need someone comfortable with messy workflows, structured implementation, data-informed operations, and human-centered automation.
            </p>
          </article>
          <article className="rounded-2xl bg-white/68 p-6 shadow-[0_18px_55px_rgba(85,73,57,0.10)]">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8a6a4d]">Location</p>
            <p className="mt-4 text-sm leading-7 text-[#596574]">{profile.location}</p>
          </article>
        </div>

        <div className="mt-5 rounded-3xl bg-[#f3f1ed]/56 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#111827]">Connect with Aaron</h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="pale-blue-button rounded-lg px-5 py-3 text-center text-sm font-semibold transition"
            >
              Email Aaron
            </a>
            <a
              href={profile.linkedin}
              className="rounded-lg bg-white/70 px-5 py-3 text-center text-sm font-semibold text-[#111827] shadow-[0_10px_28px_rgba(85,73,57,0.06)] transition hover:bg-white/90"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
