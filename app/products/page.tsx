import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getContentSnapshot } from "@/lib/cms";
import { getCategoryHeroBySlug } from "@/lib/business";
import { ProductImage } from "@/components/product-image";

export const metadata = {
  title: "Plastic Packaging Categories | Gautam Plastic",
  description: "Explore Gautam Plastic’s PET bottles, HDPE bottles, jars, jerry cans, drums, containers, caps and closures for industrial packaging needs in Ahmedabad.",
};

export default async function ProductsPage() {
  const snapshot = await getContentSnapshot();

  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">{snapshot.siteContent.products.eyebrow}</p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{snapshot.siteContent.products.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">{snapshot.siteContent.products.description}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-[#003366] text-white hover:bg-[#00254f]">
                <Link href="/request-quote">Request Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white">
                <Link href="https://wa.me/919428...">WhatsApp Us</Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-[#FF7A00]">Established</p>
                <p className="mt-3 text-3xl font-semibold text-[#003366]">25+ years</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-[#FF7A00]">Location</p>
                <p className="mt-3 text-3xl font-semibold text-[#003366]">Ahmedabad</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-[#FF7A00]">Core focus</p>
                <p className="mt-3 text-3xl font-semibold text-[#003366]">Packaging</p>
              </div>
            </div>
          </div>

          <Card className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-[#FF7A00]">Why buyers trust us</p>
              <h2 className="text-2xl font-semibold text-[#003366]">Premium industrial packaging, delivered with clarity.</h2>
              <p className="text-slate-600">A practical partner for packaging buyers who want consistency, precision, and dependable supply.</p>
              <div className="space-y-3">
                {['PET, HDPE, and custom packaging solutions', 'Bulk supply support for industrial and commercial use', 'Professional consultation for product selection and volumes'].map((item) => (
                  <div key={item} className="rounded-3xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">Product range</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#003366]">Packaging solutions for every industrial need</h2>
          <p className="mt-3 max-w-3xl text-slate-600">From compact bottles to large drums, our range covers everyday packaging requirements across manufacturing, retail and laboratory use.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {snapshot.productCategories.map((category) => {
            const hero = snapshot.categoryHeroes[category.slug] ?? getCategoryHeroBySlug(category.slug);

            return (
              <Card key={category.slug} className="overflow-hidden border-slate-200 bg-white shadow-sm transition-transform hover:-translate-y-0.5 hover:border-[#003366]/30 hover:shadow-md">
                <div className="relative h-52 w-full bg-slate-100">
                  <ProductImage src={hero.image} alt={hero.imageAlt} className="h-full w-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-[#003366]">{category.name}</CardTitle>
                  <CardDescription>{category.summary}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <p className="text-sm text-slate-600">{category.summary}</p>
                  <div className="flex items-center justify-between gap-3">
                    <Button asChild variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                      <Link href={`/products/${category.slug}`}>Explore</Link>
                    </Button>
                    <span className="rounded-full bg-[#003366]/10 px-3 py-1 text-xs font-semibold text-[#003366]">{category.name}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">Our product catalog</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#003366]">Browse all packaging products</h2>
          </div>
          <Button asChild variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
            <Link href="/contact">Request custom quote</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {snapshot.productCatalog.map((product) => (
            <Card key={product.slug} className="overflow-hidden border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#003366]/30 hover:shadow-md">
              <div className="relative h-52 w-full bg-slate-100">
                <ProductImage src={product.image} alt={product.name} className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-[#003366]">{product.name}</CardTitle>
                <CardDescription>{product.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="space-y-1 text-sm text-slate-600">
                  <p><span className="font-semibold text-slate-900">Material:</span> {product.material}</p>
                  <p><span className="font-semibold text-slate-900">Capacity:</span> {product.capacities.length ? product.capacities.join(", ") : "Multiple"}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button asChild variant="outline" className="border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white">
                    <Link href={`/products/${product.category}/${product.slug}`}>View product</Link>
                  </Button>
                  <span className="rounded-full bg-[#003366]/10 px-3 py-1 text-xs font-semibold text-[#003366]">{product.category}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
