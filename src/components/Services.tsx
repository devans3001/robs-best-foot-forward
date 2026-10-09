"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/site";
import { IMAGES } from "@/data/images";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const preview = previewRef.current!;
      const xTo = gsap.quickTo(preview, "x", { duration: 0.45, ease: "power3" });
      const yTo = gsap.quickTo(preview, "y", { duration: 0.45, ease: "power3" });
      const imgs = preview.querySelectorAll("img");
      const rows = gsap.utils.toArray<HTMLElement>(".idx-row");

      rows.forEach((row) => {
        gsap.from(row, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 92%", once: true },
        });
      });

      const show = (i: number) => {
        imgs.forEach((im, j) => gsap.set(im, { opacity: j === i ? 1 : 0, scale: j === i ? 1 : 1.15 }));
        gsap.set(preview, { display: "block", opacity: 1 });
        gsap.fromTo(
          preview,
          { scale: 0.75, rotate: -6 },
          { scale: 1, rotate: 3, duration: 0.55, ease: "power3.out" }
        );
      };
      const hide = () => {
        gsap.to(preview, {
          scale: 0.75,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => gsap.set(preview, { display: "none" }),
        });
      };
      const move = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      const cleanups: Array<() => void> = [];
      rows.forEach((row, i) => {
        const enter = () => show(i);
        row.addEventListener("mouseenter", enter);
        row.addEventListener("mouseleave", hide);
        cleanups.push(() => {
          row.removeEventListener("mouseenter", enter);
          row.removeEventListener("mouseleave", hide);
        });
      });
      window.addEventListener("mousemove", move);
      cleanups.push(() => window.removeEventListener("mousemove", move));

      return () => cleanups.forEach((fn) => fn());
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="services" className="relative bg-cream py-28 sm:py-36">
      {/* floating hover preview (desktop) */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-64 w-52 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-2xl md:block"
        style={{ display: "none" }}
      >
        {IMAGES.servicePreview.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: 0 }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-xs font-black tracking-[0.35em] text-gold uppercase">
          The index
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-5xl font-black tracking-tight text-ink sm:text-7xl">
          Everything we <span className="italic text-gold">resurrect</span>
        </h2>
        <p className="mt-4 max-w-xl text-lg text-ink/60">
          Hover a craft to see it. Every job quoted before we begin — no
          surprises, ever.
        </p>

        <div className="mt-12 border-t border-ink/15">
          {SERVICES.map((s, i) => (
            <a
              key={s.name}
              href="#visit"
              className="idx-row group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-ink/15 py-7 transition-colors sm:gap-10 sm:py-9"
            >
              <span className="font-display text-sm font-bold tracking-[0.25em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-display text-3xl font-black tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-3 sm:text-5xl">
                  {s.name}
                </span>
                <span className="mt-2 block max-w-xl text-ink/55 sm:text-lg">
                  {s.desc}
                </span>
              </span>
              <span className="flex items-center gap-4">
                <span className="hidden font-display text-xl font-black whitespace-nowrap text-ink sm:block">
                  {s.price}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-ink/20 transition-all duration-500 group-hover:rotate-45 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
