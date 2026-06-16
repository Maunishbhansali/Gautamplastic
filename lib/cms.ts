import {
  business,
  getCategoryHeroBySlug,
  industriesServed,
  productCategories,
  seoKeywords,
  siteContent,
} from "@/lib/business";
import { productCatalog } from "@/lib/products";
import { normalizeSanityContent } from "@/lib/sanity";
import { sanityClient } from "@/lib/sanity-client";

export type ContentSource = "local" | "sanity";

export interface SiteContentSnapshot {
  business: typeof business;
  siteContent: typeof siteContent;
  productCategories: typeof productCategories;
  categoryHeroes: Record<string, ReturnType<typeof getCategoryHeroBySlug>>;
  industriesServed: typeof industriesServed;
  seoKeywords: typeof seoKeywords;
  productCatalog: typeof productCatalog;
}

const localContentSnapshot: SiteContentSnapshot = {
  business,
  siteContent,
  productCategories,
  categoryHeroes: Object.fromEntries(productCategories.map((category) => [category.slug, getCategoryHeroBySlug(category.slug)])),
  industriesServed,
  seoKeywords,
  productCatalog,
};

export function getContentSource(): ContentSource {
  return (process.env.NEXT_PUBLIC_CONTENT_SOURCE as ContentSource | undefined) ?? "local";
}

export async function getContentSnapshot(): Promise<SiteContentSnapshot> {
  const source = getContentSource();

  if (source === "sanity") {
    if (!sanityClient) {
      return localContentSnapshot;
    }

    try {
      const data = await sanityClient.fetch(`{
        "settings": *[_type == "siteSettings"][0]{
          siteContent,
          industriesServed,
          seoKeywords
        },
        "business": *[_type == "businessProfile"][0],
        "productCategories": *[_type == "productCategory"] | order(name asc) {
          name,
          slug,
          summary,
          keywords,
          hero {
            eyebrow,
            headline,
            description,
            ctaLabel,
            "image": image.asset->url,
            imageAlt
          }
        },
        "productCatalog": *[_type == "productItem"] | order(name asc) {
          name,
          slug,
          "category": category->{slug},
          shortDescription,
          applications,
          material,
          seoTitle,
          metaDescription,
          variants,
          capacities,
          "image": image.asset->url,
          imageAlt
        }
      }`);

      const normalized = normalizeSanityContent({
        ...(data?.settings ?? {}),
        business: data?.business,
        productCategories: data?.productCategories,
        productCatalog: data?.productCatalog,
      });
      const normalizedSiteContent = normalized.siteContent as Partial<typeof siteContent>;

      return {
        business: normalized.business,
        siteContent: normalizedSiteContent.home ? normalizedSiteContent as typeof siteContent : localContentSnapshot.siteContent,
        productCategories: normalized.productCategories.length ? normalized.productCategories : localContentSnapshot.productCategories,
        categoryHeroes: Object.keys(normalized.categoryHeroes).length ? normalized.categoryHeroes : localContentSnapshot.categoryHeroes,
        industriesServed: normalized.industriesServed.length ? normalized.industriesServed : localContentSnapshot.industriesServed,
        seoKeywords: normalized.seoKeywords.length ? normalized.seoKeywords : localContentSnapshot.seoKeywords,
        productCatalog: normalized.productCatalog.length ? normalized.productCatalog : localContentSnapshot.productCatalog,
      };
    } catch {
      return localContentSnapshot;
    }
  }

  return localContentSnapshot;
}

export const contentSnapshot = localContentSnapshot;
