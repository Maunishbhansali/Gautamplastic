import Link from "next/link";
import { ArrowRight, Building2, Check, Clock3, MapPin, PackageCheck, ShieldCheck, Truck } from "lucide-react";

import { ProductImage } from "@/components/product-image";
import { getContentSnapshot } from "@/lib/cms";
import { getCategoryHeroBySlug } from "@/lib/business";

export const metadata = {
  title: "About Gautam Plastic | Plastic Packaging Supplier Ahmedabad",
  description: "Learn about Gautam Plastic's 25+ years of experience, industrial packaging focus, and supplier-trader model for PET, HDPE and closure solutions in Ahmedabad.",
};

const principles = [
  {
    title: "Clear sourcing advice",
    description: "We help buyers narrow down material, size, closure and packaging format without turning procurement into guesswork.",
    icon: PackageCheck,
  },
  {
    title: "Reliable product fit",
    description: "PET, HDPE, jars, drums, pumps and closures are matched to handling, storage, display and dispatch needs.",
    icon: ShieldCheck,
  },
  {
    title: "Practical dispatch support",
    description: "A local Ahmedabad base with supply support for Gujarat and buyers across India.",
    icon: Truck,
  },
];

export default async function AboutPage() {
  const snapshot = await getContentSnapshot();
  const heroImage = snapshot.categoryHeroes["hdpe-drums"] ?? getCategoryHeroBySlug("hdpe-drums");
  const secondaryImage = snapshot.categoryHeroes["pet-bottles"] ?? getCategoryHeroBySlug("pet-bottles");

  const details = [
    { label: "Business Name", value: snapshot.business.name, icon: Building2 },
    { label: "Experience", value: snapshot.business.established, icon: Clock3 },
    { label: "Business Type", value: snapshot.business.businessType, icon: PackageCheck },
    { label: "Location", value: snapshot.business.city + ", " + snapshot.business.state, icon: MapPin },
  ];

  return (
    <main className="min-h-screen bg-[#f7f3eb] text-zinc-950">
      <section className="relative isolate overflow-hidden bg-[#101f1c] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(245,158,11,0.22),transparent_28%),linear-gradient(135deg,#101f1c,#163c35)]" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="animate-rise-in">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">{snapshot.siteContent.about.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              Packaging supply built around buyer clarity.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/80">{snapshot.siteContent.about.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex h-11 items-center rounded-lg bg-white px-5 text-sm font-semibold text-[#163c35] transition hover:bg-amber-100">
                Explore products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex h-11 items-center rounded-lg border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#163c35]">
                Contact team
              </Link>
            </div>
          </div>

          <div className="relative animate-float-in">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur">
              <ProductImage src={heroImage.image} alt={heroImage.imageAlt} className="h-[440px] w-full rounded-[1.1rem] object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-zinc-950/75 p-5 text-white shadow-xl backdrop-blur md:left-auto md:w-80">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">Business summary</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">{snapshot.siteContent.about.summaryText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        {details.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="animate-soft-reveal rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#efe7d8] text-zinc-950">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{item.label}</p>
              <p className="mt-2 text-base font-semibold leading-6 text-zinc-950">{item.value}</p>
            </div>
          );
        })}
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:pb-20">
        <div className="overflow-hidden rounded-[1.5rem] bg-zinc-200">
          <ProductImage src={secondaryImage.image} alt={secondaryImage.imageAlt} className="h-full min-h-[420px] w-full object-cover" />
        </div>

        <div className="space-y-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-600">How we work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
              Less catalogue confusion. More confident packaging decisions.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-zinc-700">
              {snapshot.siteContent.about.body.map((copy) => (
                <p key={copy}>{copy}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <Icon className="h-5 w-5 text-amber-600" />
                  <h3 className="mt-4 text-base font-semibold text-zinc-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-zinc-950">Common categories we support</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {snapshot.productCategories.slice(0, 8).map((category) => (
                <span key={category.slug} className="inline-flex items-center gap-2 rounded-full bg-[#f7f3eb] px-3 py-1.5 text-sm font-medium text-zinc-700">
                  <Check className="h-3.5 w-3.5 text-amber-600" />
                  {category.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
