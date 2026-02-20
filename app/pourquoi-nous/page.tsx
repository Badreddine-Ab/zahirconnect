import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pourquoi Choisir Zahir Connect - Notre Différence',
  description: "Expertise éprouvée, engagement résultats, équipes formées et réactivité sans faille. Découvrez pourquoi des entreprises font confiance à Zahir Connect pour leur croissance.",
  alternates: { canonical: '/pourquoi-nous' },
  openGraph: {
    title: 'Pourquoi Choisir Zahir Connect',
    description: "Ce qui nous différencie : expertise, réactivité et engagement résultats. Votre partenaire de croissance au Maroc.",
    url: '/pourquoi-nous',
  },
}
import { WhyChooseUs } from "@/components/why-choose-us"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function PourquoiNousPage() {
  return (
    <main className="min-h-screen">
      <WhyChooseUs />
      <CtaBanner />
      <Footer />
    </main>
  )
}
