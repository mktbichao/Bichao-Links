import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const { VITE_PUBLIC_SITE_URL } = loadEnv(mode, process.cwd(), 'VITE_')
  const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
  const siteUrl = VITE_PUBLIC_SITE_URL || (vercelDomain && `https://${vercelDomain}`)

  return {
    plugins: [{
      name: 'social-preview-url',
      transformIndexHtml(html) {
        if (!siteUrl) return html

        const imageUrl = new URL('/images/compartilhar.jpg', siteUrl).href
        return html.replace('property="og:image" content="/images/compartilhar.jpg"', `property="og:image" content="${imageUrl}"`)
      },
    }],
  }
})
