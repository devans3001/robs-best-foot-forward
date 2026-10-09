"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BUSINESS } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const PRICES = [
  { service: "Topys — protective soles", price: "$50+", verified: true },
  { service: "Heel repair", price: "$45+", verified: false },
  { service: "Full resole — rubber", price: "$70+", verified: false },
  { service: "Full resole — leather", price: "$85+", verified: false },
  { service: "Cleaning & polish", price: "$35+", verified: false },
  { service: "Handbag restoration", price: "$45+", verified: false },
  { service: "Stitching & patching", price: "$30+", verified: false },
];

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".ledger-row").forEach((row) => {
        gsap.from(row, {
          opacity: 0,
          x: -40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 90%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="pricing" className="bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-black tracking-[0.35em] text-gold uppercase">
              The ledger
            </p>
            <h2 className="mt-4 font-display text-5xl font-black tracking-tight text-ink sm:text-7xl">
              Honest <span className="italic text-gold">numbers</span>
            </h2>
          </div>
          <p className="max-w-sm text-ink/60">
            Typical ranges. Your exact price is quoted in store, in writing,
            before a single stitch — call {BUSINESS.phone} for anything
            unusual.
          </p>
        </div>

        <div className="mt-12 border-t-2 border-ink">
          {PRICES.map((p) => (
            <div
              key={p.service}
              className="ledger-row group flex items-baseline justify-between gap-6 border-b border-ink/12 py-6"
            >
              <p className="font-display text-2xl font-bold text-ink transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl">
                {p.service}
                {p.verified && (
                  <span className="ml-3 align-middle rounded-full bg-gold/15 px-2.5 py-1 font-sans text-[10px] font-black tracking-widest text-gold uppercase">
                    Verified
                  </span>
                )}
              </p>
              <p className="shrink-0 font-display text-2xl font-black text-gold sm:text-3xl">
                {p.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
