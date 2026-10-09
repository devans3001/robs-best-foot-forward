"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SplitReveal from "./SplitReveal";
import { TESTIMONIALS } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="w-[320px] shrink-0 rounded-3xl border border-ink/10 bg-white p-7 shadow-lg sm:w-[380px]">
      <Quote className="h-8 w-8 text-gold/40" />
      <div className="mt-3 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="mt-4 leading-relaxed text-ink/80">&ldquo;{t.quote}&rdquo;</p>
      <div className="mt-5 flex items-center justify-between">
        <p className="font-bold text-ink">{t.name}</p>
        <p className="text-xs font-black tracking-widest text-gold uppercase">
          {t.detail}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = ".t-skew";
      const proxy = { skew: 0 };
      const clamp = gsap.utils.clamp(-10, 10);
      ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = clamp(self.getVelocity() / -300);
          if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
              skew: 0,
              duration: 0.9,
              ease: "power3",
              overwrite: true,
              onUpdate: () => gsap.set(track, { skewX: proxy.skew }),
            });
          }
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="reviews" className="overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-black tracking-[0.3em] text-gold uppercase">
            172 five-star reviews
          </p>
          <SplitReveal
            text="Toronto keeps talking"
            accent="talking"
            accentClassName="italic text-gold"
            className="mx-auto mt-3 max-w-2xl font-display text-4xl font-black tracking-tight text-ink sm:text-6xl"
          />
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="t-skew will-change-transform">
            <div className="animate-marquee-slow flex shrink-0 gap-6 pr-6">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <Card key={i} t={t} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
      <p className="mt-6 text-center text-xs font-bold tracking-[0.25em] text-ink/35 uppercase">
        Flick to scroll — watch the cards lean
      </p>
    </section>
  );
}
