export function HeroSystemMap() {
  return (
    <div className="hero-image-field relative h-full min-h-[520px] w-full overflow-hidden lg:h-[89vh]">
      <img
        src="/images/architectural-hero.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,248,0.04),rgba(17,24,39,0.10))]" />
    </div>
  );
}
