import type { Metadata, Viewport } from 'next'
import { Bangers, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-comic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TrendyCom — Moodboard e Identidad Visual',
  description:
    'Presentación digital e interactiva del moodboard y la identidad visual del proyecto académico TrendyCom.',
  applicationName: 'TrendyCom Moodboard',
  authors: [
    {
      name: 'Fabián Enrique Ferro Valbuena',
    },
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#011121',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`light ${inter.variable} ${bangers.variable} bg-background`}
    >
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
