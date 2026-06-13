"use client";
import { About } from "@/components/about/about";
import GradualBlurMemo from "@/components/layout/gradual-blur";

export default function AboutPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <About />
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
    </main>
  );
}
