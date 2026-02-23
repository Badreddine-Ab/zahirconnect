import type { Metadata } from 'next'
import { HeroSlider } from "@/components/hero-slider"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProcessSection } from "@/components/process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Zahir Connect | Call Center Marrakech - Prospection, Télévente & BPO',
  description: "Zahir Connect, votre centre d'appel à Marrakech. Prospection commerciale, télévente, externalisation BPO et solutions digitales pour booster votre croissance. Devis gratuit.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Zahir Connect | Call Center Marrakech',
    description: "Centre d'appel à Marrakech — prospection, télévente, BPO et solutions digitales.",
    url: '/',
  },
  twitter: {
    title: 'Zahir Connect | Call Center Marrakech',
    description: "Centre d'appel expert à Marrakech : prospection commerciale, télévente, BPO et solutions digitales.",
  },
}

export default function Page() {
  return (
    <main className="overflow-hidden">
      <HeroSlider />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <ProcessSection />
        <ContactSection />
      <Footer />
    </main>
  )
}
