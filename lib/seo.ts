import { seoLandingPages } from "@/lib/data/seo-pages";

export { seoLandingPages };

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((item) => item.slug === slug);
}
