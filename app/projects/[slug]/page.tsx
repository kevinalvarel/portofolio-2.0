import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Code2, Globe } from "lucide-react";
import { PROJECTS, getProjectBySlug } from "@/types/projects";
import { ProjectDetailClient } from "@/components/project/project-detail-client";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found — Kevin Alvarel" };
  }

  return {
    title: `${project.title} — Kevin Alvarel`,
    description: project.desc[0],
  };
}

/* ── Page ── */

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-36 pb-24 sm:px-10 sm:pt-48 sm:pb-32">
        {/* ── Back link ── */}
        <Link
          href="/projects"
          className="focus-ring group mb-10 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground/50 transition-colors hover:text-foreground sm:mb-14"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          All projects
        </Link>

        {/* ── Header ── */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-14">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5 text-[13px] tracking-tight text-foreground/45">
              <span className="font-medium">{project.Role}</span>
              <span className="inline-block h-0.5 w-0.5 rounded-full bg-foreground/30" />
              <span>{project.year}</span>
            </div>

            <h1 className="font-serif text-[2.25rem] font-medium leading-[1.08] tracking-tight text-foreground md:text-[2.75rem] lg:text-[3.25rem]">
              {project.title}
            </h1>
          </div>

          {/* Description paragraphs */}
          <div className="flex max-w-[65ch] flex-col gap-3">
            {project.desc.map((paragraph, i) => (
              <p
                key={i}
                className="text-[16px] leading-[1.6] tracking-tight text-foreground/60 sm:text-[18px]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.preview ? (
              <a
                href={
                  project.preview.startsWith("http")
                    ? project.preview
                    : `https://${project.preview}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group inline-flex items-center gap-2.5 rounded-xl border border-foreground/8 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:bg-foreground/85"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                Live Preview
                <ArrowUpRight
                  className="h-3.5 w-3.5 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}

            {project.code ? (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group inline-flex items-center gap-2.5 rounded-xl border border-foreground/8 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground/5"
              >
                <Code2 className="h-4 w-4" aria-hidden="true" />
                Source Code
                <ArrowUpRight
                  className="h-3.5 w-3.5 opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}
          </div>
        </div>

        {/* ── Tech stack ── */}
        <div className="mb-10 sm:mb-14">
          <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-widest text-foreground/35">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-lg border border-foreground/8 bg-foreground/[0.03] px-3.5 py-1.5 text-[13px] font-medium tracking-tight text-foreground/60 transition-colors duration-300 hover:border-foreground/14 hover:bg-foreground/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Hero image ── */}
        <div className="detail-hero-image ring-foreground/5 relative mb-10 w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1 sm:mb-14 sm:rounded-3xl">
          <div style={{ aspectRatio: "16 / 9" }} className="relative w-full">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(min-width: 1100px) 1100px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* ── Image gallery (client component for interactivity) ── */}
        {project.images.length > 1 ? (
          <ProjectDetailClient images={project.images} title={project.title} />
        ) : null}

        {/* ── Live preview embed ── */}
        {project.preview ? (
          <div className="mt-10 sm:mt-14">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[13px] font-semibold uppercase tracking-widest text-foreground/35">
                Live Preview
              </h2>
              <a
                href={
                  project.preview.startsWith("http")
                    ? project.preview
                    : `https://${project.preview}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group inline-flex items-center gap-1.5 text-[13px] font-medium tracking-tight text-foreground/45 transition-colors hover:text-foreground"
              >
                Open in new tab
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="preview-embed ring-foreground/8 overflow-hidden rounded-2xl ring-1 sm:rounded-3xl">
              {/* Browser chrome bar */}
              <div className="flex items-center gap-3 border-b border-foreground/8 bg-foreground/[0.02] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                </div>
                <div className="flex-1 rounded-md bg-foreground/[0.04] px-3 py-1">
                  <span className="text-[12px] tracking-tight text-foreground/35">
                    {project.preview.startsWith("http")
                      ? project.preview
                      : `https://${project.preview}`}
                  </span>
                </div>
              </div>
              <iframe
                src={
                  project.preview.startsWith("http")
                    ? project.preview
                    : `https://${project.preview}`
                }
                title={`Live preview of ${project.title}`}
                className="h-[500px] w-full sm:h-[650px] lg:h-[750px]"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
