"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Footprints } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".nav-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
    <div className="nav-progress fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold via-goldlight to-gold" />
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 shadow-[0_8px_30px_rgba(23,19,16,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-goldlight">
            <Footprints className="h-5 w-5" />
          </span>
          <span
            className={`font-display text-xl font-bold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-ink" : "text-cream"
            }`}
          >
            Rob&apos;s <span className="text-gold">Best Foot Forward</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative text-sm font-semibold tracking-wide transition-colors duration-500 ${
                scrolled
                  ? "text-ink/70 hover:text-ink"
                  : "text-cream/75 hover:text-cream"
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <motion.a
            href={BUSINESS.phoneHref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-cream shadow-lg transition-shadow hover:shadow-xl"
          >
            <Phone className="h-4 w-4 text-goldlight" />
            {BUSINESS.phone}
          </motion.a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`grid h-10 w-10 place-items-center rounded-full transition-colors duration-500 md:hidden ${
            scrolled ? "bg-ink/5 text-ink" : "bg-cream/10 text-cream"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden bg-cream/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-xl px-3 py-3 font-display text-2xl font-semibold text-ink hover:bg-sand"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={BUSINESS.phoneHref}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 font-bold text-cream"
              >
                <Phone className="h-4 w-4 text-goldlight" />
                Call {BUSINESS.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
}
