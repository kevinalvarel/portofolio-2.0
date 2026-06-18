import { ImageMorph } from "./image-morph";
import { FadeIn, ScaleUnblur } from "../ui/motion-primitive";

const PORTRAIT_SRC = "/images/me.webp";
const PORTRAIT_HOVER_SRC = "/images/me-hovered.webp";

const TEXT = [
  "Hi, I'm Kevin",
  "I'm a fullstack developer",
  "I'm a frontend developer",
  "I'm a backend developer",
];

export function About() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24 ">
        <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <ScaleUnblur
              delay={0.3}
              className="flex justify-stretch md:justify-end"
            >
              <div className="relative aspect-square w-full md:max-w-105 overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
                <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] ">
                  <ImageMorph
                    srcA={PORTRAIT_SRC}
                    srcB={PORTRAIT_HOVER_SRC}
                    alt="Kevin portrait"
                  />
                </div>
              </div>
            </ScaleUnblur>
            <FadeIn
              delay={0.3}
              className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3"
            >
              <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
                Hello! I&rsquo;m{" "}
                <span className="border-b border-foreground/30 pb-0.5">
                  Kevin
                </span>
                .
              </h1>
              <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
                <p>
                  I'm a{" "}
                  <strong className="font-semibold text-foreground">
                    Software Engineer
                  </strong>{" "}
                  and an Informatics student at Universitas Al-Khairiyah. With a
                  keen interest in{" "}
                  <strong className="font-semibold text-foreground">
                    Front-End Engineering
                  </strong>{" "}
                  and{" "}
                  <strong className="font-semibold text-foreground">
                    AI/ML
                  </strong>{" "}
                  integration, I focus on building functional, modern, and
                  user-centered digital experiences.
                </p>
                <p>
                  Currently, I build most of my applications using the{" "}
                  <strong className="font-semibold text-foreground">
                    React, Next.js , TypeScript, and Tailwind CSS 4
                  </strong>{" "}
                  ecosystem. I'm always driven to create technological solutions
                  that make a real impact.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
