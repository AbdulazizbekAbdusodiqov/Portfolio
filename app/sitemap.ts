import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://abdulaziz-dev.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://abdulaziz-dev.vercel.app/#about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://abdulaziz-dev.vercel.app/#skills",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://abdulaziz-dev.vercel.app/#projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://abdulaziz-dev.vercel.app/#contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
