"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircleMore } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/product-image";

interface HeroSlide {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface AnimatedHomeHeroProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  stats: { label: string; value: string }[];
  whatsapp: string;
  slides: HeroSlide[];
}

const rotationMs = 4800;

export function AnimatedHomeHero({
  eyebrow,
  headline,
  subheadline,
  stats,
  whatsapp,
  slides,
}: AnimatedHomeHeroProps) {
  const safeSlides = useMemo(() => slides.filter((slide) => slide.image), [slides]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = safeSlides[activeIndex] ?? safeSlides[0];

  useEffect(() => {
    if (safeSlides.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeSlides.length);
    }, rotationMs);

    return () => window.clearInterval(timer);
  }, [safeSlides.length]);

  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#101f1c] px-4 pb-12 pt-8 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(245,158,11,0.24),transparent_28%),linear-gradient(135deg,#101f1c_0%,#163c35_52%,#f1e5d0_52%,#efe7d8_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#f7f3eb] to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="animate-rise-in space-y-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">{eyebrow}</p>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-6xl lg:text-7xl">
              {headline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-emerald-50/80 md:text-xl">{subheadline}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full bg-amber-300 px-6 font-semibold text-zinc-950 shadow-xl shadow-black/15 hover:bg-amber-200">
              <Link href="/request-quote">
                Request Quote
                <span className="ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 text-white">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/35 bg-white/10 px-6 font-semibold text-white backdrop-blur hover:bg-white hover:text-[#163c35]"
            >
              <a href={`https://wa.me/91${whatsapp}`} target="_blank" rel="noreferrer">
                WhatsApp Us
                <MessageCircleMore className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <dl className="grid max-w-2xl gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur">
                <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-amber-200">{item.label}</dt>
                <dd className="mt-2 text-lg font-semibold leading-tight text-white md:text-xl">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-float-in">
          <div className="absolute -left-5 top-12 hidden h-24 w-24 rounded-full border border-white/20 lg:block" />
          <div className="absolute -right-4 bottom-16 hidden h-32 w-32 rounded-full border border-amber-300/30 lg:block" />
          <div className="relative overflow-hidden rounded-[1.35rem] border border-white/20 bg-white/10 p-2 shadow-[0_35px_110px_-48px_rgba(0,0,0,0.8)] backdrop-blur">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-200">
              {safeSlides.map((slide, index) => (
                <div
                  key={slide.slug}
                  className={`absolute inset-0 transition duration-1000 ease-out ${
                    index === activeIndex ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                  }`}
                  aria-hidden={index !== activeIndex}
                >
                  <ProductImage src={slide.image} alt={slide.imageAlt} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>

            {activeSlide ? (
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/25 bg-zinc-950/72 p-4 text-white shadow-xl backdrop-blur-md md:bottom-7 md:left-7 md:right-auto md:max-w-md md:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">{activeSlide.eyebrow}</p>
                <h2 className="mt-2 text-xl font-semibold md:text-2xl">{activeSlide.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-200">{activeSlide.description}</p>
                <Link
                  href={`/products/${activeSlide.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-amber-300 transition hover:text-amber-200"
                >
                  Explore category
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ) : null}
          </div>

          <div className="mt-5 flex items-center gap-3">
            {safeSlides.map((slide, index) => (
              <button
                key={slide.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-10 bg-amber-300" : "w-2.5 bg-white/35 hover:bg-white/65"
                }`}
                aria-label={`Show ${slide.title}`}
              />
            ))}
            <div key={activeIndex} className="ml-1 h-px flex-1 overflow-hidden bg-white/20">
              <span className="hero-progress block h-full bg-amber-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
