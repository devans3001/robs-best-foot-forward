"use client";

import { motion } from "framer-motion";
import { Phone, Camera, Mail, MapPin, Clock, Navigation } from "lucide-react";
import Reveal from "./Reveal";
import SplitReveal from "./SplitReveal";
import Magnetic from "./Magnetic";
import { BUSINESS } from "@/data/site";
import { IMAGES } from "@/data/images";

export default function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="text-xs font-black tracking-[0.3em] text-goldlight uppercase">
              Visit the shop
            </p>
            <SplitReveal
              text="In the heart of downtown"
              accent="downtown"
              accentClassName="italic text-gold"
              className="mt-3 font-display text-4xl font-black tracking-tight text-cream sm:text-6xl"
            />
            <p className="mt-4 max-w-lg text-lg text-cream/65">
              Walk-ins welcome. Bring the pair you thought was done for —
              we&apos;ll tell you honestly what&apos;s possible.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 space-y-4">
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-cream/10 bg-white/5 p-5 transition-colors hover:border-gold/40"
              >
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-goldlight" />
                <span>
                  <span className="block font-bold text-cream">{BUSINESS.address}</span>
                  <span className="mt-1 block text-sm text-cream/50">
                    Beside Spier &amp; Mackay · Financial district
                  </span>
                </span>
              </a>

              <div className="rounded-2xl border border-cream/10 bg-white/5 p-5">
                <p className="flex items-center gap-2 text-sm font-black tracking-widest text-goldlight uppercase">
                  <Clock className="h-4 w-4" /> Hours
                </p>
                <div className="mt-3 space-y-2">
                  {BUSINESS.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="font-semibold text-cream/70">{h.day}</span>
                      <span className="font-bold text-cream">{h.time}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-cream/40">
                  {BUSINESS.hoursNote}
                </p>
              </div>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-4 rounded-2xl border border-cream/10 bg-white/5 p-5 transition-colors hover:border-gold/40"
              >
                <Mail className="h-5 w-5 shrink-0 text-goldlight" />
                <span className="font-bold text-cream">{BUSINESS.email}</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="mt-8 flex flex-wrap gap-4">
            <Magnetic>
              <motion.a
                href={BUSINESS.phoneHref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-lg font-black text-ink shadow-[0_16px_50px_rgba(201,143,46,0.35)]"
              >
                <Phone className="h-5 w-5" />
                {BUSINESS.phone}
              </motion.a>
            </Magnetic>
            <Magnetic strength={0.28}>
              <motion.a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 rounded-full border-2 border-cream/25 px-8 py-4 text-lg font-bold text-cream transition-colors hover:border-goldlight hover:text-goldlight"
              >
                <Camera className="h-5 w-5" />
                Instagram
              </motion.a>
            </Magnetic>
            <Magnetic strength={0.28}>
              <motion.a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 rounded-full border-2 border-cream/25 px-8 py-4 text-lg font-bold text-cream transition-colors hover:border-goldlight hover:text-goldlight"
              >
                <Navigation className="h-5 w-5" />
                Directions
              </motion.a>
            </Magnetic>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src={IMAGES.visit}
              alt="Finished leather shoes at Rob's Best Foot Forward"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-ink/70 px-5 py-4 backdrop-blur-md">
            <div>
              <p className="font-display text-lg font-bold text-cream">
                {BUSINESS.phoneVanity}
              </p>
              <p className="text-xs font-bold tracking-widest text-cream/50 uppercase">
                Easy to remember
              </p>
            </div>
            <a
              href={BUSINESS.phoneHref}
              className="grid h-12 w-12 place-items-center rounded-full bg-gold text-ink"
              aria-label={`Call ${BUSINESS.name}`}
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
