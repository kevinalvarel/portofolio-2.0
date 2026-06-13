"use client";
import { About } from "@/components/about/about";
import { Hero } from "@/components/hero/hero";
import GradualBlurMemo from "@/components/layout/gradual-blur";
import { Projects } from "@/components/project/project";

export default function Home() {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <Hero />
      <About />
      <Projects withHeadline={true} viewMoreVisible={true} />
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
