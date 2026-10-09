"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const QUOTES = TESTIMONIALS.slice(0, 4);

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const quotes = gsap.utils.toArray<HTMLElement>(".quote-slide");
      quotes.forEach((q, i) => {
        if (i > 0) gsap.set(q, { opacity: 0, y: 80 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=280%",
          pin: true,
          scrub: 1,
        },
      });

      quotes.forEach((q, i) => {
        if (i === 0) return;
        tl.to(quotes[i - 1], { opacity: 0, y: -80, duration: 1, ease: "power2.inOut" })
          .to(q, { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" }, "<")
          .to({}, { duration: 0.6 });
      });

      // progress pips
      gsap.to(".quote-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=280%",
          scrub: 1,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="reviews" className="relative flex h-screen flex-col justify-center overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[30rem] leading-none text-cream/[0.04] select-none"
      >
        &ldquo;
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
        <p className="text-center text-xs font-black tracking-[0.35em] text-gold uppercase">
          Chapter 03 — Word on the street
        </p>

        <div className="relative mt-10 min-h-[24rem]">
          {QUOTES.map((t, i) => (
            <figure
              key={t.name}
              className={`quote-slide ${i > 0 ? "absolute inset-0" : "relative"}`}
            >
              <div className="flex justify-center gap-1.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-8 text-center font-display text-3xl font-bold leading-snug text-cream sm:text-5xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-center">
                <p className="text-lg font-bold text-goldlight">{t.name}</p>
                <p className="mt-1 text-xs font-black tracking-[0.25em] text-cream/40 uppercase">
                  {t.detail} · Google review
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mx-auto mt-12 h-[2px] w-48 overflow-hidden rounded-full bg-cream/15">
          <div className="quote-progress h-full w-full origin-left scale-x-0 bg-gold" />
        </div>
        <p className="mt-4 text-center text-[11px] font-black tracking-[0.3em] text-cream/35 uppercase">
          172 five-star reviews · keep scrolling
        </p>
      </div>
    </section>
  );
}
