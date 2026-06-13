"use client";

import Image from "next/image";
import { useState, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectDetailClient({
  images,
  title,
}: {
  images: string[];
  title: string;
}): ReactNode {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + images.length) % images.length : null
      ),
    [images.length]
  );

  const goNext = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % images.length : null
      ),
    [images.length]
  );

  return (
    <>
      {/* ── Gallery grid ── */}
      <div>
        <h2 className="mb-5 text-[13px] font-semibold uppercase tracking-widest text-foreground/35">
          Gallery
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {images.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.08, 0.4), ease: EASE }}
              onClick={() => openLightbox(i)}
              className="gallery-thumb ring-foreground/5 group relative w-full cursor-pointer overflow-hidden rounded-xl bg-foreground/5 ring-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:rounded-2xl"
            >
              <div
                style={{ aspectRatio: "16 / 10" }}
                className="relative w-full"
              >
                <Image
                  src={src}
                  alt={`${title} screenshot ${i + 1}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>

              {/* Hover number indicator */}
              <div className="absolute bottom-3 right-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-background/80 text-[11px] font-semibold text-foreground/60 opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                {i + 1}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/90 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="focus-ring absolute top-6 right-6 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-background/80 text-foreground/60 backdrop-blur-sm transition-colors hover:bg-foreground/5 hover:text-foreground"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Nav: previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="focus-ring absolute left-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-background/80 text-foreground/60 backdrop-blur-sm transition-colors hover:bg-foreground/5 hover:text-foreground sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Nav: next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="focus-ring absolute right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-background/80 text-foreground/60 backdrop-blur-sm transition-colors hover:bg-foreground/5 hover:text-foreground sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative mx-auto h-[70vh] w-[90vw] max-w-[1200px] sm:h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt={`${title} screenshot ${lightboxIndex + 1}`}
                fill
                sizes="90vw"
                className="rounded-2xl object-contain"
                priority
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-foreground/10 bg-background/80 px-4 py-1.5 text-[12px] font-medium tracking-tight text-foreground/50 backdrop-blur-sm">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
