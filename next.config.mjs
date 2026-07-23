/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const repositoryName = 'trendycom-moodboard'
const basePath = isGitHubPages ? `/${repositoryName}` : ''

const nextConfig = {
  // GitHub Pages necesita archivos completamente estáticos.
  // Vercel y localhost conservan el funcionamiento normal de Next.js.
  output: isGitHubPages ? 'export' : undefined,
  trailingSlash: isGitHubPages,
  basePath,

  typescript: {
    ignoreBuildErrors: true,
  },

  // El cargador personalizado añade /trendycom-moodboard
  // únicamente durante la compilación para GitHub Pages.
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
  },
}

export default nextConfig
