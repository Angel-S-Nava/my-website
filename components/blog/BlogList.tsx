// components/blog/BlogList.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Modal from "@/components/ui/modal";
import type { Post } from "@/lib/posts";

type Props = { posts: Post[] };

export default function BlogList({ posts }: Props) {
  // categories: "All" + unique categories from posts
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selected, setSelected] = useState<Post | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (post: Post) => {
    setSelected(post);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) setSelected(null);
  }, [isOpen]);

  // Filtrado por categoría
  const visiblePosts = selectedCategory === "All" ? posts : posts.filter((p) => p.category === selectedCategory);
  const featured = visiblePosts.filter((p) => p.featured);
  const regular = visiblePosts.filter((p) => !p.featured);

  return (
    <>
      {/* Filtros */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featured.map((post) => (
                <Card key={post.id} className="flex flex-col border-2 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge>{post.category}</Badge>
                      <div className="text-sm text-muted-foreground flex gap-3 items-center">
                        <div className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(post.date).toLocaleDateString()}</div>
                        <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer" onClick={() => openModal(post)}>
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto flex gap-2">
                    <Button variant="ghost" onClick={() => openModal(post)} className="flex-1">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="w-36">
                      <Button className="w-full">Open in new tab</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular */}
      <section className="py-8 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((post) => (
              <Card key={post.id} className="flex flex-col border-2 hover:shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 hover:text-primary transition-colors cursor-pointer" onClick={() => openModal(post)}>
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => openModal(post)} className="flex-1">Read</Button>
                    <Link href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer" className="w-36">
                      <Button className="w-full">Open</Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal: PREVIEW CORTA (excerpt). No carga contenido paginado */}
      <Modal open={isOpen} onClose={closeModal} title={selected?.title ?? ""}>
        <article className="prose max-w-none">
          <p>{selected?.excerpt ?? "No preview available."}</p>
        </article>

        <div className="mt-4 flex justify-end gap-2">
          {selected && (
            <Link href={`/blog/${selected.slug}`} target="_blank" rel="noopener noreferrer">
              <Button>Open full page</Button>
            </Link>
          )}
          <Button variant="secondary" onClick={closeModal}>Close</Button>
        </div>
      </Modal>
    </>
  );
}
