import type { Metadata } from 'next'
import { Footer } from "@/components/footer"
import { Layers, Headphones, FileSpreadsheet, Calculator, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: 'Externalisation BPO - Service Clients & Administration',
  description: "Externalisez vos processus support avec Zahir Connect : service clients multicanal, gestion administrative et pré-comptabilité. Réduisez vos coûts de 40 à 60%. Maroc.",
  alternates: { canonical: '/services/bpo' },
  openGraph: {
    title: 'Externalisation BPO | Zahir Connect',
    description: "Concentrez-vous sur votre coeur de métier — confiez-nous votre service clients, administration et pré-comptabilité.",
    url: '/services/bpo',
  },
}
import Link from "next/link"

const features = [
  {
    icon: Headphones,
    title: "Service Clients",
    description: "Gestion multicanale de la relation client (appels, emails, chat) avec des agents formés à votre image de marque et à vos processus.",
  },
  {
    icon: FileSpreadsheet,
    title: "Gestion Administrative",
    description: "Traitement des documents, saisie de données, gestion des dossiers et coordination administrative pour décharger vos équipes.",
  },
  {
    icon: Calculator,
    title: "Gestion Pré-Comptable",
    description: "Saisie des factures, rapprochements bancaires, relances clients et préparation des éléments comptables pour votre expert-comptable.",
  },
]

const benefits = [
  {
    title: "Concentrez-vous sur l'Essentiel",
    description: "En externalisant vos processus support, vos équipes internes peuvent se consacrer à votre cœur de métier et à la stratégie.",
  },
  {
    title: "Réduction des Coûts Fixes",
    description: "Transformez vos coûts fixes en coûts variables. Payez uniquement pour les heures travaillées, sans charges sociales ni infrastructure.",
  },
  {
    title: "Continuité de Service",
    description: "Nos équipes assurent la continuité de vos opérations même pendant les congés ou les pics d'activité, sans rupture de service.",
  },
]

export default function BpoPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-background to-background" />
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-sky-100/30 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
              <Layers className="h-10 w-10" />
            </div>
            <div>
              <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Nos Services
              </span>
              <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
                Externalisation BPO
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Confiez-nous vos processus support et concentrez-vous sur votre croissance. Gestion de la relation client, administration et pré-comptabilité pris en charge par nos experts.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  Externaliser mes Processus
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que nous proposons */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
              Ce que nous proposons
            </h2>
            <p className="text-muted-foreground">
              Une prise en charge complète de vos processus métier support.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md hover:border-sky-200">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
              Pourquoi choisir cette solution ?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6">
                <CheckCircle2 className="h-6 w-6 text-sky-500" />
                <h3 className="font-display text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-3 font-display text-2xl font-bold text-foreground">
            Intéressé ? Parlons de votre projet
          </h2>
          <p className="mb-8 text-muted-foreground">
            Analysons ensemble vos processus et définissons le périmètre d'externalisation optimal pour votre activité.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Commencer la Conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
