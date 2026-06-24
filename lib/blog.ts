import { blogPosts } from "@/lib/data/blog";

export { blogPosts };

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
