import { thinkingPrinciples } from "@/data/profile";

export function ThinkingPrinciples() {
  return (
    <div className="grid gap-3 md:grid-cols-5">
      {thinkingPrinciples.map((principle, index) => (
        <div key={principle} className="bg-white/40 px-4 py-5 shadow-[0_14px_38px_rgba(85,73,57,0.045)]">
          <p className="text-sm text-[#8a6a4d]">0{index + 1}</p>
          <p className="mt-3 text-sm leading-6 text-[#596574]">{principle}</p>
        </div>
      ))}
    </div>
  );
}
