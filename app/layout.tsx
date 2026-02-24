import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { NavProvider } from "@/lib/navigation-context"
import { PageTransitionWrapper } from "@/components/page-transition"
import { Navbar } from "@/components/navbar"
import { CookieBanner } from "@/components/cookie-banner"

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

const BASE_URL = 'https://zahirconnect.ma'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s | Zahir Connect',
    default: 'Zahir Connect | Call Center Marrakech - Prospection, Télévente & BPO',
  },
  description: "Centre d'appel à Marrakech spécialisé en prospection commerciale, télévente, externalisation BPO et solutions digitales. Boostez votre business avec des experts.",
  keywords: ['call center marrakech', 'centre appel maroc', 'prospection commerciale', 'télévente', 'externalisation bpo', 'solutions digitales', 'telemarketing maroc', 'call center maroc', 'télémarketing offshore marrakech'],
  authors: [{ name: 'Zahir Connect' }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: BASE_URL,
    languages: { 'fr': BASE_URL },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    siteName: 'Zahir Connect',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'Zahir Connect - Call Center Marrakech' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zahirconnect',
  },
}

export const viewport: Viewport = {
  themeColor: '#fafafa',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Organization'],
  name: 'Zahir Connect',
  description: "Centre d'appel à Marrakech spécialisé en prospection commerciale, télévente, externalisation BPO et solutions digitales.",
  url: BASE_URL,
  telephone: '+212690192593',
  email: 'contact@zahirconnect.com',
  logo: `${BASE_URL}/images/zahir-connect-logo.png`,
  image: `${BASE_URL}/images/zahir-connect-logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Centre d\'affaires At Taoufiq 5, 4ème étage, Bureau 20',
    addressLocality: 'Marrakech',

    addressRegion: 'Marrakech-Safi',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.63,
    longitude: -8.05,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services Zahir Connect',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Prospection Commerciale' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Télévente' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Externalisation BPO' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Solutions Digitales' } },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NavProvider>
          <Navbar />
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
          <CookieBanner />
        </NavProvider>
      </body>
    </html>
  )
}
