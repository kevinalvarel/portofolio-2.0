"use client";
import { About } from "@/components/about/about";
import { Experience } from "@/components/about/experience";
import ImageSpan from "@/components/about/image-span";
import GradualBlurMemo from "@/components/layout/gradual-blur";

export default function AboutPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <About />
      <section className="mx-auto w-full max-w-[65em] px-6 pb-20 sm:px-10 sm:pb-28">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <ImageSpan />
          <Experience />
        </div>
      </section>
      <GradualBlurMemo
        target="page"
        position="bottom"
        height="9rem"
        strength={2.5}
        divCount={7}
        curve="bezier"
        exponential
        opacity={0.9}
      />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
