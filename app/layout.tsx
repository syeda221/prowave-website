import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nexoraq — Smart Software Solutions for Growing Businesses',
  description:
    'Nexoraq is a premium software house helping startups and enterprises build powerful digital products through web, mobile, AI, and cloud technologies.',
  generator: 'v0.app',
  keywords: [
    'software house',
    'web development',
    'mobile app development',
    'AI automation',
    'cloud solutions',
    'UI/UX design',
    'software agency',
  ],
  openGraph: {
    title: 'Nexoraq — Smart Software Solutions for Growing Businesses',
    description:
      'Premium software house building web, mobile, AI and cloud products for startups and enterprises worldwide.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#071426',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
