import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { ProductImage } from "@/components/product-image";
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
    <main className="min-h-screen bg-[#f7f3eb] text-zinc-950">
      <section className="bg-[#101f1c] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">Industries</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            Industrial packaging for business-critical sectors.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50/80">
            Gautam Plastic supports packaging requirements for pharmaceutical, food, cosmetics, chemical and household product businesses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item) => (
            <Link
              key={item.slug}
              href={`/industries/${item.slug}`}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-2xl"
            >
              <div className="h-56 overflow-hidden bg-zinc-100">
                <ProductImage src={item.image} alt={item.imageAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold text-zinc-950">{item.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{item.summary}</p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-amber-600 transition group-hover:translate-x-1" />
                </div>
                <div className="mt-5 grid gap-2">
                  {item.highlights.slice(0, 2).map((highlight) => (
                    <span key={highlight} className="flex items-start gap-2 text-sm leading-6 text-zinc-600">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-amber-600" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
