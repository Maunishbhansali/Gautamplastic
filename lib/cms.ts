import {
  business,
  industriesServed,
  productCategories,
  seoKeywords,
  siteContent,
} from "@/lib/business";
import { productCatalog } from "@/lib/products";

export type ContentSource = "local" | "sanity";

export interface SiteContentSnapshot {
  business: typeof business;
  siteContent: typeof siteContent;
  productCategories: typeof productCategories;
  industriesServed: typeof industriesServed;
  seoKeywords: typeof seoKeywords;
  productCatalog: typeof productCatalog;
}

const localContentSnapshot: SiteContentSnapshot = {
  business,
  siteContent,
  productCategories,
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
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

    if (!projectId || !dataset) {
      return localContentSnapshot;
    }

    // Future Sanity implementation hook:
    // const client = createClient({ projectId, dataset, useCdn: true, apiVersion: "2024-01-01" });
    // const data = await client.fetch(`*[_type == "siteSettings"][0] {...}`);
    // return normalizeSanityContent(data);

    return localContentSnapshot;
  }

  return localContentSnapshot;
}

export const contentSnapshot = localContentSnapshot;
