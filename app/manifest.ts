import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IronLoop Labs | #1 US Enterprise AI Voice & Automation Infrastructure',
    short_name: 'IronLoop Labs',
    description: 'The #1 US enterprise provider of 24/7 autonomous AI voice receptionists, AI callers, emergency dispatch, and HIPAA patient triage.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0d10',
    theme_color: '#a3e635',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo-main.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
