export interface SeoLandingPage {
  slug: string;
  title: string;
  description: string;
  heading: string;
  paragraphs: string[];
  highlights: string[];
  ctaLabel: string;
  ctaLink: string;
  keywords: string[];
  internalLinks: { label: string; href: string }[];
}
