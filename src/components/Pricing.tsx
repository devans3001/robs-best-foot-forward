"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Reveal from "./Reveal";
import SplitReveal from "./SplitReveal";
import Magnetic from "./Magnetic";
import { BUSINESS } from "@/data/site";
import { IMAGES as IMG } from "@/data/images";

const PRICES = [
  { service: "Topys (protective soles)", price: "from $50", note: "Verified" },
  { service: "Heel repair", price: "from $45", note: null },
  { service: "Full resole — rubber", price: "from $70", note: null },
  { service: "Full resole — leather", price: "from $85", note: null },
  { service: "Cleaning & polish", price: "from $35", note: null },
  { service: "Handbag restoration", price: "from $45", note: null },
  { service: "Stitching & patching", price: "from $30", note: null },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-sand py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="relative order-2 overflow-hidden rounded-[2.5rem] shadow-2xl lg:order-1">
          <img
            src={IMG.pricing}
            alt="Polished leather shoes, freshly restored"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-2xl font-bold italic text-cream">
            &ldquo;Fair prices, quick turnaround, and genuinely kind
            people.&rdquo;
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-xs font-black tracking-[0.3em] text-gold uppercase">
              Honest pricing
            </p>
            <SplitReveal
              text="No surprises, ever"
              accent="ever"
              accentClassName="italic text-gold"
              className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-6xl"
            />
            <p className="mt-4 max-w-lg text-lg text-ink/65">
              Every job is quoted before we begin. These are typical ranges —
              your exact price is confirmed in store, in writing, before a
              single stitch.
            </p>
          </Reveal>

          <div className="mt-8 overflow-hidden rounded-3xl border border-ink/10 bg-cream">
            {PRICES.map((p, i) => (
              <Reveal key={p.service} delay={i * 0.05}>
                <div
                  className={`flex items-center justify-between gap-4 px-6 py-4 ${
                    i !== PRICES.length - 1 ? "border-b border-ink/8" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-ink">{p.service}</span>
                    {p.note && (
                      <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-black tracking-widest text-gold uppercase">
                        {p.note}
                      </span>
                    )}
                  </div>
                  <span className="font-display text-lg font-black whitespace-nowrap text-ink">
                    {p.price}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-8">
            <Magnetic>
              <motion.a
                href={BUSINESS.phoneHref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-lg font-black text-cream shadow-xl"
              >
                <Phone className="h-5 w-5 text-goldlight" />
                Ask for your quote
              </motion.a>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
