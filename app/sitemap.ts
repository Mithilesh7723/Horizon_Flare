import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://horizonflare.in'

  // Add all your static routes here
  const staticRoutes = [
    '/',
    '/about',
    '/blog',
    '/case-studies',
    '/contact',
    '/innovation-lab',
    '/services',
    '/services/vapt',
    '/services/development',
    '/services/training',
  ]

  const sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }))
 
  return sitemap
}
