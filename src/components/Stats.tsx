"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 30, suffix: "+", label: "Years at the bench" },
  { value: 172, suffix: "", label: "Five-star Google reviews" },
  { value: 4.9, suffix: "", label: "Average rating", decimals: true },
  { value: 1, suffix: "", label: "Iconic downtown shop", static: "1" },
];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".stats-drift", {
        xPercent: -22,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-24">
      <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden opacity-25">
        <div className="stats-drift flex w-max shrink-0 items-center gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).flatMap((_, dup) =>
            Array.from({ length: 4 }).map((__, i) => (
              <span
                key={`${dup}-${i}`}
                className="text-stroke-gold font-display text-[11rem] font-black leading-none"
              >
                172 FIVE STARS ✦
              </span>
            ))
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blush/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 sm:px-8 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-5xl font-black text-goldlight sm:text-6xl">
              {s.decimals ? "4.9" : s.static ? "1" : <Counter to={s.value} suffix={s.suffix} />}
            </p>
            <p className="mt-2 text-sm font-bold tracking-widest text-cream/60 uppercase">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
