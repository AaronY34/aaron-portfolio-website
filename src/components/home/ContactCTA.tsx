import { profile } from "@/data/profile";

export function ContactCTA() {
  return (
    <section className="soft-card rounded-3xl p-6 text-center sm:p-10">
      <p className="eyebrow">Connect</p>
      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-[#111827] sm:text-4xl">
        Open to teams building clearer workflows, better systems, and practical AI-assisted execution.
      </h2>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={`mailto:${profile.email}`}
          className="pale-blue-button rounded-md px-5 py-3 text-sm font-semibold transition"
        >
          Email Aaron
        </a>
        <a
          href={profile.linkedin}
          className="rounded-md bg-white/70 px-5 py-3 text-sm font-semibold text-[#111827] shadow-[0_10px_28px_rgba(85,73,57,0.06)] transition hover:bg-white/90"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
