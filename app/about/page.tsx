import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getContentSnapshot } from "@/lib/cms";
import { getIndustryByName } from "@/lib/industries";
import Link from "next/link";

export const metadata = {
  title: "About Gautam Plastic | Plastic Packaging Supplier Ahmedabad",
  description: "Learn about Gautam Plastic’s 25+ years of experience, industrial packaging focus, and supplier-trader model for PET, HDPE and closure solutions in Ahmedabad.",
};

export default async function AboutPage() {
  const snapshot = await getContentSnapshot();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">{snapshot.siteContent.about.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{snapshot.siteContent.about.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{snapshot.siteContent.about.description}</p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <Card className="border-slate-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">Our positioning</CardTitle>
            <CardDescription>{snapshot.siteContent.about.summaryText}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-600">
            {snapshot.siteContent.about.body.map((copy) => (
              <p key={copy}>{copy}</p>
            ))}
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-slate-50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">{snapshot.siteContent.about.summaryTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-700">
            <p><strong>Business Name:</strong> {snapshot.business.name}</p>
            <p><strong>Experience:</strong> {snapshot.business.established}</p>
            <p><strong>Business Type:</strong> {snapshot.business.businessType}</p>
            <p><strong>Location:</strong> {snapshot.business.location}</p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-[#003366] md:text-3xl">Industries we support</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {snapshot.industriesServed.map((item) => {
            const industry = getIndustryByName(item);

            return (
              <Link key={item} href={`/industries/${industry.slug}`} className="block rounded-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#FF7A00]/35">
                <Card className="h-full border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#003366]/30 hover:shadow-md">
                  <CardContent className="p-5 text-slate-700">{industry.name}</CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
