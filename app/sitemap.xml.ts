import { MetadataRoute } from "next";
import { business, productCategories } from "@/lib/business";
import { getBlogPosts } from "@/lib/blog";
import { getPolicyPage } from "@/lib/policies";
import { seoLandingPages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
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

  const categoryPages = productCategories.map((category) => ({ url: `${baseUrl}/products/${category.slug}`, lastModified: new Date().toISOString() }));
  const blogPages = getBlogPosts().map((post) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: new Date(post.publishedAt).toISOString() }));
  const seoPages = seoLandingPages.map((page) => ({ url: `${baseUrl}/${page.slug}`, lastModified: new Date().toISOString() }));
  const policyPages = ["privacy-policy", "terms", "shipping-policy", "return-policy"].map((slug) => ({ url: `${baseUrl}/${slug}`, lastModified: new Date().toISOString() }));

  return [
    ...staticPages.map((path) => ({ url: `${baseUrl}/${path}` })),
    ...categoryPages,
    ...blogPages,
    ...seoPages,
    ...policyPages,
  ];
}
