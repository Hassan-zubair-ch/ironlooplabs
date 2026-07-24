import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'Amazonbot',
          'Bytespider',
          'cohere-ai'
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.ironlooplabs.com/sitemap.xml',
    host: 'https://www.ironlooplabs.com',
  }
}
