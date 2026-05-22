import Image from "next/image";
import { NarrativeScrollController } from "@/components/NarrativeScrollController";
import { profile } from "@/data/profile";

type ProjectMoment = {
  title: string;
  caption: string;
  image: string;
  imageFit?: "cover" | "contain";
  imageAspect?: "wide" | "video";
  videoEmbedUrl?: string;
  href?: string;
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
        title: "UGL Operation System",
        caption:
          "Day-to-day operations organized into clearer workflows for inventory, events, sales tracking, and front-desk procedures. Repeated work became easier to follow, record, and hand over. A practical structure for reducing workplace friction.",
        image: "/images/project-ugl-operation-system.png",
      },
      {
        title: "ALBA CRM Implementation",
        caption:
          "Scattered Excel records became a customized multi-user ERP / CRM system. Client records, consultant workflows, dashboards, and service processes were connected in one shared space. The business workflow became smoother, clearer, and easier to scale.",
        image: "/images/project-alba-erp-crm-implementation.png",
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
        title: "ALBA CRM Automation",
        caption:
          "The structured CRM became a more active workflow system. Guided intake, client-side participation, and automation features reduced repeated consultant-only data entry. Human review remained, but less attention was spent on collecting information manually.",
        image: "/images/projects/alba-automation-workflow-v2.png",
        imageFit: "contain",
        imageAspect: "video",
      },
      {
        title: "Job Landing OS",
        caption:
          "A personal job search workflow turned into an AI-assisted execution system. Job information, opportunity filtering, application materials, tracking, and review were organized into one loop. Repetitive execution was reduced so attention could return to judgment, fit, and direction.",
        image: "/images/projects/job-landing-os-workflow-v2.png",
        imageFit: "contain",
        imageAspect: "video",
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
        title: "ICON Drone Demo",
        caption:
          "Systems thinking moved from screens into physical environments. UAV systems were built and tested for indoor and outdoor inspection scenarios. Hardware, flight behavior, safety, and data collection had to work together under real constraints.",
        image: "/images/project-drone-research.png",
        videoEmbedUrl:
          "https://player.vimeo.com/video/1194562828?title=0&byline=0&portrait=0&badge=0&autopause=0",
      },
      {
        title: "Drone Data Pipeline",
        caption:
          "Field data became a repeatable pipeline for analysis and understanding. Data acquisition, processing, visualization, and experiment feedback were connected into one workflow. Difficult spaces became easier to measure, reconstruct, and learn from.",
        image: "/images/project-drone-research.png",
        href: "https://dl.acm.org/doi/abs/10.1145/3671127.3698172",
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
        title: "\u56db\u6642 Si Shi",
        caption:
          "A digital space for exploring time, rhythm, and seasonal experience. Interaction and visual atmosphere turn cultural perception into a spatial interface. Systems become a medium for attention, aesthetics, and meaning.",
        image: "/images/project-si-shi.png",
        imageFit: "contain",
        imageAspect: "video",
        href: "https://www.iv-space.com/",
      },
      {
        title: "More exciting projects are coming soon",
        caption:
          "A space for reflective, experimental, and philosophical projects. Some may be technically simple, but conceptually more personal. The focus shifts from what systems do to what systems make possible.",
        image: "/images/project-more-exciting-coming-soon.png",
        imageFit: "contain",
      },
    ],
  },
];

function AboutSection() {
  return (
    <section id="about" className="about-section snap-section" data-scroll-section data-scroll-order="1">
      <div className="about-copy">
        <div>
          <h2>About Me</h2>
          <p>I work at the intersection of psychology, business systems, data, and automation.</p>
          <p>
            Most of my work begins with messy processes:
            <br />
            unclear responsibilities,
            <br />
            manual repetition,
            <br />
            scattered information,
            <br />
            and too much attention spent on the wrong things.
          </p>
          <p>I&apos;m interested in how structure changes action.</p>
          <p>
            How workflows reduce friction.
            <br />
            How systems protect attention.
            <br />
            How technology can support people
            <br />
            without replacing human judgment.
          </p>
        </div>
      </div>
      <div className="about-image-panel">
        <div className="about-image-frame">
          <Image
            src="/images/about-procedure-architecture.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 32vw, 92vw"
            className="about-image about-image-desktop object-cover"
          />
          <Image
            src="/images/about-mobile-architecture.png"
            alt=""
            fill
            priority
            sizes="92vw"
            className="about-image about-image-mobile object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function AtmosphericSection({
  id,
  image,
  scrollOrder,
  children,
}: {
  id?: string;
  image: string;
  scrollOrder: number;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="atmospheric-section snap-section relative min-h-screen overflow-hidden"
      data-scroll-section
      data-scroll-order={scrollOrder}
    >
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,245,237,0.94),rgba(248,245,237,0.64)_42%,rgba(248,245,237,0.12)),linear-gradient(180deg,rgba(248,245,237,0.15),rgba(248,245,237,0.28))]" />
      <div className="atmospheric-content relative mx-auto flex min-h-screen max-w-6xl items-center justify-start px-6 py-24 sm:px-10">
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

function ProjectMomentView({ project, index }: { project: ProjectMoment; index: number }) {
  const mediaFrameClass = project.videoEmbedUrl
    ? "relative aspect-video w-full overflow-hidden rounded-[4px] bg-[var(--bg-soft)]"
    : `relative ${
        project.imageAspect === "video" ? "aspect-video" : "aspect-[16/10]"
      } w-full overflow-hidden rounded-[4px] ${
        project.imageFit === "contain" ? "bg-[var(--bg-soft)]" : "bg-[var(--surface-soft)]"
      }`;

  return (
    <article
      className="project-moment snap-section flex min-h-screen flex-col justify-center px-6 py-20 sm:px-10 lg:px-[6vw]"
      style={{ zIndex: index + 1 }}
    >
      <div className={mediaFrameClass}>
        {project.videoEmbedUrl ? (
          <iframe
            src={project.videoEmbedUrl}
            title={project.title}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 92vw"
            className={project.imageFit === "contain" ? "object-contain" : "object-cover"}
          />
        )}
        {project.videoEmbedUrl || project.imageFit === "contain" ? null : (
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,245,237,0.04),rgba(248,245,237,0.16))]" />
        )}
      </div>
      <div className="mt-7 max-w-[520px]">
        <h3 className="text-[clamp(1.4rem,2vw,2.15rem)] font-medium tracking-[-0.025em] text-[var(--text-main)]">
          {project.title}
        </h3>
        <p className="mt-2 text-base leading-7 text-[var(--text-secondary)]">{project.caption}</p>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex text-sm text-[var(--accent-warm)] transition hover:text-[var(--text-main)]"
          >
            View project {"\u2197"}
          </a>
        ) : project.videoEmbedUrl ? null : (
          <span className="mt-5 inline-flex text-sm text-[var(--accent-warm)]">View project {"\u2197"}</span>
        )}
      </div>
    </article>
  );
}

function projectCaptionLines(caption: string) {
  return caption.match(/[^.]+(?:\.|$)/g)?.map((line) => line.trim()).filter(Boolean) ?? [caption];
}

function MobileProjectMomentView({ chapter, project }: { chapter: Chapter; project: ProjectMoment }) {
  const mediaClassName = `mobile-project-media ${
    project.imageAspect === "video" || project.videoEmbedUrl ? "mobile-project-media-video" : "mobile-project-media-wide"
  }`;

  return (
    <section className="mobile-project-screen snap-section" data-scroll-section>
      <div className="mobile-chapter-bar">{chapter.title}</div>
      <article className="mobile-project-content">
        <div className={mediaClassName}>
          {project.videoEmbedUrl ? (
            <iframe
              src={project.videoEmbedUrl}
              title={project.title}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <Image src={project.image} alt="" fill sizes="100vw" className="object-contain" />
          )}
        </div>
        <h3>{project.title}</h3>
        <div className="mobile-project-description">
          {projectCaptionLines(project.caption).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer">
            View project {"\u2197"}
          </a>
        ) : null}
      </article>
    </section>
  );
}

function MobileChapterSection({ chapter }: { chapter: Chapter }) {
  return (
    <section className="mobile-chapter-section lg:hidden">
      <section className="mobile-chapter-intro snap-section" data-scroll-section>
        <div>
          <p>{chapter.number}</p>
          <h2>{chapter.title}</h2>
          <div>
            {chapter.text.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div className="mobile-chapter-compress-bar" aria-hidden="true">
          {chapter.title}
        </div>
      </section>
      {chapter.projects.map((project) => (
        <MobileProjectMomentView key={project.title} chapter={chapter} project={project} />
      ))}
    </section>
  );
}

function ChapterSection({ chapter, orderStart }: { chapter: Chapter; orderStart: number }) {
  const projectColumn = (
    <div className={`${chapter.reverse ? "lg:order-1" : "lg:order-2"} lg:col-span-1`}>
      {chapter.projects.map((project, index) => (
        <div key={project.title} className="hidden lg:block" data-scroll-section data-scroll-order={orderStart + index}>
          <ProjectMomentView project={project} index={index} />
        </div>
      ))}
    </div>
  );

  const textColumn = (
    <div className={`${chapter.reverse ? "lg:order-2" : "lg:order-1"} lg:sticky lg:top-0 lg:col-span-1 lg:h-screen lg:self-start`}>
      <ChapterText chapter={chapter} />
    </div>
  );

  return (
    <div id={chapter.id}>
      <section
        className="chapter-section relative hidden lg:block"
        style={{ minHeight: `${Math.max(chapter.projects.length, 1) * 100}vh` }}
      >
        <div className="chapter-grid grid min-h-screen gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-0 lg:px-0">
          {textColumn}
          {projectColumn}
        </div>
      </section>
      <MobileChapterSection chapter={chapter} />
    </div>
  );
}

export default function Home() {
  let projectOrder = 2;

  return (
    <main className="narrative-root bg-[var(--bg-main)] text-[var(--text-main)]">
      <NarrativeScrollController />
      <section className="snap-section relative min-h-screen px-6 text-center" data-scroll-section data-scroll-order="0">
        <div className="absolute left-1/2 top-[58vh] w-full max-w-[900px] -translate-x-1/2 -translate-y-1/2 px-6">
          <h1 className="text-[clamp(3.25rem,6vw,5.5rem)] font-medium leading-[1.1] tracking-[-0.045em] text-[var(--text-main)]">
            Hello, I&apos;m Aaron.
          </h1>
          <p className="mt-10 text-[clamp(1.25rem,2vw,1.875rem)] leading-[1.5] tracking-[-0.02em] text-[var(--text-secondary)]">
            I explore AI, systems, and automation
          </p>
          <p className="mt-2 text-[clamp(1.25rem,2vw,1.875rem)] leading-[1.5] tracking-[-0.02em] text-[var(--text-secondary)]">
            to make space for what matters.
          </p>
        </div>
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="hero-scroll-cue text-2xl text-[var(--text-muted)] transition hover:text-[var(--accent-warm)]"
        >
          {"\u2193"}
        </a>
      </section>

      <AboutSection />

      <div id="systems">
        {chapters.map((chapter) => {
          const orderStart = projectOrder;
          projectOrder += chapter.projects.length;

          return <ChapterSection key={chapter.id} chapter={chapter} orderStart={orderStart} />;
        })}
      </div>

      <AtmosphericSection id="contact" image="/images/architectural-warm-arch.png" scrollOrder={projectOrder}>
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
