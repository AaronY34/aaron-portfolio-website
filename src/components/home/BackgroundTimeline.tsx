import { backgroundTimeline } from "@/data/profile";

export function BackgroundTimeline() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {backgroundTimeline.map((item) => (
        <article key={`${item.label}-${item.title}`} className="soft-card rounded-2xl p-5">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8a6a4d]">{item.label}</p>
          <h3 className="mt-3 text-lg font-semibold text-[#111827]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#596574]">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
