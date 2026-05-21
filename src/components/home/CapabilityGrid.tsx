import { capabilities } from "@/data/profile";

export function CapabilityGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {capabilities.map((capability, index) => (
        <article
          key={capability.title}
          className="soft-card soft-card-hover group rounded-2xl p-6"
        >
          <p className="text-sm text-[#8a6a4d]">0{index + 1}</p>
          <h3 className="mt-4 text-xl font-semibold text-[#111827]">{capability.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#596574]">{capability.description}</p>
        </article>
      ))}
    </div>
  );
}
