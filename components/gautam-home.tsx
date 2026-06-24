import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Droplets,
  Factory,
  FlaskConical,
  Home,
  Mail,
  MapPin,
  PackageCheck,
  PhoneCall,
  ShieldCheck,
  Sprout,
  Store,
  Truck,
  Utensils,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/product-image";
import { AnimatedHomeHero } from "@/components/animated-home-hero";
import type { SiteContentSnapshot } from "@/lib/cms";
import { getCategoryHeroBySlug } from "@/lib/business";
import { getIndustryByName } from "@/lib/industries";
import { cn } from "@/lib/utils";

const advantages = [
  {
    title: "25+ Years of Sourcing",
    description: "Established relationships and product knowledge for reliable PET and HDPE packaging procurement.",
    icon: BadgeCheck,
  },
  {
    title: "Material Confidence",
    description: "Clean finishing, reliable closures, and packaging formats suited for demanding industrial use.",
    icon: ShieldCheck,
  },
  {
    title: "Practical Guidance",
    description: "Clear recommendations across bottles, jars, drums, pumps, measuring units, and closures.",
    icon: Factory,
  },
  {
    title: "India-Wide Dispatch",
    description: "Coordinated supply support for Ahmedabad, Gujarat, and buyers across India.",
    icon: Truck,
  },
];

const proofPoints = [
  "PET, HDPE, jars, drums, pumps, caps and closure systems",
  "Bulk supply support for factories, distributors and laboratories",
  "Fast quotation guidance for sizes, materials and availability",
];

const industryIcons = {
  "food-and-beverage-packaging": Utensils,
  "pharmaceutical-and-laboratory-packaging": FlaskConical,
  "chemical-and-industrial-liquids": Droplets,
  "household-and-consumer-goods": Home,
  "agriculture-and-fertilizer-packaging": Sprout,
  "retail-and-distribution-supply": Store,
};

function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-bold uppercase tracking-[0.24em] text-amber-600", className)}>
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">{title}</h2>
      </div>
      <p className="max-w-xl text-base leading-7 text-zinc-600">{description}</p>
    </div>
  );
}

interface GautamHomeProps {
  snapshot: SiteContentSnapshot;
}

export default function GautamHome({ snapshot }: GautamHomeProps) {
  const featuredCategories = snapshot.productCategories.slice(0, 6);
  const remainingCategories = snapshot.productCategories.slice(6);
  const heroSlides = snapshot.productCategories.slice(0, 5).map((category) => {
    const hero = snapshot.categoryHeroes[category.slug] ?? getCategoryHeroBySlug(category.slug);

    return {
      slug: category.slug,
      eyebrow: hero.eyebrow,
      title: category.name,
      description: category.summary,
      image: hero.image,
      imageAlt: hero.imageAlt,
    };
  });

  return (
    <main className="min-h-screen bg-[#f7f3eb] text-zinc-950">
      <AnimatedHomeHero
        eyebrow={snapshot.siteContent.home.eyebrow}
        headline={snapshot.siteContent.home.headline}
        subheadline={snapshot.siteContent.home.subheadline}
        stats={snapshot.siteContent.home.stats}
        whatsapp={snapshot.business.whatsapp}
        slides={heroSlides}
      />

      <section className="bg-[#f7f3eb] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {proofPoints.map((item) => (
            <div key={item} className="animate-soft-reveal flex items-start gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
                <Check className="h-3.5 w-3.5" />
              </span>
              <p className="text-sm leading-6 text-zinc-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Product range"
          title="A tighter catalogue for serious packaging buyers"
          description="From compact bottles to large drums, the range is organized around real procurement needs across manufacturing, retail, and laboratory use."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredCategories.map((category, index) => {
            const hero = snapshot.categoryHeroes[category.slug] ?? getCategoryHeroBySlug(category.slug);
            const isLarge = index === 0;

            return (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className={cn(
                  "group animate-soft-reveal overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-2xl",
                  isLarge ? "md:col-span-2 xl:col-span-1 xl:row-span-2" : "",
                )}
              >
                <div className={cn("overflow-hidden bg-zinc-100", isLarge ? "h-72 xl:h-[27rem]" : "h-56")}>
                  <ProductImage
                    src={hero.image}
                    alt={hero.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-950">{category.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">{category.summary}</p>
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-amber-600 transition group-hover:translate-x-1" />
                  </div>
                  <span className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                    {category.keywords[0]}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {remainingCategories.length ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {remainingCategories.map((category) => {
              const hero = snapshot.categoryHeroes[category.slug] ?? getCategoryHeroBySlug(category.slug);

              return (
                <Link
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  className="group animate-soft-reveal overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-2xl"
                >
                  <div className="h-44 overflow-hidden bg-zinc-100">
                    <ProductImage
                      src={hero.image}
                      alt={hero.imageAlt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-950">{category.name}</h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">{category.summary}</p>
                      </div>
                      <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-amber-600 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : null}
      </section>

      <section id="advantages" className="bg-zinc-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl space-y-3">
            <SectionLabel className="text-amber-400">Why choose us</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Sourcing support that behaves like part of your procurement desk.
            </h2>
            <p className="text-base leading-7 text-zinc-300">
              Gautam Plastic keeps the conversation practical: product fit, quantity, availability, dispatch and clear follow-up.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group bg-zinc-950 p-6 transition duration-300 hover:bg-zinc-900">
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-md bg-amber-500 text-zinc-950">
                    <Icon className="h-5 w-5 transition duration-300 group-hover:rotate-6 group-hover:scale-110" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-[#f7f3eb] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-3">
              <SectionLabel>Industries served</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                Packaging support across core buyer segments.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-zinc-600">
              A quick overview for scanning. The detailed industry pages carry the visuals, products and use cases.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {snapshot.industriesServed.map((item) => {
                const industry = getIndustryByName(item);
                const Icon = industryIcons[industry.slug as keyof typeof industryIcons] ?? PackageCheck;

                return (
                  <Link
                    key={item}
                    href={`/industries/${industry.slug}`}
                    className="group flex min-h-36 items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-xl"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#163c35] text-white shadow-sm">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold leading-tight text-zinc-950">{industry.name}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600">{industry.summary}</p>
                      <span className="mt-3 inline-flex items-center text-sm font-semibold text-[#163c35]">
                        View details
                        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-[0_24px_70px_-48px_rgba(24,24,27,0.55)] md:p-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-[1.2rem] bg-[#163c35] p-6 text-white md:p-8">
              <SectionLabel className="text-amber-300">Ready to partner</SectionLabel>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Get a cleaner quote path for your next packaging order.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-emerald-50/80">
                Share the product type, capacity, quantity and use case. We will help shortlist the right bottles, jars, drums, pumps or closures for your requirement.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-full bg-amber-300 px-6 font-semibold text-zinc-950 hover:bg-amber-200">
                  <Link href="/request-quote">
                    Request Quote
                    <span className="ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 text-white">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-white/35 bg-white/10 px-6 font-semibold text-white backdrop-blur hover:bg-white hover:text-[#163c35]"
                >
                  <a href={`https://wa.me/91${snapshot.business.whatsapp}`} target="_blank" rel="noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {["Product format", "Capacity / size", "Estimated quantity"].map((item, index) => (
                  <div key={item} className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">0{index + 1}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
          </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-zinc-200 bg-[#f7f3eb] p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-zinc-950">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-950">Visit / dispatch point</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{snapshot.business.location}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a href={`mailto:${snapshot.business.email}`} className="group rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <p className="mt-5 text-sm font-semibold text-zinc-950">Email</p>
                  <p className="mt-2 break-words text-sm text-zinc-600">{snapshot.business.email}</p>
                </a>
                <a href={`tel:${snapshot.business.phones[0]}`} className="group rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
                  <PhoneCall className="h-5 w-5 text-amber-600" />
                  <p className="mt-5 text-sm font-semibold text-zinc-950">Call</p>
                  <p className="mt-2 text-sm text-zinc-600">{snapshot.business.phones[0]}</p>
                </a>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-[#f7f3eb] p-5">
                  <PackageCheck className="h-5 w-5 text-amber-600" />
                  <p className="mt-4 text-sm font-semibold text-zinc-950">Focused supply support</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {snapshot.business.industry} based in {snapshot.business.city}, {snapshot.business.state}, supporting PET, HDPE and closure procurement.
                  </p>
              </div>
            </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-zinc-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Gautam Plastic. All rights reserved.</p>
          <p>{snapshot.business.city}, {snapshot.business.state} · PET, HDPE, drums, bottles, jars, caps and closures.</p>
        </div>
      </footer>
    </main>
  );
}
