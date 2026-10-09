"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SplitReveal from "./SplitReveal";
import { IMAGES } from "@/data/images";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".story-img",
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      gsap.from(".story-frame", {
        clipPath: "inset(0% 100% 0% 0%)",
        ease: "power3.out",
        duration: 1.2,
        scrollTrigger: { trigger: ref.current, start: "top 70%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="craft" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="story-frame relative overflow-hidden rounded-[2.5rem] shadow-2xl">
          <img
            src={IMAGES.story}
            alt="Leather craftsmanship at Rob's workbench"
            className="story-img aspect-[4/5] w-full scale-115 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-ink/70 px-5 py-2.5 text-sm font-bold text-cream backdrop-blur-md">
            <Award className="h-4 w-4 text-goldlight" /> Family-owned · 30+ years
          </div>
        </div>

        <div>
          <Reveal>
            <p className="text-xs font-black tracking-[0.3em] text-gold uppercase">
              Our craft
            </p>
            <SplitReveal
              text="They call Rob a magician."
              accent="magician."
              accentClassName="italic text-gold"
              className="mt-3 font-display text-4xl font-black tracking-tight text-ink sm:text-6xl"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              For over three decades, this little shop on Toronto Street has
              been where the financial district brings its best shoes back from
              the dead. Worn soles, tired heels, beloved boots, vintage
              handbags — if it&apos;s made of leather, Rob has probably saved
              one just like it.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              No glue-and-pray shortcuts. Every resole is stitched the
              traditional way, every repair built to outlast the original.
              That&apos;s why 172 reviewers gave five stars — and why
              generations of downtown Toronto keep coming back.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-6 flex items-center gap-2 text-sm font-bold tracking-wide text-ink/50 uppercase">
              <MapPin className="h-4 w-4 text-gold" />
              Beside Spier &amp; Mackay · Downtown Toronto
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
