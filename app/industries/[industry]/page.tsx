import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

import { ProductImage } from "@/components/product-image";
import { getContentSnapshot } from "@/lib/cms";
import { getIndustryByName, getIndustryBySlug } from "@/lib/industries";

type IndustryPageParams = Promise<{ industry: string }>;

export async function generateStaticParams() {
  const snapshot = await getContentSnapshot();

  return snapshot.industriesServed.map((industry) => ({ industry: getIndustryByName(industry).slug }));
}

export async function generateMetadata({ params }: { params: IndustryPageParams }): Promise<Metadata> {
  const { industry: industrySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);

  if (!industry) {
    return {};
  }

  return {
    title: `${industry.name} | Gautam Plastic`,
    description: industry.summary,
    alternates: {
      canonical: `https://www.gautamplastic.com/industries/${industry.slug}`,
    },
    openGraph: {
      title: `${industry.name} | Gautam Plastic`,
      description: industry.summary,
      type: "website",
      images: [{ url: `https://www.gautamplastic.com${industry.image}`, alt: industry.imageAlt }],
    },
  };
}

export default async function IndustryPage({ params }: { params: IndustryPageParams }) {
  const { industry: industrySlug } = await params;
  const snapshot = await getContentSnapshot();
  const activeIndustryName = snapshot.industriesServed.find((industry) => getIndustryByName(industry).slug === industrySlug);
  const industry = activeIndustryName ? getIndustryByName(activeIndustryName) : getIndustryBySlug(industrySlug);

  if (!industry) {
    notFound();
  }

  const relatedCategories = snapshot.productCategories.filter((category) => industry.categorySlugs.includes(category.slug));
  const categories = relatedCategories.length ? relatedCategories.slice(0, 4) : snapshot.productCategories.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f7f3eb] text-zinc-950">
      <section className="bg-[#101f1c] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">Industry packaging</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">{industry.heroTitle}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50/80">{industry.heroDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-quote" className="inline-flex h-11 items-center rounded-lg bg-white px-5 text-sm font-semibold text-[#163c35] transition hover:bg-amber-100">
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex h-11 items-center rounded-lg border border-white/35 bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#163c35]">
                Contact Sales
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10 p-2 shadow-2xl">
            <ProductImage src={industry.image} alt={industry.imageAlt} className="h-[440px] w-full rounded-[1.1rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {industry.highlights.map((highlight) => (
            <div key={highlight} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <Check className="h-5 w-5 text-amber-600" />
              <p className="mt-4 text-sm font-semibold leading-6 text-zinc-800">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
        <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">Common packaging needs</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {industry.products.map((product) => (
              <span key={product} className="rounded-xl bg-[#f7f3eb] px-4 py-3 text-sm font-semibold text-zinc-800">
                {product}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">Relevant product categories</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {categories.map((category) => (
              <Link key={category.slug} href={`/products/${category.slug}`} className="group rounded-xl border border-zinc-200 bg-[#f7f3eb] px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400 hover:bg-white">
                {category.name}
                <ArrowRight className="ml-2 inline h-4 w-4 text-amber-600 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
