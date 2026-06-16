import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contentSnapshot } from "@/lib/cms";

export const metadata = {
  title: "Industries | Gautam Plastic",
  description: "Industrial packaging solutions for pharmaceutical, food, cosmetics, chemical and household sectors in Ahmedabad.",
};

const industryCopy = [
  {
    label: "Pharmaceutical",
    summary: "Packaging solutions designed for lab-grade handling, reagent storage and compliant delivery of pharmaceutical liquids.",
  },
  {
    label: "Food & Beverage",
    summary: "Food-safe bottles, jars and containers for beverage, ingredient and retail packaging applications.",
  },
  {
    label: "Cosmetics",
    summary: "Stylish and reliable packaging for creams, lotions, shampoos and personal care liquids.",
  },
  {
    label: "Chemical",
    summary: "Durable HDPE and PET packaging for corrosive products, cleaning chemicals and industrial liquids.",
  },
  {
    label: "Household Products",
    summary: "Packaging designed for safe, practical storage of cleaners, sanitizers and home care products.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">Industries</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">Industrial packaging for business-critical sectors</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">Gautam Plastic supports packaging requirements for pharmaceutical, food, cosmetics, chemical and household product businesses.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industryCopy.map((item) => (
            <Card key={item.label} className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl text-[#003366]">{item.label}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">{item.summary}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-[#003366]">Packaging support for your industry</h2>
          <p className="mt-4 text-slate-600">Our focus is on consistent stock, simple sourcing and product compatibility so procurement teams can rely on packaging that fits their needs.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contentSnapshot.industriesServed.map((industry) => (
              <div key={industry} className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700 shadow-sm">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
