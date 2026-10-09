"use client";

import { Phone, Camera, Mail, MapPin, Star } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-bold text-cream">
              Rob&apos;s <span className="text-gold">Best Foot Forward</span>
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-cream/50">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </span>
              {BUSINESS.rating} · {BUSINESS.reviewCount} Google reviews
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/40">
              Family-owned shoe repair in downtown Toronto for 30+ years.
              Stitched, not glued.
            </p>
          </div>

          <div>
            <p className="text-xs font-black tracking-[0.3em] text-goldlight uppercase">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-semibold text-cream/60 transition-colors hover:text-goldlight"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black tracking-[0.3em] text-goldlight uppercase">
              Find us
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <p className="flex items-start gap-2.5 text-cream/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {BUSINESS.address}
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2.5 text-cream/60 transition-colors hover:text-goldlight"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2.5 text-cream/60 transition-colors hover:text-goldlight"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                {BUSINESS.email}
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-cream/60 transition-colors hover:text-goldlight"
              >
                <Camera className="h-4 w-4 shrink-0 text-gold" />
                @robsbestfootforward
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/35 sm:flex-row">
          <p>© 2026 {BUSINESS.name}. All rights reserved.</p>
          <p>robsbestfootforward.ca — currently being rebuilt</p>
        </div>
      </div>
    </footer>
  );
}
