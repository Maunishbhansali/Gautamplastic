import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { ProductImage } from "@/components/product-image";
import { getContentSnapshot } from "@/lib/cms";

export async function generateStaticParams() {
  const snapshot = await getContentSnapshot();

  return snapshot.productCatalog.map((product) => ({ category: product.category, product: product.slug }));
}

type ProductPageParams = Promise<{ category: string; product: string }>;

export async function generateMetadata({ params }: { params: ProductPageParams }): Promise<Metadata> {
  const { category: categorySlug, product: productSlug } = await params;
  const snapshot = await getContentSnapshot();
  const category = snapshot.productCategories.find((item) => item.slug === categorySlug);
  const product = snapshot.productCatalog.find((item) => item.slug === productSlug && item.category === categorySlug);

  if (!category || !product) {
    return {};
  }

  return {
    title: product.seoTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `https://www.gautamplastic.com/products/${category.slug}/${product.slug}`,
    },
    keywords: [...category.keywords, product.name, "Gautam Plastic", "Ahmedabad Gujarat"],
    openGraph: {
      title: product.seoTitle,
      description: product.metaDescription,
      type: "website",
      images: [{ url: `https://www.gautamplastic.com${product.image}`, alt: product.name }],
    },
  };
}

export default async function ProductPage({ params }: { params: ProductPageParams }) {
  const { category: categorySlug, product: productSlug } = await params;
  const snapshot = await getContentSnapshot();
  const category = snapshot.productCategories.find((item) => item.slug === categorySlug);
  const product = snapshot.productCatalog.find((item) => item.slug === productSlug && item.category === categorySlug);

  if (!category || !product) {
    notFound();
  }

  const relatedProducts = snapshot.productCatalog.filter((item) => item.category === category.slug && item.slug !== product.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">{category.name}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{product.name}</h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">{product.shortDescription}</p>
          </div>

          <Card className="border-slate-200 bg-slate-50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-[#003366]">Request details</CardTitle>
              <CardDescription>Get a tailored quote, MOQ guidance and delivery support from Ahmedabad.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p><strong>Material:</strong> {product.material}</p>
              <p><strong>Variants:</strong> {product.variants.length ? product.variants.join(", ") : "Available on request"}</p>
              <p><strong>Capacities:</strong> {product.capacities.length ? product.capacities.join(", ") : "Multiple"}</p>
              <Button className="w-full bg-[#003366] text-white hover:bg-[#00254f]">Contact Sales</Button>
              <Button variant="outline" className="w-full border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white">Enquire on WhatsApp</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_0.5fr]">
          <Card className="border-slate-200 bg-white shadow-sm">
            <ProductImage src={product.image} alt={product.imageAlt ?? product.name} className="h-96 w-full object-cover" />
            <CardContent className="space-y-5 p-8">
              <div>
                <h2 className="text-2xl font-semibold text-[#003366]">Product overview</h2>
                <p className="mt-3 text-slate-600">{product.metaDescription}</p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-semibold text-[#003366]">Applications</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {product.applications.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-semibold text-[#003366]">Product details</h3>
                  <dl className="mt-3 space-y-2 text-sm text-slate-700">
                    <div>
                      <dt className="font-medium">Material</dt>
                      <dd>{product.material}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Caps & closures</dt>
                      <dd>{product.variants.length ? product.variants.join(", ") : "Custom options"}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Capacities</dt>
                      <dd>{product.capacities.length ? product.capacities.join(", ") : "Custom sizes"}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-slate-50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-[#003366]">More in {category.name}</CardTitle>
              <CardDescription>Related packaging options from the same category.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {relatedProducts.map((item) => (
                <div key={item.slug} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#003366]">{item.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.shortDescription}</p>
                  <Button asChild variant="outline" className="mt-4 w-full border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                    <a href={`/products/${category.slug}/${item.slug}`}>View</a>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
