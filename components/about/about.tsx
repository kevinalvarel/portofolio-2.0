import { ImageMorph } from "./image-morph";
import ScrollReveal from "./scroll-reveal";

const PORTRAIT_SRC = "/images/me.webp";
const PORTRAIT_HOVER_SRC = "/images/me.webp";

export function About() {
  return (
    <>
      <section className="relative w-full">
        <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="flex justify-stretch md:justify-end">
              <div className="relative aspect-square w-full md:max-w-105 overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
                <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                  <ImageMorph
                    srcA={PORTRAIT_SRC}
                    srcB={PORTRAIT_HOVER_SRC}
                    alt="Kevin portrait"
                  />
                </div>
              </div>
            </div>
            <div>
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur
                baseRotation={5}
                blurStrength={2}
              >
                Kevin is a Fullstack Developer base in Indonesia. I am
                passionate about building web applications.
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
