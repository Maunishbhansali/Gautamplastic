import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { business } from "@/lib/business";
import { QuoteForm } from "@/app/request-quote/QuoteForm";

export const metadata = {
  title: "Request Quote | Gautam Plastic",
  description: "Request a custom quote for PET bottles, HDPE bottles, jars, drums, containers, closures and industrial packaging.",
};

export default function RequestQuotePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">Request quote</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">Request a custom packaging quote</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">Share your product, capacity and quantity details so Gautam Plastic can prepare a practical supply recommendation.</p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <Card className="border-slate-200 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-[#003366]">Quote request details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-700">
            <p>Fill in the details below and we will contact you with pricing, availability and logistics support.</p>
            <dl className="grid gap-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-semibold">Phone</dt>
                <dd>{business.phones.join(" / ")}</dd>
              </div>
              <div>
                <dt className="font-semibold">WhatsApp</dt>
                <dd>{business.whatsapp}</dd>
              </div>
              <div>
                <dt className="font-semibold">Location</dt>
                <dd>{business.location}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <QuoteForm />
      </section>
    </main>
  );
}
