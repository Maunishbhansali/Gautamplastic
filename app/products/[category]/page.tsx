import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/product-image";
import { getCategoryHeroBySlug } from "@/lib/business";
import { getContentSnapshot } from "@/lib/cms";

export async function generateStaticParams() {
  const snapshot = await getContentSnapshot();

  return snapshot.productCategories.map((category) => ({ category: category.slug }));
}

type CategoryPageParams = Promise<{ category: string }>;

export async function generateMetadata({ params }: { params: CategoryPageParams }): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const snapshot = await getContentSnapshot();
  const category = snapshot.productCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    return {};
  }

  const hero = snapshot.categoryHeroes[category.slug] ?? getCategoryHeroBySlug(category.slug);

  return {
    title: `${category.name} Supplier Ahmedabad | Gautam Plastic`,
    description: `${category.summary} Gautam Plastic supplies ${category.name.toLowerCase()} for industrial and commercial packaging needs in Ahmedabad, Gujarat.`,
    alternates: {
      canonical: `https://www.gautamplastic.com/products/${category.slug}`,
    },
    keywords: [...category.keywords, "Gautam Plastic", "Ahmedabad Gujarat"],
    openGraph: {
      title: `${category.name} Supplier Ahmedabad | Gautam Plastic`,
      description: `${category.summary} Trusted plastic packaging supplier in Ahmedabad, Gujarat.`,
      type: "website",
      images: [{ url: `https://www.gautamplastic.com${hero.image}`, alt: hero.imageAlt }],
    },
  };
}

export default async function CategoryPage({ params }: { params: CategoryPageParams }) {
  const { category: categorySlug } = await params;
  const snapshot = await getContentSnapshot();
  const category = snapshot.productCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const hero = snapshot.categoryHeroes[category.slug] ?? getCategoryHeroBySlug(category.slug);
  const products = snapshot.productCatalog.filter((product) => product.category === category.slug);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gautamplastic.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.gautamplastic.com/products" },
      { "@type": "ListItem", position: 3, name: category.name, item: `https://www.gautamplastic.com/products/${category.slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f3eb] text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-[#101f1c] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">{hero.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">{hero.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50/80">{hero.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="h-12 rounded-full bg-amber-300 px-6 font-semibold text-zinc-950 hover:bg-amber-200">
                <Link href="/request-quote">
                  {hero.ctaLabel}
                  <span className="ml-3 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 text-white">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full border-white/35 bg-white/10 px-6 font-semibold text-white backdrop-blur hover:bg-white hover:text-[#163c35]">
                <a href={`https://wa.me/91${snapshot.business.whatsapp}`} target="_blank" rel="noreferrer">
                  WhatsApp Us
                  <MessageCircleMore className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10 p-2 shadow-2xl">
            <ProductImage src={hero.image} alt={hero.imageAlt} className="h-[440px] w-full rounded-[1.1rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${category.slug}/${product.slug}`}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-2xl"
            >
              <div className="h-56 overflow-hidden bg-zinc-100">
                <ProductImage src={product.image} alt={product.imageAlt ?? product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-zinc-950">{product.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{product.shortDescription}</p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-amber-600 transition group-hover:translate-x-1" />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">{product.material}</span>
                  <span className="rounded-full bg-[#f7f3eb] px-3 py-1 text-xs font-semibold text-zinc-700">
                    {product.capacities.length ? product.capacities[0] : "Multiple sizes"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-[1.5rem] border border-zinc-200 bg-white p-5 shadow-sm md:p-6 lg:grid-cols-[1.15fr_repeat(3,1fr)]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Supply snapshot</p>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-950">Procurement-ready support</h2>
          </div>
          {[
            { label: "Experience", value: snapshot.business.established, icon: Check },
            { label: "Location", value: `${snapshot.business.city}, ${snapshot.business.state}`, icon: MapPin },
            { label: "Phone", value: snapshot.business.phones.join(" / "), icon: PhoneCall },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl bg-[#f7f3eb] p-4">
                <Icon className="h-5 w-5 text-amber-600" />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">{item.label}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-zinc-800">{item.value}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
