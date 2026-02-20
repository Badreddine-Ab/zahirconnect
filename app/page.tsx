import type { Metadata } from 'next'
import { HeroSlider } from "@/components/hero-slider"
import { ScrollLock } from "@/components/scroll-lock"

export const metadata: Metadata = {
  title: 'Zahir Connect | Call Center Marrakech - Prospection, Télévente & BPO',
  description: "Zahir Connect, votre centre d'appel à Marrakech. Prospection commerciale, télévente, externalisation BPO et solutions digitales pour booster votre croissance. Devis gratuit.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Zahir Connect | Call Center Marrakech',
    description: "Centre d'appel à Marrakech — prospection, télévente, BPO et solutions digitales.",
    url: '/',
  },
}

export default function Page() {
  return (
    <>
      <ScrollLock />
      <main className="overflow-hidden">
        <HeroSlider />
      </main>
    </>
  )
}
