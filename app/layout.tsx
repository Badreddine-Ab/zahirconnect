import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { NavProvider } from "@/lib/navigation-context"
import { PageTransitionWrapper } from "@/components/page-transition"

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
  keywords: ['call center marrakech', 'centre appel maroc', 'prospection commerciale', 'télévente', 'externalisation bpo', 'solutions digitales', 'telemarketing maroc'],
  authors: [{ name: 'Zahir Connect' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    siteName: 'Zahir Connect',
    images: [{ url: '/images/logo.jpeg', width: 400, height: 400, alt: 'Zahir Connect - Call Center Marrakech' }],
  },
  twitter: {
    card: 'summary',
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
  telephone: '+212524000000',
  email: 'contact@zahirconnect.ma',
  logo: `${BASE_URL}/images/logo.jpeg`,
  image: `${BASE_URL}/images/logo.jpeg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Boulevard Mohammed V, Gueliz',
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
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
        </NavProvider>
      </body>
    </html>
  )
}
