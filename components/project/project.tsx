import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, type Project } from "@/types/projects";
import { FadeIn } from "@/components/ui/motion-primitive";

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the work
              I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <article className="project-card flex cursor-pointer flex-col gap-0 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
          {/* ── Thumbnail ── */}
          <div
            className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
            style={{ aspectRatio: "16 / 10" }}
          >
            <div className="project-card__image-inner">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                className="object-cover"
                priority={index < 2}
              />
            </div>

            {/* ── Hover overlay ── */}
            <div className="project-card__overlay pointer-events-none absolute inset-0 flex items-center justify-center rounded-2xl bg-foreground/0 transition-all duration-500">
              <span className="project-card__ext-icon inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-lg backdrop-blur-sm transition-all duration-500">
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="flex flex-col gap-3 px-1.5 pt-4 pb-2">
            {/* Title + arrow */}
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[18px] font-semibold leading-[1.25] tracking-tight text-foreground sm:text-[20px]">
                {project.title}
              </h3>
              <ArrowUpRight
                className="mt-0.5 h-4 w-4 shrink-0 text-foreground/40 transition-colors duration-300"
                aria-hidden="true"
              />
            </div>

            {/* Description */}
            <p className="line-clamp-2 text-[13.5px] leading-[1.55] tracking-tight text-foreground/55 sm:text-[14.5px]">
              {project.desc[0]}
            </p>

            {/* Meta: Role + Year */}
            <div className="flex items-center gap-2 text-[12px] tracking-tight text-foreground/45">
              <span className="font-medium">{project.Role}</span>
              <span className="inline-block h-0.5 w-0.5 rounded-full bg-foreground/30" />
              <span>{project.year}</span>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-md border border-foreground/8 bg-foreground/[0.03] px-2 py-0.5 text-[11px] font-medium tracking-tight text-foreground/55 transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </FadeIn>
  );
}
