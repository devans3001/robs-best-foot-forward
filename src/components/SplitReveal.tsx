"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Text animation: characters cascade up as the heading scrolls into view. */
export default function SplitReveal({
  text,
  className,
  as: Tag = "h2",
  accent,
  accentClassName = "",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  accent?: string;
  accentClassName?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sr-char", {
        yPercent: 115,
        rotate: 4,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.018,
        scrollTrigger: { trigger: ref.current, start: "top 86%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  // keep word wrapping natural: split by words, chars inside
  const words = text.split(" ");
  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {words.map((w, wi) => (
        <span key={wi} className="inline-block overflow-hidden pb-1 align-bottom">
          {w.split("").map((c, ci) => (
            <span
              key={ci}
              className={`sr-char inline-block ${w === accent ? accentClassName : ""}`}
              aria-hidden="true"
            >
              {c}
            </span>
          ))}
          {wi < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}

export function SplitRevealRich({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".sr-char", {
        yPercent: 115,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.018,
        scrollTrigger: { trigger: ref.current, start: "top 86%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
