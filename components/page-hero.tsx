import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({ eyebrow, title, description, ctaLabel, ctaLink, image, imageAlt }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="bg-[#003366] text-white hover:bg-[#00254f]">
              <Link href={ctaLink}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>

        {image ? (
          <div className="overflow-hidden rounded-[2rem] bg-slate-50 shadow-sm">
            <img src={image} alt={imageAlt ?? title} className="h-[420px] w-full object-cover" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
