// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { getPostBySlug, getPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Calendar, Clock, Tag } from 'lucide-react';

type Props = { params: { slug: string } };

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
const SITE_NAME = 'navamkt';
const DEFAULT_OG = `${SITE_URL}/logo-512.png`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - Digital Marketing Blog | navamkt',
      description: 'The requested blog post was not found. Explore our other digital marketing insights and strategies.',
    };
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date().toISOString(); // O puedes usar post.updatedDate si lo tienes

  return {
    title: `${post.title} | Digital Marketing Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime,
      modifiedTime,
      url: postUrl,
      images: [{ 
        url: post.image || DEFAULT_OG, // Si tus posts tienen imágenes propias
        alt: post.title,
        width: 1200,
        height: 630 
      }],
      authors: [SITE_NAME],
      section: post.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || DEFAULT_OG],
      creator: '@navamkt', // Si tienes Twitter
    },
    alternates: {
      canonical: postUrl,
    },
    keywords: [post.category, 'digital marketing', 'SEO', 'social media', 'content marketing'],
    authors: [{ name: SITE_NAME }],
    category: post.category,
  };
}

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const isoDate = new Date(post.date).toISOString();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    headline: post.title,
    image: [post.image || DEFAULT_OG],
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 180,
        height: 60,
      },
    },
    description: post.excerpt,
    articleSection: post.category,
    keywords: post.category,
    inLanguage: 'en-US',
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { 
        '@type': 'ListItem', 
        position: 1, 
        name: 'Home', 
        item: SITE_URL 
      },
      { 
        '@type': 'ListItem', 
        position: 2, 
        name: 'Blog', 
        item: `${SITE_URL}/blog` 
      },
      { 
        '@type': 'ListItem', 
        position: 3, 
        name: post.title, 
        item: postUrl 
      },
    ],
  };

  return (
    <main className="container mx-auto px-4 py-16 max-w-5xl">
      <article itemScope itemType="https://schema.org/Article">
        <header className="mb-8">
          <h1 itemProp="headline" className="text-4xl md:text-5xl font-extrabold leading-tight mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {post.title}
          </h1>

          <p itemProp="description" className="text-lg text-muted-foreground max-w-3xl">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 opacity-80" />
              <time itemProp="datePublished" dateTime={isoDate}>
                {new Date(post.date).toLocaleDateString()}
              </time>
            </span>

            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 opacity-80" />
              <span itemProp="timeRequired">{post.readTime}</span>
            </span>

            <span className="ml-auto inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs">
              <Tag className="h-4 w-4 opacity-80" />
              <span itemProp="articleSection">{post.category}</span>
            </span>
          </div>
        </header>

        <Card className="border-2">
          <CardContent className="p-8">
            <div
              itemProp="articleBody"
              className="prose prose-lg max-w-none leading-relaxed space-y-6 dark:prose-invert"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>

        <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="text-lg px-6">
              Get a free audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <div className="ml-auto text-sm text-muted-foreground">
            Want this adapted into a downloadable checklist?
          </div>
        </div>
      </article>

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </main>
  );
}