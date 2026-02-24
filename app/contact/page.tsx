import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactez Zahir Connect - Call Center Marrakech',
  description: "Contactez Zahir Connect, votre centre d'appel à Marrakech. Devis gratuit, réponse sous 24h. Tél : +212 690 192 593. Centre d'affaires At Taoufiq 5, 4ème étage, Bureau 20. Lun–Ven 08h–20h.",
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
