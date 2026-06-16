import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeoLandingPage } from "@/lib/seo";

export async function generateStaticParams() {
  return [
    { slug: "pet-bottle-supplier-ahmedabad" },
    { slug: "hdpe-bottle-supplier-ahmedabad" },
    { slug: "plastic-jar-supplier-gujarat" },
    { slug: "jerry-can-supplier-ahmedabad" },
    { slug: "plastic-drum-supplier-gujarat" },
  ];
}

type SeoLandingPageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: SeoLandingPageParams }): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://www.gautamplastic.com/${page.slug}` },
  };
}

export default async function SeoLandingPage({ params }: { params: SeoLandingPageParams }) {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">Local supplier</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{page.heading}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{page.description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={page.ctaLink} className="inline-flex items-center rounded-xl bg-[#003366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#00254f]">
            {page.ctaLabel}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr]">
          <div className="space-y-6">
            {page.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-700">{paragraph}</p>
            ))}
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[#003366]">Key advantages</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {page.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#FF7A00]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-[#003366]">Related pages</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {page.internalLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-[#003366] transition hover:border-[#003366]/50 hover:bg-[#F8F9FB]">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
