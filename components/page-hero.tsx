import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/product-image";

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
    <section className="bg-[#efe7d8] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-600">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">{description}</p>
          <div className="mt-8">
            <Button asChild className="h-10 bg-zinc-950 px-5 text-white hover:bg-zinc-800">
              <Link href={ctaLink}>
                {ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {image ? (
          <div className="overflow-hidden rounded-lg bg-zinc-200 shadow-[0_24px_70px_-42px_rgba(24,24,27,0.75)]">
            <ProductImage src={image} alt={imageAlt ?? title} className="h-[360px] w-full object-cover md:h-[440px]" />
          </div>
        ) : null}
      </div>
    </section>
  );
}
