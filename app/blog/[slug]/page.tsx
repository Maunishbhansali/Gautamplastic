import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

type BlogPostPageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: BlogPostPageParams }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Gautam Plastic`,
    description: post.excerpt,
    alternates: { canonical: `https://www.gautamplastic.com/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: BlogPostPageParams }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">Blog</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">{post.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">{post.excerpt}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-slate-700">{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
}
