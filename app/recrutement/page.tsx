import type { Metadata } from 'next'
import { RecrutementForm } from '@/components/recrutement-form'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Nous Rejoindre — Carrières chez Zahir Connect',
  description:
    "Rejoignez l'équipe Zahir Connect à Marrakech. Postulez dès maintenant pour faire partie d'un centre d'appels en pleine croissance. Formation, évolution et ambiance dynamique.",
  alternates: { canonical: '/recrutement' },
  openGraph: {
    title: 'Recrutement | Zahir Connect',
    description:
      "Rejoignez notre équipe en pleine croissance à Marrakech. Postes ouverts — aucune expérience requise.",
    url: '/recrutement',
  },
}

export default function RecrutementPage() {
  return (
    <main className="min-h-screen">
      <RecrutementForm />
      <Footer />
    </main>
  )
}
