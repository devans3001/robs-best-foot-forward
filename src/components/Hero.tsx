"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Star, ArrowDown, Phone } from "lucide-react";
import { BUSINESS } from "@/data/site";
import { IMAGES } from "@/data/images";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // load choreography: masked lines rise, bg settles
      gsap.from(".hero-bg", { scale: 1.25, duration: 2.2, ease: "power2.out" });
      gsap.from(".hero-line", {
        yPercent: 110,
        duration: 1.3,
        ease: "power4.out",
        stagger: 0.14,
        delay: 0.3,
      });
      gsap.from(".hero-fade", { y: 26, opacity: 0, duration: 1, stagger: 0.12, delay: 1 });

      // scroll: bg drifts slow, type races ahead — depth parallax
      gsap.to(".hero-bg", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-type", {
        yPercent: -42,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "70% top", scrub: 0.6 },
      });
      gsap.to(".hero-meta", {
        yPercent: -18,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "55% top", scrub: 0.6 },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="top" className="relative flex h-[108vh] flex-col justify-end overflow-hidden bg-ink">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={IMAGES.heroBg}
          alt="Cobbler restoring leather shoes at the workbench"
          className="hero-bg h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

      <div className="hero-meta relative mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8">
        <div className="hero-fade mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-ink/50 px-5 py-2.5 text-xs font-black tracking-[0.2em] text-goldlight uppercase backdrop-blur">
          <span className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
            ))}
          </span>
          {BUSINESS.rating} · {BUSINESS.reviewCount} Google reviews
        </div>

        <h1 className="hero-type font-display font-black leading-[0.88] tracking-tight">
          <span className="block overflow-hidden">
            <span className="hero-line block text-[19vw] text-cream/95 sm:text-[13rem]">
              WORN
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block text-[19vw] italic text-goldlight sm:text-[13rem]">
              REBORN<span className="text-cream">.</span>
            </span>
          </span>
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <p className="hero-fade max-w-md text-lg leading-relaxed text-cream/70">
            Thirty years of bringing Toronto&apos;s best-loved shoes back from
            the dead — stitched, not glued, at 20 Toronto Street.
          </p>
          <div className="hero-fade flex items-center gap-4">
            <Magnetic>
              <motion.a
                href={BUSINESS.phoneHref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-lg font-black text-ink"
              >
                <Phone className="h-5 w-5" />
                {BUSINESS.phone}
              </motion.a>
            </Magnetic>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="grid h-14 w-14 place-items-center rounded-full border border-cream/25 text-goldlight"
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="hero-fade relative border-t border-cream/15 bg-ink/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-[11px] font-black tracking-[0.25em] text-cream/50 uppercase sm:px-8">
          <span>Est. 30+ years</span>
          <span className="hidden sm:inline">Financial district · Toronto</span>
          <span className="text-goldlight">Scroll for the story ↓</span>
        </div>
      </div>
    </section>
  );
}
