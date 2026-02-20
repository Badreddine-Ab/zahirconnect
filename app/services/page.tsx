import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos Services - Call Center Marrakech',
  description: "Découvrez les services de Zahir Connect : prospection commerciale, télévente, externalisation BPO et solutions digitales. Expertise marocaine, résultats mesurables.",
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Nos Services | Zahir Connect',
    description: "Prospection, télévente, BPO et solutions digitales — des services sur mesure pour votre croissance.",
    url: '/services',
  },
}
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesSection />
      <ProcessSection />
      <CtaBanner />
      <Footer />
    </main>
  )
}
