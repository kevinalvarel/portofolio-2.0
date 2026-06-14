import Pic1 from "@/public/images/me.webp";
import Pic2 from "@/public/images/me-hovered.webp";

import Image from "next/image";

const ImageSpan = () => {
  return (
    <div className="px-5 w-full">
      <div className="font-medium text-lg mb-6">Educations</div>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative overflow-hidden rounded-4xl border px-2 pt-2 sm:px-4 sm:pt-4">
        <h2 className="font-semibold text-xl">Universitas Al-Khairiyah</h2>
        <h3 className="text-md font-normal mb-3">
          S1 Teknik Informatika | Computer Science
        </h3>
        <div className="gap-4 mb-4 flex items-stretch md:h-[200px]">
          {[Pic2, Pic1].map((src, index) => (
            <div
              key={index}
              className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group"
            >
              <Image
                src={src}
                width={400}
                height={225}
                alt="University"
                className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <p className="text-foreground text-justify title text-[15px]">
            Aspiring to become a professional Web Developer, I&apos;m currently
            pursuing my Bachelor&apos;s degree in{" "}
            <span className="text-muted-foreground font-medium">
              Computer Science
            </span>{" "}
            at{" "}
            <span className="text-muted-foreground font-medium">
              Universitas Al-Khairiyah
            </span>
            . My journey in tech is driven by curiosity and creativity combining
            web development.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 text-sm justify-start">
          <div className="bg-neutral-300 text-black px-2 py-1 rounded-2xl hover:bg-neutral-400 transition-all duration-300">
            GPA: 3.9
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSpan;
