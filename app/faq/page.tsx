import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { faqItems } from "@/lib/faq";

export const metadata = {
  title: "FAQ | Gautam Plastic",
  description: "Frequently asked questions about Gautam Plastic’s packaging supply, order support and enquiry process.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">FAQ</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">Frequently asked questions</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">Answers to common enquiries about packaging categories, supply, shipping and quote requests.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {faqItems.map((item) => (
            <Card key={item.question} className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-[#003366]">{item.question}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">{item.answer}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
