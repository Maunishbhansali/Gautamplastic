import Link from "next/link";

import { ProductImage } from "@/components/product-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getContentSnapshot } from "@/lib/cms";
import { getIndustryByName } from "@/lib/industries";

export const metadata = {
  title: "Industries | Gautam Plastic",
  description: "Industrial packaging solutions for pharmaceutical, food, cosmetics, chemical and household sectors in Ahmedabad.",
};

export default async function IndustriesPage() {
  const snapshot = await getContentSnapshot();
  const industries = snapshot.industriesServed.map(getIndustryByName);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">Industries</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">Industrial packaging for business-critical sectors</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">Gautam Plastic supports packaging requirements for pharmaceutical, food, cosmetics, chemical and household product businesses.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item) => (
            <Link key={item.slug} href={`/industries/${item.slug}`} className="block rounded-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FF7A00]/35">
              <Card className="h-full overflow-hidden border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#003366]/30 hover:shadow-md">
                <ProductImage src={item.image} alt={item.imageAlt} className="h-44 w-full object-cover" />
                <CardHeader>
                  <CardTitle className="text-xl text-[#003366]">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600">{item.summary}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-[#003366]">Packaging support for your industry</h2>
          <p className="mt-4 text-slate-600">Our focus is on consistent stock, simple sourcing and product compatibility so procurement teams can rely on packaging that fits their needs.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm transition hover:border-[#003366]/30 hover:text-[#003366]">
                {industry.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
