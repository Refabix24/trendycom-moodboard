import type { ImageLoaderProps } from 'next/image'

/**
 * Mantiene las rutas normales en localhost y Vercel.
 * Durante la compilación de GitHub Pages agrega:
 * /trendycom-moodboard
 */
export default function imageLoader({
  src,
}: ImageLoaderProps): string {
  if (
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('data:') ||
    src.startsWith('blob:')
  ) {
    return src
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

  if (!basePath || src.startsWith(`${basePath}/`)) {
    return src
  }

  const normalizedSrc = src.startsWith('/') ? src : `/${src}`

  return `${basePath}${normalizedSrc}`
}
