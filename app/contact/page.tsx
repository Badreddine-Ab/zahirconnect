import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactez Zahir Connect - Call Center Marrakech',
  description: "Contactez Zahir Connect, votre centre d'appel à Marrakech. Devis gratuit, réponse sous 24h. Tél : +212 690 192 593. Bureau 18, Centre d'affaires Bergis, 3 Avenue Safi. Lun–Ven 08h–20h.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Zahir Connect',
    description: "Parlons de votre projet. Devis gratuit, réponse sous 24h. Marrakech, Maroc.",
    url: '/contact',
  },
}
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactSection />
      <Footer />
    </main>
  )
}
