import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contentSnapshot } from "@/lib/cms";
import { productCatalog } from "@/lib/products";

export const metadata = {
  title: "Plastic Packaging Categories | Gautam Plastic",
  description: "Explore Gautam Plastic’s PET bottles, HDPE bottles, jars, jerry cans, drums, containers, caps and closures for industrial packaging needs in Ahmedabad.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">{contentSnapshot.siteContent.products.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{contentSnapshot.siteContent.products.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{contentSnapshot.siteContent.products.description}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contentSnapshot.productCategories.map((category) => (
            <Card key={category.slug} className="border-slate-200 bg-white shadow-sm hover:-translate-y-0.5 hover:border-[#003366]/30 hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-[#003366]">{category.name}</CardTitle>
                <CardDescription>{category.summary}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between gap-4">
                <span className="text-sm text-slate-500">Keywords: {category.keywords[0]}</span>
                <Button asChild variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                  <Link href={`/products/${category.slug}`}>View category</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/80">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">Why buyers shortlist us</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#003366] md:text-3xl">Supplier and trader model for fast, practical packaging procurement</h2>
            <p className="mt-3 text-slate-600">We focus on category-based sourcing, dependable supply, and clear communication for businesses seeking trusted plastic packaging solutions in Ahmedabad and across Gujarat.</p>
          </div>
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardContent className="space-y-3 p-5 text-sm text-slate-700">
              <p><strong>Name:</strong> {contentSnapshot.business.fullName}</p>
              <p><strong>Location:</strong> {contentSnapshot.business.location}</p>
              <p><strong>Phone:</strong> {contentSnapshot.business.phones.join(" / ")}</p>
              <p><strong>WhatsApp:</strong> {contentSnapshot.business.whatsapp}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">Full catalog</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#003366]">All products in one place</h2>
          </div>
          <Button asChild variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
            <Link href="/contact">Request custom quote</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCatalog.map((product) => (
            <Card key={product.slug} className="overflow-hidden border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#003366]/30 hover:shadow-md">
              <div className="h-52 w-full bg-slate-100" />
              <CardHeader>
                <CardTitle className="text-xl text-[#003366]">{product.name}</CardTitle>
                <CardDescription>{product.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                <p className="text-sm text-slate-600"><strong>Material:</strong> {product.material}</p>
                <p className="text-sm text-slate-600"><strong>Capacity:</strong> {product.capacities.length ? product.capacities.join(", ") : "Multiple"}</p>
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
