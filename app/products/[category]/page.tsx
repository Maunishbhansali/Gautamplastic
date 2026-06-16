import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">{hero.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{hero.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">{hero.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-[#003366] text-white hover:bg-[#00254f]">{hero.ctaLabel}</Button>
              <Button variant="outline" className="border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white">WhatsApp Us</Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-slate-50 shadow-sm">
            <ProductImage src={hero.image} alt={hero.imageAlt} className="h-[420px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <Card key={product.slug} className="overflow-hidden border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#003366]/30 hover:shadow-md">
              <ProductImage src={product.image} alt={product.imageAlt ?? product.name} className="h-52 w-full object-cover" />
              <CardHeader>
                <CardTitle className="text-xl text-[#003366]">{product.name}</CardTitle>
                <CardDescription className="text-slate-600">{product.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                <p className="text-sm text-slate-600"><strong>Material:</strong> {product.material}</p>
                <p className="text-sm text-slate-600"><strong>Capacities:</strong> {product.capacities.length ? product.capacities.join(", ") : "Multiple"}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button asChild variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                    <Link href={`/products/${category.slug}/${product.slug}`}>View product</Link>
                  </Button>
                  <span className="rounded-full bg-[#FF7A00]/10 px-3 py-1 text-xs font-semibold text-[#FF7A00]">{product.material}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Card className="border-slate-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">Business details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm text-slate-700 md:grid-cols-2">
            <p><strong>Business:</strong> {snapshot.business.fullName}</p>
            <p><strong>Experience:</strong> {snapshot.business.established}</p>
            <p><strong>Location:</strong> {snapshot.business.location}</p>
            <p><strong>Phone:</strong> {snapshot.business.phones.join(" / ")}</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
