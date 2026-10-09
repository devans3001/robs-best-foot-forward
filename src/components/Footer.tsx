"use client";

import { Star } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-8">
        <p className="font-display text-lg font-bold text-cream">
          Rob&apos;s <span className="italic text-gold">Best Foot Forward</span>
        </p>
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-bold tracking-widest text-cream/45 uppercase transition-colors hover:text-goldlight"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="flex items-center gap-2 text-xs text-cream/35">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          {BUSINESS.rating} · {BUSINESS.reviewCount} reviews · © 2026
        </p>
      </div>
    </footer>
  );
}
