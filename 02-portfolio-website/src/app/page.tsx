import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-moss">
          {profile.positioning}
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/75">
          {profile.summary}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <section>
            <h2 className="text-base font-semibold text-steel">Focus</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-ink/75">
              {profile.focusAreas.map((area) => (
                <li key={area} className="border-l-2 border-clay/70 pl-3">
                  {area}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-steel">Featured Project</h2>
            <div className="mt-4 border-t border-ink/15 pt-4">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold">{profile.projects[0].title}</h3>
                <span className="text-sm text-moss">{profile.projects[0].status}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink/75">
                {profile.projects[0].description}
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
