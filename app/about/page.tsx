import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contentSnapshot } from "@/lib/cms";

export const metadata = {
  title: "About Gautam Plastic | Plastic Packaging Supplier Ahmedabad",
  description: "Learn about Gautam Plastic’s 25+ years of experience, industrial packaging focus, and supplier-trader model for PET, HDPE and closure solutions in Ahmedabad.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">{contentSnapshot.siteContent.about.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{contentSnapshot.siteContent.about.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{contentSnapshot.siteContent.about.description}</p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <Card className="border-slate-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">Our positioning</CardTitle>
            <CardDescription>{contentSnapshot.siteContent.about.summaryText}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-600">
            {contentSnapshot.siteContent.about.body.map((copy) => (
              <p key={copy}>{copy}</p>
            ))}
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-slate-50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">{contentSnapshot.siteContent.about.summaryTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-700">
            <p><strong>Business Name:</strong> {contentSnapshot.business.name}</p>
            <p><strong>Experience:</strong> {contentSnapshot.business.established}</p>
            <p><strong>Business Type:</strong> {contentSnapshot.business.businessType}</p>
            <p><strong>Location:</strong> {contentSnapshot.business.location}</p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-[#003366] md:text-3xl">Industries we support</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {contentSnapshot.industriesServed.map((item) => (
            <Card key={item} className="border-slate-200 bg-white shadow-sm">
              <CardContent className="p-5 text-slate-700">{item}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
