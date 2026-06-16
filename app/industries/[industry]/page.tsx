import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductImage } from "@/components/product-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_0.8fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">Industry packaging</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{industry.heroTitle}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{industry.heroDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-[#003366] text-white hover:bg-[#00254f]">
              <Link href="/request-quote">Request Quote</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-slate-50 shadow-sm">
          <ProductImage src={industry.image} alt={industry.imageAlt} className="h-[420px] w-full object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {industry.highlights.map((highlight) => (
            <Card key={highlight} className="border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6 text-sm font-medium text-slate-700">{highlight}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
        <Card className="border-slate-200 bg-slate-50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">Common packaging needs</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {industry.products.map((product) => (
              <div key={product} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                {product}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">Relevant product categories</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {categories.map((category) => (
              <Link key={category.slug} href={`/products/${category.slug}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-[#003366] transition hover:border-[#003366]/40 hover:bg-white">
                {category.name}
              </Link>
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
