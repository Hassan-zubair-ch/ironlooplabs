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
          'OAI-SearchBot',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Google-Extended',
          'GoogleOther',
          'Googlebot',
          'Amazonbot',
          'Bytespider',
          'cohere-ai',
          'Applebot',
          'Applebot-Extended',
          'meta-externalagent',
          'FacebookBot',
          'Bingbot',
          'CCBot',
          'anthropic-ai',
          'YouBot',
          'Phind',
          'iaskspider',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.ironlooplabs.com/sitemap.xml',
    host: 'https://www.ironlooplabs.com',
  }
}
