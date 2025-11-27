// app/layout.tsx
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

const SITE_NAME = 'navamkt';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
const DEFAULT_DESCRIPTION =
  'Transforming businesses through innovative digital marketing strategies. We specialize in SEO, social media marketing, and content creation.';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export const viewport: Viewport = {
  themeColor: '#6D28D9',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Digital Marketing Agency`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Transforming businesses through innovative digital marketing strategies. We specialize in SEO, social media marketing, and content creation.',
  keywords: [
    'digital marketing',
    'SEO',
    'social media marketing',
    'content marketing',
    'marketing agency',
    'growth marketing',
  ],
  authors: [{ name: 'navamkt', url: SITE_URL }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: `${SITE_NAME} - Digital Marketing Agency`,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} social preview`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Digital Marketing Agency`,
    description: DEFAULT_DESCRIPTION,
    creator: '@navamkt', // si tienes handle de Twitter cámbialo
    images: [DEFAULT_IMAGE],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLdSite = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      // agrega tus perfiles sociales reales
      'https://www.linkedin.com/company/your-company',
      'https://twitter.com/navamkt',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Perf: preconnect / dns-prefetch para recursos que uses (fonts, CDN, analytics) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Si usas un CDN para imágenes o assets añade aquí su preconnect */}
        {/* Mobile theme color */}
        <meta name="theme-color" content="#6D28D9" />
        <meta name="description" content="Transforming businesses through innovative digital marketing strategies. We specialize in SEO, social media marketing, and content creation." />
        {/* Site JSON-LD global */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSite) }}
        />
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
