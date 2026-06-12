import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { business, getProductCategoryBySlug, productCategories } from "@/lib/business";

export function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getProductCategoryBySlug(slug);

  if (!category) {
    return {};
  }

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
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = productCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

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
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">Product category</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{category.name} for industrial and commercial packaging</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{category.summary} Gautam Plastic supports buyers seeking reliable packaging supply in Ahmedabad, Gujarat.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button className="bg-[#003366] text-white hover:bg-[#00254f]">Request Quote</Button>
          <Button variant="outline" className="border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white">WhatsApp Us</Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <Card className="border-slate-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">Why this category matters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-600">
            <p>Our packaging lines are structured for practical procurement, from everyday packaging needs to higher-volume industrial supply.</p>
            <p>Buyers searching for {category.name.toLowerCase()} supplier Ahmedabad, HDPE bottle supplier Ahmedabad, or PET bottle supplier Gujarat can use this page as a clear category landing page.</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-slate-50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">Related pages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-700">
            <Link className="block rounded-xl border border-slate-200 bg-white p-3 hover:border-[#003366]/30" href="/products">Browse all packaging categories</Link>
            <Link className="block rounded-xl border border-slate-200 bg-white p-3 hover:border-[#003366]/30" href="/about">Learn about Gautam Plastic</Link>
            <Link className="block rounded-xl border border-slate-200 bg-white p-3 hover:border-[#003366]/30" href="/contact">Contact the team</Link>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Card className="border-slate-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">Business details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm text-slate-700 md:grid-cols-2">
            <p><strong>Business:</strong> {business.fullName}</p>
            <p><strong>Experience:</strong> {business.established}</p>
            <p><strong>Location:</strong> {business.location}</p>
            <p><strong>Phone:</strong> {business.phones.join(" / ")}</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
