"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Phone, Camera, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { BUSINESS } from "@/data/site";
import { IMAGES } from "@/data/images";

gsap.registerPlugin(ScrollTrigger);

export default function Visit() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // giant type scales in as you arrive
      gsap.from(".visit-giant", {
        scale: 0.85,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: { trigger: ref.current, start: "top 60%", once: true },
      });
      gsap.utils.toArray<HTMLElement>(".visit-line").forEach((el, i) => {
        gsap.from(el, {
          yPercent: 110,
          duration: 1,
          ease: "power4.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="visit" className="relative overflow-hidden bg-ink py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[70rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
        <p className="text-xs font-black tracking-[0.35em] text-goldlight uppercase">
          Walk-ins welcome
        </p>
        <h2 className="visit-giant mx-auto mt-8 max-w-5xl font-display text-[13vw] font-black leading-[0.9] tracking-tight text-cream sm:text-8xl">
          <span className="block overflow-hidden pb-2">
            <span className="visit-line block">
              BRING THEM IN <span className="italic text-goldlight">TIRED.</span>
            </span>
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-cream/60">
          We&apos;ll tell you honestly what&apos;s possible — and hand them
          back reborn.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <motion.a
              href={BUSINESS.phoneHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-full bg-gold px-10 py-5 text-xl font-black text-ink shadow-[0_18px_60px_rgba(201,143,46,0.4)]"
            >
              <Phone className="h-5 w-5" />
              {BUSINESS.phone}
            </motion.a>
          </Magnetic>
          <Magnetic strength={0.28}>
            <motion.a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 rounded-full border-2 border-cream/25 px-10 py-5 text-xl font-bold text-cream transition-colors hover:border-goldlight hover:text-goldlight"
            >
              <MapPin className="h-5 w-5" />
              Get directions
            </motion.a>
          </Magnetic>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 text-left sm:grid-cols-3">
          <Reveal className="rounded-3xl border border-cream/10 bg-white/5 p-6">
            <p className="flex items-center gap-2 text-xs font-black tracking-[0.25em] text-goldlight uppercase">
              <MapPin className="h-4 w-4" /> Find us
            </p>
            <p className="mt-3 font-semibold leading-relaxed text-cream/80">
              {BUSINESS.address}
            </p>
            <p className="mt-1 text-sm text-cream/40">Beside Spier &amp; Mackay</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border border-cream/10 bg-white/5 p-6">
            <p className="flex items-center gap-2 text-xs font-black tracking-[0.25em] text-goldlight uppercase">
              <Clock className="h-4 w-4" /> Hours
            </p>
            <div className="mt-3 space-y-1.5 text-sm">
              {BUSINESS.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-2">
                  <span className="text-cream/55">{h.day}</span>
                  <span className="font-bold whitespace-nowrap text-cream/85">{h.time}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2} className="rounded-3xl border border-cream/10 bg-white/5 p-6">
            <p className="flex items-center gap-2 text-xs font-black tracking-[0.25em] text-goldlight uppercase">
              <Mail className="h-4 w-4" /> Reach us
            </p>
            <a href={`mailto:${BUSINESS.email}`} className="mt-3 block break-all font-semibold text-cream/80 hover:text-goldlight">
              {BUSINESS.email}
            </a>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 font-semibold text-cream/80 hover:text-goldlight"
            >
              <Camera className="h-4 w-4" /> @robsbestfootforward
            </a>
            <p className="mt-2 text-sm font-bold text-goldlight">{BUSINESS.phoneVanity}</p>
          </Reveal>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-40">
        <img src={IMAGES.visit} alt="" aria-hidden="true" className="h-full w-full object-cover [mask-image:linear-gradient(to_top,black,transparent)]" />
      </div>
    </section>
  );
}
