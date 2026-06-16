import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { getContentSnapshot } from "@/lib/cms";
import { getIndustryByName } from "@/lib/industries";
import { seoLandingPages } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const snapshot = await getContentSnapshot();
  const baseUrl = "https://www.gautamplastic.com";

  const staticPages = [
    "",
    "about",
    "products",
    "contact",
    "industries",
    "request-quote",
    "blog",
    "faq",
    "privacy-policy",
    "terms",
    "shipping-policy",
    "return-policy",
  ];

  const categoryPages = snapshot.productCategories.map((category) => ({ url: `${baseUrl}/products/${category.slug}`, lastModified: new Date().toISOString() }));
  const industryPages = snapshot.industriesServed.map((industry) => ({ url: `${baseUrl}/industries/${getIndustryByName(industry).slug}`, lastModified: new Date().toISOString() }));
  const blogPages = getBlogPosts().map((post) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: new Date(post.publishedAt).toISOString() }));
  const seoPages = seoLandingPages.map((page) => ({ url: `${baseUrl}/${page.slug}`, lastModified: new Date().toISOString() }));
  const policyPages = ["privacy-policy", "terms", "shipping-policy", "return-policy"].map((slug) => ({ url: `${baseUrl}/${slug}`, lastModified: new Date().toISOString() }));

  return [
    ...staticPages.map((path) => ({ url: `${baseUrl}/${path}` })),
    ...categoryPages,
    ...industryPages,
    ...blogPages,
    ...seoPages,
    ...policyPages,
  ];
}
