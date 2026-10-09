"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMAGES } from "@/data/images";
import { BUSINESS } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const FACTS = [
  { n: "30+", label: "years at the bench" },
  { n: "172", label: "five-star reviews" },
  { n: "4.9", label: "average rating" },
];

export default function Story() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // curtain wipe on the image
      gsap.from(".ch1-frame", {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 1.4,
        ease: "power4.inOut",
        scrollTrigger: { trigger: ref.current, start: "top 65%", once: true },
      });
      gsap.fromTo(
        ".ch1-img",
        { scale: 1.3 },
        {
          scale: 1,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%", once: true },
        }
      );
      // giant numeral parallaxes against the scroll
      gsap.to(".ch1-numeral", {
        yPercent: 34,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      // masked editorial lines
      gsap.utils.toArray<HTMLElement>(".ch1-line").forEach((el, i) => {
        gsap.from(el, {
          yPercent: 110,
          duration: 1,
          ease: "power4.out",
          delay: i * 0.08,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
      // facts count up
      gsap.utils.toArray<HTMLElement>(".ch1-fact").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="craft" className="relative overflow-hidden bg-ink py-28 sm:py-40">
      {/* giant sticky chapter numeral */}
      <div
        aria-hidden="true"
        className="ch1-numeral pointer-events-none absolute -top-10 right-0 font-display text-[26rem] font-black leading-none text-cream/[0.04] select-none"
      >
        01
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-xs font-black tracking-[0.35em] text-gold uppercase">
          Chapter 01 — The problem
        </p>
        <h2 className="mt-6 max-w-4xl font-display text-5xl font-black leading-[1.02] tracking-tight text-cream sm:text-7xl">
          <span className="block overflow-hidden pb-1">
            <span className="ch1-line block">Dead shoes</span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span className="ch1-line block">tell <span className="italic text-goldlight">stories.</span></span>
          </span>
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="ch1-frame relative overflow-hidden rounded-[2rem]">
            <img
              src={IMAGES.chapter1}
              alt="Worn leather, waiting for its second life"
              className="ch1-img aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-6 font-display text-xl italic text-cream">
              Every pair has a history. We give it a future.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xl leading-relaxed text-cream/70">
              The boots that walked you down the aisle. The heels that closed
              the deal. The bag your grandmother carried. When they wear out,
              most shops shrug — or glue.
            </p>
            <p className="mt-5 text-xl leading-relaxed text-cream/70">
              For 30+ years, this little shop on Toronto Street has done the
              opposite: diagnosed honestly, stitched traditionally, and handed
              back footwear people thought was gone for good. That&apos;s why
              reviewers call Rob <span className="text-goldlight italic">a magician</span> —
              and why {BUSINESS.reviewCount} of them left five stars.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8">
              {FACTS.map((f) => (
                <div key={f.label} className="ch1-fact">
                  <p className="font-display text-4xl font-black text-goldlight sm:text-5xl">
                    {f.n}
                  </p>
                  <p className="mt-1 text-xs font-bold tracking-widest text-cream/45 uppercase">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
