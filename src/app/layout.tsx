import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://srimoyee-portfolio.vercel.app'),
  title: 'Srimoyee Pal - Portfolio',
  description: 'Professional portfolio of Srimoyee Pal - CSE Student, Photographer, Dancer, and Developer',
  keywords: 'Srimoyee Pal, Portfolio, Computer Science, Photography, Dance, Developer, CSE, Techno International Newtown',
  authors: [{ name: 'Srimoyee Pal' }],
  creator: 'Srimoyee Pal',
  publisher: 'Srimoyee Pal',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
        color: '#1e40af',
      },
    ],
  },
  openGraph: {
    title: 'Srimoyee Pal - Portfolio',
    description: 'Professional portfolio of Srimoyee Pal - CSE Student, Photographer, Dancer, and Developer',
    url: 'https://srimoyee-portfolio.vercel.app',
    siteName: 'Srimoyee Pal Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Srimoyee Pal Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srimoyee Pal - Portfolio',
    description: 'Professional portfolio of Srimoyee Pal - CSE Student, Photographer, Dancer, and Developer',
    images: ['/og-image.jpg'],
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#1e40af',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-dark transition-colors duration-300">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
