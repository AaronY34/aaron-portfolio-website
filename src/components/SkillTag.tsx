type SkillTagProps = {
  label: string;
};

export function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="inline-flex rounded-full bg-white/66 px-3 py-1 text-sm text-[#596574] shadow-sm">
      {label}
    </span>
  );
}
