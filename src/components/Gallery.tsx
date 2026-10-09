"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IMAGES } from "@/data/images";

gsap.registerPlugin(ScrollTrigger);

const PANELS = [
  {
    n: "01",
    title: "Assess",
    text: "Every pair gets an honest diagnosis. If it can't be saved beautifully, we'll tell you straight — no charge for the truth.",
    src: IMAGES.panels[0],
  },
  {
    n: "02",
    title: "Restore",
    text: "Resoled, re-heeled, re-stitched by hand with traditional methods. Built to outlast the original — never just glued.",
    src: IMAGES.panels[1],
  },
  {
    n: "03",
    title: "Revive",
    text: "Cleaned, conditioned, polished. You pick up footwear that looks, feels, and smells brand new again.",
    src: IMAGES.panels[2],
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const getAmount = () => Math.max(track.scrollWidth - window.innerWidth, 0);

      const scrollTween = gsap.to(track, {
        x: () => -getAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getAmount()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // each panel's image parallaxes within its frame
      gsap.utils.toArray<HTMLElement>(".panel").forEach((panel) => {
        const img = panel.querySelector(".panel-img");
        const num = panel.querySelector(".panel-num");
        if (img) {
          gsap.fromTo(
            img,
            { xPercent: -8 },
            {
              xPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }
        if (num) {
          gsap.fromTo(
            num,
            { xPercent: 30 },
            {
              xPercent: -30,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        }
      });

      gsap.to(".ch2-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getAmount()}`,
          scrub: 0.6,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen flex-col justify-center overflow-hidden bg-espresso"
    >
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 px-5 pt-24 sm:px-8">
        <p className="mx-auto max-w-7xl text-xs font-black tracking-[0.35em] text-gold uppercase">
          Chapter 02 — The resurrection
        </p>
      </div>

      <div ref={trackRef} className="flex w-max items-stretch gap-[6vw] px-[8vw]">
        {PANELS.map((p) => (
          <article key={p.n} className="panel relative flex w-[82vw] shrink-0 items-center gap-8 sm:w-[72vw]">
            <div
              aria-hidden="true"
              className="panel-num pointer-events-none absolute -top-16 left-0 font-display text-[10rem] font-black leading-none text-cream/[0.06] select-none"
            >
              {p.n}
            </div>
            <div className="relative h-[52vh] w-[42%] shrink-0 overflow-hidden rounded-[2rem]">
              <img
                src={p.src}
                alt={p.title}
                className="panel-img h-full w-[116%] max-w-none object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>
            <div className="max-w-md">
              <p className="font-display text-lg font-bold tracking-[0.3em] text-gold">
                {p.n}
              </p>
              <h3 className="mt-3 font-display text-6xl font-black tracking-tight text-cream sm:text-7xl">
                {p.title}
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-cream/65">{p.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="absolute bottom-10 left-[8vw] right-[8vw] h-[3px] overflow-hidden rounded-full bg-cream/10">
        <div className="ch2-progress h-full w-full origin-left scale-x-0 bg-gold" />
      </div>
    </section>
  );
}
