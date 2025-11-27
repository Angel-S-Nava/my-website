import type { Metadata } from "next";
import BlogList from "@/components/blog/BlogList";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Digital Marketing Blog - Expert Insights & Strategies | navamkt",
  description: "Discover the latest digital marketing trends, SEO strategies, social media tips, and growth hacking techniques from navamkt's expert team.",
  keywords: [
    'digital marketing blog',
    'SEO tips',
    'social media strategies',
    'content marketing',
    'marketing insights',
    'growth hacking',
    'online marketing trends',
    'marketing agency blog'
  ],
  openGraph: {
    title: "Digital Marketing Blog - Expert Insights & Strategies | navamkt",
    description: "Discover the latest digital marketing trends, SEO strategies, social media tips, and growth hacking techniques.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Blog - Expert Insights & Strategies | navamkt",
    description: "Latest digital marketing trends, SEO strategies, and growth techniques from industry experts.",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="flex flex-col">
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-muted-foreground">
              Expert insights, actionable strategies, and the latest trends in digital marketing
            </p>
          </div>
        </div>
      </section>

      {/* Aquí podrías renderizar filtros / categorías si quieres */}
      <div className="container mx-auto px-4 py-8">
        <BlogList posts={posts} />
      </div>
    </div>
  );
}