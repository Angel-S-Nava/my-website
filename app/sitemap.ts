import { MetadataRoute } from 'next'
import { getPosts } from "@/lib/posts"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://navamkt.com"
  
  let postUrls: MetadataRoute.Sitemap = []
  try {
    const posts = await getPosts()
    postUrls = posts.map((post: any) => {
      // Manejo seguro de fechas
      const updatedAt = post.updatedAt ? new Date(post.updatedAt) : null
      const createdAt = post.createdAt ? new Date(post.createdAt) : null
      
      // Usa updatedAt si es válido, sino createdAt si es válido, sino fecha actual
      let lastModified: Date
      if (updatedAt && !isNaN(updatedAt.getTime())) {
        lastModified = updatedAt
      } else if (createdAt && !isNaN(createdAt.getTime())) {
        lastModified = createdAt
      } else {
        lastModified = new Date()
      }

      return {
        url: `${siteUrl}/posts/${post.slug}`,
        lastModified: lastModified,
      }
    })
  } catch (e) {
    console.error("Error generating post sitemap:", e)
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
