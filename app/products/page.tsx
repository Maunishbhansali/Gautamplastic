import Link from "next/link";
import { ArrowRight, Check, Layers3, MessageCircleMore, PackageCheck, Ruler } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getContentSnapshot } from "@/lib/cms";
import { business, getCategoryHeroBySlug } from "@/lib/business";
import { ProductImage } from "@/components/product-image";

export const metadata = {
  title: "Plastic Packaging Categories | Gautam Plastic",
  description: "Explore Gautam Plastic's PET bottles, HDPE bottles, jars, jerry cans, drums, containers, caps and closures for industrial packaging needs in Ahmedabad.",
};

const trustNotes = [
  "PET, HDPE, jars, drums, pumps, caps and closure systems",
  "Bulk supply support for manufacturers, distributors and labs",
  "Guidance on product format, material, capacity and availability",
];

const catalogIcons = [PackageCheck, Layers3, Ruler];

export default async function ProductsPage() {
  const snapshot = await getContentSnapshot();
  const heroCategory = snapshot.categoryHeroes["pet-bottles"] ?? getCategoryHeroBySlug("pet-bottles");

  return (
    <main className="min-h-screen bg-[#f7f3eb] text-zinc-950">
      <section className="bg-[#101f1c] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
              {snapshot.siteContent.products.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              {snapshot.siteContent.products.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50/80">
              {snapshot.siteContent.products.description}
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
                <a href={`https://wa.me/91${business.whatsapp}`} target="_blank" rel="noreferrer">
                  WhatsApp Us
                  <MessageCircleMore className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <dl className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {snapshot.siteContent.home.stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur">
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-amber-200">{item.label}</dt>
                  <dd className="mt-2 text-lg font-semibold leading-tight text-white md:text-xl">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10 p-2 shadow-2xl">
            <ProductImage src={heroCategory.image} alt={heroCategory.imageAlt} className="h-[440px] w-full rounded-[1.1rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3eb] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {trustNotes.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
                <Check className="h-3.5 w-3.5" />
              </span>
              <p className="text-sm leading-6 text-zinc-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-600">Product range</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Browse by packaging category.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-zinc-600">
            Start with the format you need, then move into detailed product options for material, capacity and use case.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {snapshot.productCategories.map((category, index) => {
            const hero = snapshot.categoryHeroes[category.slug] ?? getCategoryHeroBySlug(category.slug);

            return (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-2xl"
              >
                <div className="h-56 overflow-hidden bg-zinc-100">
                  <ProductImage
                    src={hero.image}
                    alt={hero.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-600">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-zinc-950">{category.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">{category.summary}</p>
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-amber-600 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-600">Product catalog</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">All packaging products</h2>
            </div>
            <Button asChild className="h-12 rounded-full bg-[#163c35] px-6 font-semibold text-white hover:bg-[#0f2f29]">
              <Link href="/request-quote">
                Request custom quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {snapshot.productCatalog.map((product, index) => {
              const Icon = catalogIcons[index % catalogIcons.length];

              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.category}/${product.slug}`}
                  className="group grid gap-4 rounded-2xl border border-zinc-200 bg-[#f7f3eb] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-white hover:shadow-lg sm:grid-cols-[4rem_1fr]"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#163c35] shadow-sm">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-start justify-between gap-3">
                      <span>
                        <span className="block text-lg font-semibold text-zinc-950">{product.name}</span>
                        <span className="mt-1 block text-sm leading-6 text-zinc-600">{product.shortDescription}</span>
                      </span>
                      <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-amber-600 transition group-hover:translate-x-1" />
                    </span>
                    <span className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-700">{product.material}</span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
                        {product.capacities.length ? product.capacities[0] : "Multiple sizes"}
                      </span>
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
