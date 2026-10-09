"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Star, ArrowRight, ArrowDown, MapPin } from "lucide-react";
import { BUSINESS } from "@/data/site";
import { IMAGES } from "@/data/images";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

function SplitChars({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((c, i) => (
        <span key={i} className="hero-char inline-block" aria-hidden="true">
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-char", { yPercent: 110, duration: 1.1, stagger: 0.035 }, 0.15)
        .from(".hero-fade", { y: 34, opacity: 0, duration: 1, stagger: 0.12 }, 0.7)
        .from(
          ".hero-img-wrap",
          { clipPath: "inset(100% 0% 0% 0%)", duration: 1.4, ease: "power4.inOut" },
          0.4
        )
        .from(
          ".hero-card",
          { scale: 0.6, opacity: 0, duration: 0.9, ease: "back.out(1.6)", stagger: 0.15 },
          1.1
        );

      gsap.to(".hero-headline", {
        yPercent: -24,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to(".hero-img", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to(".hero-glow", {
        scale: 1.35,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden bg-ink">
      <div className="hero-glow pointer-events-none absolute left-1/2 top-0 h-[42rem] w-[72rem] -translate-x-1/2 rounded-full bg-gold/15 blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-blush/10 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #eab95c 1px, transparent 0)",
          backgroundSize: "34px 34px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 md:pt-40">
        <div className="hero-fade mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/35 bg-white/5 px-5 py-2.5 text-xs font-black tracking-[0.2em] text-goldlight uppercase backdrop-blur">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </span>
            {BUSINESS.rating} · {BUSINESS.reviewCount} Google reviews
          </span>
        </div>

        <h1 className="hero-headline text-center font-display text-[18vw] font-black leading-[0.95] tracking-tight text-cream sm:text-8xl lg:text-[9rem]">
          <span className="block overflow-hidden pb-1">
            <SplitChars text="SHOES," />
          </span>
          <span className="block overflow-hidden pb-3">
            <SplitChars
              text="REBORN."
              className="bg-gradient-to-r from-goldlight via-gold to-goldlight bg-clip-text italic text-transparent"
            />
          </span>
        </h1>

        <p className="hero-fade mx-auto mt-7 max-w-2xl text-center text-lg leading-relaxed text-cream/65">
          Toronto&apos;s 4.9-star shoe repair shop — 30+ years bringing beloved
          footwear back to life, one stitch at a time, in the heart of the
          financial district.
        </p>

        <div className="hero-fade mt-9 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-lg font-black text-ink shadow-[0_18px_60px_rgba(201,143,46,0.4)]"
            >
              Get an estimate
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </Magnetic>
          <Magnetic strength={0.28}>
            <motion.a
              href="#craft"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full border-2 border-cream/20 px-9 py-[14px] text-lg font-bold text-cream transition-colors hover:border-goldlight hover:text-goldlight"
            >
              See the craft
            </motion.a>
          </Magnetic>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="hero-img-wrap relative overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] shadow-[0_50px_120px_rgba(0,0,0,0.55)]">
            <img
              src={IMAGES.hero}
              alt="Cobbler at the workbench restoring a leather shoe"
              className="hero-img aspect-[16/10] w-full scale-110 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/10" />
          </div>

          <div className="hero-card absolute -left-4 top-16 sm:-left-10">
            <div className="animate-float max-w-[230px] rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <p className="mt-2 text-sm font-semibold leading-snug text-cream">
                &ldquo;Rob is a magician. My boots look better than the day I
                bought them.&rdquo;
              </p>
              <p className="mt-1 text-[11px] font-bold tracking-wide text-cream/50 uppercase">
                Marcus T. · Google
              </p>
            </div>
          </div>

          <div className="hero-card absolute -right-4 bottom-16 sm:-right-10">
            <div className="grid h-32 w-32 place-items-center rounded-full bg-gold text-center shadow-[0_20px_60px_rgba(201,143,46,0.45)]">
              <div className="animate-spin-slower absolute inset-2 rounded-full border border-dashed border-ink/40" />
              <div>
                <p className="font-display text-3xl font-black text-ink">30+</p>
                <p className="px-3 text-[10px] font-black tracking-widest text-ink/70 uppercase">
                  years at the bench
                </p>
              </div>
            </div>
          </div>

          <div className="hero-card absolute bottom-6 left-1/2 -translate-x-1/2">
            <span className="flex items-center gap-2 rounded-full bg-ink/70 px-5 py-2.5 text-sm font-bold whitespace-nowrap text-cream backdrop-blur-md">
              <MapPin className="h-4 w-4 text-goldlight" /> 20 Toronto St, Toronto
            </span>
          </div>
        </div>

        <div className="hero-fade mt-14 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/20 text-goldlight"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </div>
      </div>

      <div className="relative border-y border-ink/20 bg-gold py-4">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
            {Array.from({ length: 2 }).flatMap((_, dup) =>
              [
                "Full Resoles",
                "Heel Repair",
                "Topys",
                "Handbag Restoration",
                "Cleaning & Polish",
                "Saphir Shoe Care",
                "Stitching",
                "Stretching",
              ].map((s, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="flex items-center gap-8 whitespace-nowrap font-display text-lg font-bold tracking-wide text-ink"
                >
                  {s}
                  <span>✦</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
