import Image from "next/image";
import { profile } from "@/data/profile";

type ProjectMoment = {
  title: string;
  caption: string;
  image: string;
};

type Chapter = {
  number: string;
  id: string;
  title: string;
  text: string[];
  projects: ProjectMoment[];
  reverse?: boolean;
};

const chapters: Chapter[] = [
  {
    number: "01",
    id: "procedure",
    title: "Systems as Procedure",
    text: [
      "Before automation,",
      "there must be structure.",
      "This part is about turning daily work into visible workflows:",
      "clear steps, shared records, standard procedures, and smoother coordination.",
      "The goal is simple:",
      "make work easier to run.",
    ],
    projects: [
      {
        title: "UGL Operations System",
        caption: "Inventory, event, and operational workflow design.",
        image: "/images/architectural-hero.png",
      },
      {
        title: "ALBA ERP / CRM Implementation",
        caption: "From manual Excel processes to structured business systems.",
        image: "/images/architectural-human-space.png",
      },
    ],
  },
  {
    number: "02",
    id: "active",
    title: "Systems Become Active",
    reverse: true,
    text: [
      "Once a workflow becomes clear,",
      "parts of it can begin to run on their own.",
      "Automation is not about removing people from the process.",
      "It is about removing repeated friction,",
      "so attention can be spent where judgment matters.",
    ],
    projects: [
      {
        title: "ALBA ERP / CRM Automation",
        caption: "Extending implementation work with dashboards, process automation, and workflow support.",
        image: "/images/architectural-warm-arch.png",
      },
      {
        title: "Job Search Agent OS",
        caption: "A human-in-the-loop system for tracking, preparing, and improving job applications.",
        image: "/images/architectural-hero.png",
      },
    ],
  },
  {
    number: "03",
    id: "reality",
    title: "Systems Interacting with Reality",
    text: [
      "Some systems do not stay inside screens.",
      "They sense, move, measure, and interact with physical environments.",
      "This part explores how systems extend human capability into spaces that are difficult,",
      "risky, or hard to observe directly.",
    ],
    projects: [
      {
        title: "Drone Data Pipeline",
        caption: "Using UAV systems to collect, process, and understand spatial data.",
        image: "/images/architectural-human-space.png",
      },
    ],
  },
  {
    number: "04",
    id: "beyond",
    title: "Systems Beyond Structure",
    reverse: true,
    text: [
      "At some point,",
      "systems stop being only tools.",
      "They become a way to ask better questions:",
      "What should be automated?",
      "What should remain human?",
      "What do systems protect, and what do they risk flattening?",
      "This part is less about building systems,",
      "and more about understanding what systems make possible.",
    ],
    projects: [
      {
        title: "Si Shi",
        caption: "A reflection on time, rhythm, and seasonal experience through digital space.",
        image: "/images/architectural-warm-arch.png",
      },
    ],
  },
];

function AtmosphericSection({
  id,
  image,
  children,
  align = "left",
}: {
  id?: string;
  image: string;
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <section id={id} className="relative min-h-screen overflow-hidden">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" priority={id === "about"} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,245,237,0.94),rgba(248,245,237,0.64)_42%,rgba(248,245,237,0.12)),linear-gradient(180deg,rgba(248,245,237,0.15),rgba(248,245,237,0.28))]" />
      <div
        className={`relative mx-auto flex min-h-screen max-w-6xl items-center px-6 py-24 sm:px-10 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <div className="max-w-[560px] text-[clamp(1rem,1.45vw,1.24rem)] leading-[1.72] text-[var(--text-main)]">
          {children}
        </div>
      </div>
    </section>
  );
}

function ChapterText({ chapter }: { chapter: Chapter }) {
  return (
    <div className="mx-auto flex max-w-[470px] flex-col justify-center py-20 lg:h-screen">
      <p className="text-sm text-[var(--text-muted)]">{chapter.number}</p>
      <h2 className="mt-12 text-[clamp(2.35rem,4vw,4.8rem)] font-medium leading-[1.04] tracking-[-0.035em] text-[var(--text-main)]">
        {chapter.title}
      </h2>
      <div className="mt-7 h-px w-14 bg-[var(--accent-warm)]/45" />
      <div className="mt-9 space-y-2 text-[clamp(1rem,1.25vw,1.18rem)] leading-[1.72] text-[var(--text-secondary)]">
        {chapter.text.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function ProjectMomentView({ project }: { project: ProjectMoment }) {
  return (
    <article className="flex min-h-[82vh] flex-col justify-center py-20 lg:min-h-screen">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[4px]">
        <Image src={project.image} alt="" fill sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,237,0.04),rgba(248,245,237,0.16))]" />
      </div>
      <div className="mt-7 max-w-[520px]">
        <h3 className="text-[clamp(1.4rem,2vw,2.15rem)] font-medium tracking-[-0.025em] text-[var(--text-main)]">
          {project.title}
        </h3>
        <p className="mt-2 text-base leading-7 text-[var(--text-secondary)]">{project.caption}</p>
        <span className="mt-5 inline-flex text-sm text-[var(--accent-warm)]">View project ↗</span>
      </div>
    </article>
  );
}

function ChapterSection({ chapter }: { chapter: Chapter }) {
  const projectColumn = (
    <div className="space-y-0 lg:col-span-1">
      {chapter.projects.map((project) => (
        <ProjectMomentView key={project.title} project={project} />
      ))}
    </div>
  );

  const textColumn = (
    <div className="lg:sticky lg:top-0 lg:col-span-1 lg:self-start">
      <ChapterText chapter={chapter} />
    </div>
  );

  return (
    <section
      id={chapter.id}
      className="relative border-t border-[var(--line-soft)]"
      style={{ minHeight: `${Math.max(chapter.projects.length, 1) * 100}vh` }}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px bg-[rgba(30,30,28,0.08)] lg:block" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20">
        {chapter.reverse ? (
          <>
            {projectColumn}
            {textColumn}
          </>
        ) : (
          <>
            {textColumn}
            {projectColumn}
          </>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="narrative-root bg-[var(--bg-main)] text-[var(--text-main)]">
      <section className="flex min-h-screen items-center justify-center px-6 text-center">
        <div className="max-w-[900px]">
          <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-medium leading-[1.1] tracking-[-0.045em] text-[var(--text-main)]">
            Hello, I&apos;m Aaron.
          </h1>
          <p className="mt-8 text-[clamp(1.35rem,2.2vw,2.15rem)] leading-[1.28] tracking-[-0.025em] text-[var(--text-secondary)]">
            I explore AI, systems, and automation
          </p>
          <p className="mt-3 text-[clamp(1.35rem,2.2vw,2.15rem)] leading-[1.28] tracking-[-0.025em] text-[var(--text-secondary)]">
            to make space for what matters.
          </p>
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="mx-auto mt-28 block w-fit text-2xl text-[var(--text-muted)] transition hover:text-[var(--accent-warm)]"
          >
            ↓
          </a>
        </div>
      </section>

      <AtmosphericSection id="about" image="/images/architectural-human-space.png">
        <p>I work at the intersection of psychology, business systems, data, and automation.</p>
        <p className="mt-8">
          Most of my work begins with messy processes: unclear responsibilities, manual repetition, scattered information, and too much attention spent on the wrong things.
        </p>
        <p className="mt-8">I&apos;m interested in how structure changes action.</p>
        <p className="mt-8">
          How workflows reduce friction. How systems protect attention. How technology can support people without replacing human judgment.
        </p>
      </AtmosphericSection>

      <div id="systems">
        {chapters.map((chapter) => (
          <ChapterSection key={chapter.id} chapter={chapter} />
        ))}
      </div>

      <AtmosphericSection id="contact" image="/images/architectural-warm-arch.png">
        <p>Over time, I became less interested in what systems can do for us,</p>
        <p className="mt-7">and more interested in what systems enable us to preserve.</p>
        <p className="mt-7">
          The more responsibility systems can absorb, the more attention humans can devote to creativity, judgment, local context, culture, aesthetics, and meaningful work.
        </p>
        <p className="mt-7">To me, systems are not the destination.</p>
        <p className="mt-7">They are the infrastructure that makes deeper human experiences possible.</p>
        <div className="mt-14 border-t border-[var(--line-warm)] pt-8">
          <p className="text-[clamp(1.55rem,2.4vw,2.6rem)] font-medium tracking-[-0.025em]">Let&apos;s connect.</p>
          <div className="mt-5 flex gap-5 text-base text-[var(--text-secondary)]">
            <a href={`mailto:${profile.email}`} className="transition hover:text-[var(--accent-warm)]">
              Email
            </a>
            <span aria-hidden="true">|</span>
            <a href={profile.linkedin} className="transition hover:text-[var(--accent-warm)]">
              LinkedIn
            </a>
          </div>
        </div>
      </AtmosphericSection>
    </main>
  );
}
