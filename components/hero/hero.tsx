import { HeroActionButton } from "./action-button";
import FloatingImage from "./floating-image";

export function Hero() {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-[20px] leading-tight tracking-tight font-medium text-foreground">
              Hey
              <span aria-hidden="true" className="mx-0.5">
                👋
              </span>
              , I&rsquo;m Kevin
            </p>

            <h1 className="text-[2.75rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3.65rem]">
              <span className="block whitespace-nowrap">Student</span>
              <span className="block whitespace-nowrap">Software Engineer</span>
            </h1>

            <p className="max-w-[34ch] text-[22px] leading-[1.4] tracking-tight text-foreground/65">
              Independent engineer focused on interfaces that feel calm,
              considered, and quietly fast.
            </p>
            <div className="mt-6">
              <HeroActionButton />
            </div>
          </div>
          <div className="flex justify-stretch md:justify-end">
            <FloatingImage
              imageSrc="/me.webp"
              altText="Kevin Alvarel"
              captionText="Muhammad Kevin Alvarel"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
            />
          </div>
        </div>
      </div>
    </section>
  );
}
