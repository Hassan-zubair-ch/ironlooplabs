import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ironlooplabs.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://ironlooplabs.com/products',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
       url: 'https://ironlooplabs.com/industries',
       lastModified: new Date(),
       changeFrequency: 'monthly',
       priority: 0.8,
    },
    {
       url: 'https://ironlooplabs.com/success-stories',
       lastModified: new Date(),
       changeFrequency: 'monthly',
       priority: 0.8,
    },
    {
       url: 'https://ironlooplabs.com/contact',
       lastModified: new Date(),
       changeFrequency: 'yearly',
       priority: 0.5,
    },
    {
       url: 'https://ironlooplabs.com/privacy-policy',
       lastModified: new Date(),
       changeFrequency: 'yearly',
       priority: 0.3,
    },
    {
       url: 'https://ironlooplabs.com/terms-of-service',
       lastModified: new Date(),
       changeFrequency: 'yearly',
       priority: 0.3,
    }
  ]
}
