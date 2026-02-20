import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactez-nous - Devis Gratuit',
  description: "Contactez Zahir Connect pour un devis gratuit. Bd Mohammed V, Gueliz, Marrakech. Tél: +212 524 00 00 00. Lun–Ven 08h–20h, Sam 09h–14h.",
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
