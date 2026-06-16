import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Gautam Plastic",
  description: "Industry insights and packaging guidance from Gautam Plastic for PET, HDPE and industrial packaging buyers.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF7A00]">Blog</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#003366] md:text-5xl">Packaging insights for procurement teams</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">Read practical articles on PET, HDPE, jars, drums, closures and supply strategies for Ahmedabad buyers.</p>
      </section>

      <section className="mx-auto max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.slug} className="border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#003366]/30 hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl text-[#003366]">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between gap-4">
                <span className="text-sm text-slate-500">{post.publishedAt}</span>
                <Button asChild variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                  <Link href={`/blog/${post.slug}`}>Read article</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
