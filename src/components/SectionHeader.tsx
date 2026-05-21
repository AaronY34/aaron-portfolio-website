type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="eyebrow">{eyebrow}</p>
      ) : null}
      <h1 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-tight text-[#111827] sm:text-6xl">
        {title}
      </h1>
      {description ? <p className="mt-6 text-base leading-8 text-[#596574]">{description}</p> : null}
    </div>
  );
}
