import { ArrowRight, BadgeCheck, Factory, Globe2, Mail, MapPin, MessageCircleMore, ShieldCheck, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contentSnapshot } from "@/lib/cms";
import { cn } from "@/lib/utils";

const products = contentSnapshot.productCategories.map((item) => item.name);

const advantages = [
  {
    title: "25+ Years of Experience",
    description: "Deep manufacturing knowledge and a trusted supply record for industrial and commercial packing needs.",
    icon: BadgeCheck,
  },
  {
    title: "Consistent Quality",
    description: "Reliable material strength, clean finishing, and standard compliance for demanding packaging applications.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Packaging Support",
    description: "Flexible supply options and packaging consultation for buyers seeking performance and value.",
    icon: Factory,
  },
  {
    title: "Fast Delivery Across India",
    description: "Streamlined logistics support to keep your production and distribution schedules on track.",
    icon: Truck,
  },
];

const industries = [
  "Food & Beverage",
  "Pharmaceuticals",
  "Chemical & Industrial",
  "Household & Consumer Goods",
  "Agriculture & Fertilizers",
  "Personal Care & Cosmetics",
];

function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-sm font-semibold uppercase tracking-[0.32em] text-[#FF7A00]", className)}>
      {children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl space-y-3">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="text-3xl font-semibold tracking-tight text-[#003366] md:text-4xl">{title}</h2>
      <p className="text-base text-slate-600 md:text-lg">{description}</p>
    </div>
  );
}

export default function GautamHome() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#003366] text-base font-semibold text-white shadow-sm">GP</span>
            <span>
              <span className="block text-lg font-semibold text-[#003366]">Gautam Plastic</span>
              <span className="block text-xs uppercase tracking-[0.25em] text-slate-500">Plastic Packaging Supplier</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <a className="text-sm font-medium text-slate-700 hover:text-[#003366]" href="#products">Products</a>
            <a className="text-sm font-medium text-slate-700 hover:text-[#003366]" href="#advantages">Why Choose Us</a>
            <a className="text-sm font-medium text-slate-700 hover:text-[#003366]" href="#industries">Industries</a>
            <a className="text-sm font-medium text-slate-700 hover:text-[#003366]" href="#contact">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden sm:inline-flex border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">Request Quote</Button>
            <Button className="bg-[#FF7A00] text-white hover:bg-[#e56e00]">WhatsApp Us</Button>
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-20 lg:pt-16">
        <div className="space-y-8">
          <SectionLabel>{contentSnapshot.siteContent.home.eyebrow}</SectionLabel>
          <div className="space-y-5">
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl lg:text-6xl">
              {contentSnapshot.siteContent.home.headline}
            </h1>
            <p className="max-w-xl text-lg text-slate-600 md:text-xl">{contentSnapshot.siteContent.home.subheadline}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="bg-[#003366] text-white hover:bg-[#00254f]">Request Quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button size="lg" variant="outline" className="border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white">WhatsApp Us <MessageCircleMore className="ml-2 h-4 w-4" /></Button>
          </div>

          <dl className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:grid-cols-3">
            {contentSnapshot.siteContent.home.stats.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-slate-500">{item.label}</dt>
                <dd className="mt-1 text-2xl font-semibold text-[#003366]">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Card className="border-slate-200 bg-white p-0 shadow-[0_18px_60px_-30px_rgba(0,51,102,0.45)]">
          <CardHeader className="rounded-t-3xl bg-gradient-to-br from-[#003366] to-[#004a89] p-6 text-white">
            <SectionLabel className="text-[#FFD4A8]">Why buyers trust us</SectionLabel>
            <CardTitle className="text-2xl text-white">Premium industrial packaging, delivered with clarity.</CardTitle>
            <CardDescription className="text-slate-200">A practical partner for packaging buyers who want consistency, precision, and dependable supply.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            {[
              "PET, HDPE, and custom packaging solutions",
              "Bulk supply support for industrial and commercial use",
              "Professional consultation for product selection and volumes",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FF7A00]/10 text-[#FF7A00]">✓</span>
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-[#FF7A00]/20 bg-[#FFF5EC] p-4 text-sm text-slate-700">
              Need a fast response? We support quotation requests and product guidance for packaging requirements across Gujarat and India.
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionHeading
          eyebrow="Product range"
          title="Packaging solutions for every industrial need"
          description="From compact bottles to large drums, our range covers everyday packaging requirements across manufacturing, retail, and laboratory use."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((item, index) => (
            <Card key={item} className="border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#003366]/30 hover:shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-[#003366]">{item}</CardTitle>
                <CardDescription>Industrial-grade packaging for reliable containment and distribution.</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between text-sm text-slate-500">
                <span>Category {index + 1}</span>
                <span className="rounded-full bg-[#FF7A00]/10 px-2.5 py-1 text-[#FF7A00]">In stock</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="advantages" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <SectionHeading
          eyebrow="Why choose us"
          title="Built on reliability, quality, and practical support"
          description="Gautam Plastic combines engineering know-how with a focused packaging portfolio to meet business demands without complexity."
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-slate-200 bg-white shadow-sm hover:border-[#FF7A00]/40">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#003366] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl text-[#003366]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="industries" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="space-y-4">
            <SectionLabel>Industries served</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-[#003366] md:text-4xl">Packaging trusted across high-demand sectors</h2>
            <p className="text-slate-600">Our packaging portfolio supports businesses that need dependable containment, safe handling, and consistent availability.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((item) => (
              <Card key={item} className="border-slate-200 bg-white shadow-sm">
                <CardContent className="flex items-start gap-3 p-4">
                  <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FF7A00]/10 text-[#FF7A00]">
                    <Globe2 className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <Card className="border-slate-200 bg-gradient-to-r from-[#003366] to-[#004a89] text-white shadow-[0_18px_60px_-30px_rgba(0,51,102,0.55)]">
          <CardContent className="grid gap-6 p-6 md:grid-cols-[1fr_0.8fr] md:p-8">
            <div className="space-y-4">
              <SectionLabel className="text-[#FFD4A8]">Ready to partner</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s discuss your plastic packaging requirements.</h2>
              <p className="max-w-xl text-slate-200">Whether you need standard packaging or a tailored supply plan, Gautam Plastic is ready to support your business with premium, professional service.</p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <div className="space-y-3 text-sm text-slate-100">
                <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#FF7A00]" /> Ahmedabad, Gujarat</p>
                <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#FF7A00]" /> sales@gautamplastic.com</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="bg-[#FF7A00] text-white hover:bg-[#e56e00]">Request Quote</Button>
                <Button variant="outline" className="border-white/70 text-white hover:bg-white hover:text-[#003366]">WhatsApp Us</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50/80">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Gautam Plastic. All rights reserved.</p>
          <p>Industrial packaging supplier • Ahmedabad, Gujarat • PET, HDPE, drums, bottles, jars, caps & closures.</p>
        </div>
      </footer>
    </main>
  );
}
