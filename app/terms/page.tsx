import { getPolicyPage } from "@/lib/policies";

const page = getPolicyPage("terms");

export const metadata = {
  title: page?.title ?? "Terms and Conditions | Gautam Plastic",
  description: page?.description ?? "Terms and conditions for Gautam Plastic website usage.",
};

export default function TermsPage() {
  if (!page) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">Terms</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{page.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{page.description}</p>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 space-y-6">
        {page.content.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-slate-700">{paragraph}</p>
        ))}
      </section>
    </main>
  );
}
