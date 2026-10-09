"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SplitReveal from "./SplitReveal";
import Steps from "./Steps";
import { SERVICES, BUSINESS } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="relative bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-black tracking-[0.3em] text-gold uppercase">
            What we fix
          </p>
          <SplitReveal
            text="Every repair, done right"
            accent="right"
            accentClassName="italic text-gold"
            className="mt-3 max-w-2xl font-display text-4xl font-black tracking-tight text-ink sm:text-6xl"
          />
          <p className="mt-4 max-w-xl text-lg text-ink/65">
            Bring them in tired — pick them up reborn. Every job starts with an
            honest assessment and a fair price, confirmed before we touch a
            stitch.
          </p>
        </Reveal>

        <Steps />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.12}>
              <motion.a
                href="#visit"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-cream p-7 shadow-sm transition-shadow hover:shadow-2xl"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-2xl font-bold text-ink">
                    {s.name}
                  </h3>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink/5 transition-all group-hover:bg-gold group-hover:text-ink">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-3 flex-1 leading-relaxed text-ink/60">{s.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display text-xl font-black text-gold">
                    {s.price}
                  </span>
                  {s.tag && (
                    <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-black tracking-widest text-gold uppercase">
                      {s.tag}
                    </span>
                  )}
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm font-semibold text-ink/50">
            Prices are estimates — final quote confirmed in store before any
            work begins. Call {BUSINESS.phone} for anything unusual.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
