"use client";
import { About } from "@/components/about/about";
import { Experience } from "@/components/about/experience";
import ImageSpan from "@/components/about/image-span";
import OrbitStacks from "@/components/about/stack";
import GradualBlurMemo from "@/components/layout/gradual-blur";

const images = [
  "https://picsum.photos/300/300?grayscale&random=1",
  "https://picsum.photos/300/300?grayscale&random=2",
  "https://picsum.photos/300/300?grayscale&random=3",
  "https://picsum.photos/300/300?grayscale&random=4",
  "https://picsum.photos/300/300?grayscale&random=5",
  "https://picsum.photos/300/300?grayscale&random=6",
];

export default function AboutPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <About />
      <section className="mx-auto w-full max-w-[65em] px-6 pb-20 sm:px-10 sm:pb-28">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <ImageSpan />
          <Experience />
        </div>
        <OrbitStacks
          images={images}
          shape="ellipse"
          radiusX={340}
          radiusY={80}
          rotation={-8}
          duration={30}
          itemSize={80}
          responsive={true}
          radius={360}
          direction="normal"
          fill
          showPath
          paused={false}
        />
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
