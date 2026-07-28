import { useState } from "react";
import { GALLERY_IMAGES } from "@/Lib/gallery";

export default function GallerySection(): JSX.Element {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="mt-16 border-t border-navy-950/10 pt-10">
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
        Our Work
      </span>
      <h2 className="mt-2 font-display text-2xl font-bold uppercase">
        A Glimpse of Recent Jobs
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-navy-950/60">
        Installations, repairs and servicing across Harare — domestic and industrial. Tap or
        hover a photo to flip it.
      </p>

      <div className="gallery-grid mt-8">
        {GALLERY_IMAGES.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className="flip-card w-full text-left"
            onClick={() => toggleFlip(i)}
            aria-label={`${img.alt} — tap to flip`}
          >
            <div className={`flip-card-inner ${flipped.has(i) ? "is-flipped" : ""}`}>
              <div className="flip-card-face flip-card-front">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
              <div className="flip-card-face flip-card-back">
                <span className="flip-card-label">Zamsam Job {String(i + 1).padStart(2, "0")}</span>
                <span className="flip-card-title">Refrigeration &amp; Cooling</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}