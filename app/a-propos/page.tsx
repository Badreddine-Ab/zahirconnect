import type { Metadata } from 'next'
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: 'À Propos de Zahir Connect - Notre Histoire & Valeurs',
  description: "Zahir Connect, centre d'appel fondé à Marrakech alliant expertise locale et standards internationaux. Notre mission : être le moteur de votre croissance commerciale.",
  alternates: { canonical: '/a-propos' },
  openGraph: {
    title: 'À Propos | Zahir Connect',
    description: "Notre histoire, nos valeurs et notre engagement envers votre succès. Centre d'appel expert à Marrakech, Maroc.",
    url: '/a-propos',
  },
}
import { AboutSection } from "@/components/about-section"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function AProposPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutSection />
      <CtaBanner />
      <Footer />
    </main>
  )
}
