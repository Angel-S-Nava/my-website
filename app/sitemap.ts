import { MetadataRoute } from 'next'
import { getPosts } from "@/lib/posts"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://navamkt.com"
  
  let postUrls: MetadataRoute.Sitemap = []
  try {
    const posts = await getPosts()
    postUrls = posts.map((post: any) => ({
      url: `${siteUrl}/posts/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.createdAt),
    }))
  } catch (e) {
    postUrls = []
  }

  const staticUrls = [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
    },
  ]

  return [...staticUrls, ...postUrls]
}