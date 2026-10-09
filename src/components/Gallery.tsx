"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import { IMAGES } from "@/data/images";
import { BUSINESS } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

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

      gsap.utils.toArray<HTMLElement>(".g-card").forEach((card) => {
        const img = card.querySelector(".g-img");
        if (!img) return;
        gsap.fromTo(
          img,
          { xPercent: -9 },
          {
            xPercent: 9,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });

      gsap.to(".g-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getAmount()}`,
          scrub: 0.6,
        },
      });

      gsap.to(".g-head", {
        yPercent: -60,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "top -40%",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative flex h-screen flex-col justify-center overflow-hidden bg-ink"
    >
      <div className="g-head pointer-events-none absolute left-0 right-0 top-0 z-10 mx-auto max-w-7xl px-5 pt-24 sm:px-8">
        <p className="text-xs font-black tracking-[0.3em] text-gold uppercase">
          From the workbench — keep scrolling
        </p>
        <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-cream sm:text-6xl">
          Proof, not <span className="italic text-gold">promises</span>
        </h2>
      </div>

      <div ref={trackRef} className="flex w-max items-center gap-6 px-[8vw] pt-16">
        {IMAGES.gallery.map((s, i) => (
          <figure
            key={s.src}
            className="g-card group relative h-[58vh] w-[78vw] shrink-0 overflow-hidden rounded-3xl shadow-2xl sm:w-[30rem]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={s.src}
                alt={s.label}
                loading={i === 0 ? "eager" : "lazy"}
                className="g-img h-full w-[118%] max-w-none object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <span className="absolute left-6 top-6 rounded-full bg-ink/60 px-4 py-1.5 font-display text-sm font-bold text-goldlight backdrop-blur">
              0{i + 1}
            </span>
            <figcaption className="absolute bottom-6 left-6 font-display text-3xl font-bold text-cream">
              {s.label}
            </figcaption>
          </figure>
        ))}

        <div className="grid h-[58vh] w-[78vw] shrink-0 place-items-center sm:w-[30rem]">
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-gold p-10 text-center shadow-2xl transition-transform hover:scale-105"
          >
            <p className="font-display text-3xl font-bold text-ink">
              See the transformations
            </p>
            <p className="mt-3 flex items-center justify-center gap-2 text-sm font-black tracking-widest text-ink/70 uppercase">
              @robsbestfootforward <MoveRight className="h-4 w-4" />
            </p>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-[8vw] right-[8vw] h-[3px] overflow-hidden rounded-full bg-cream/10">
        <div className="g-progress h-full w-full origin-left scale-x-0 bg-gold" />
      </div>
      <p className="absolute bottom-16 left-[8vw] text-xs font-black tracking-[0.3em] text-cream/40 uppercase">
        Scroll to travel →
      </p>
    </section>
  );
}
