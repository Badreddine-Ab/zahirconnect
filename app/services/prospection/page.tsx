import type { Metadata } from 'next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Search, Users, Target, BarChart2, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: 'Prospection Commerciale B2B & B2C - Call Center Marrakech',
  description: "Générez un flux constant de leads qualifiés avec Zahir Connect. Campagnes de prospection téléphonique B2B et B2C, ciblage précis, reporting en temps réel. Marrakech.",
  alternates: { canonical: '/services/prospection' },
  openGraph: {
    title: 'Prospection Commerciale | Zahir Connect',
    description: "Leads qualifiés, pipeline rempli — externalisez votre prospection avec notre centre d'appel à Marrakech.",
    url: '/services/prospection',
  },
}
import Link from "next/link"

const features = [
  {
    icon: Target,
    title: "Ciblage Précis",
    description: "Identification et qualification de vos prospects idéaux grâce à des bases de données enrichies et des critères de segmentation avancés.",
  },
  {
    icon: Users,
    title: "Équipes Spécialisées",
    description: "Agents formés aux techniques de prospection B2B et B2C, avec des scripts personnalisés selon votre secteur d'activité.",
  },
  {
    icon: BarChart2,
    title: "Reporting Détaillé",
    description: "Tableaux de bord en temps réel avec KPIs clés : taux de contact, taux de qualification, coût par lead et ROI.",
  },
]

const benefits = [
  {
    title: "Pipeline Commercial Rempli",
    description: "Nous alimentons continuellement votre équipe commerciale avec des rendez-vous qualifiés, vous permettant de vous concentrer sur la conversion.",
  },
  {
    title: "Flexibilité & Scalabilité",
    description: "Ajustez le volume d'appels selon vos besoins saisonniers. Montée en charge rapide sans contraintes de recrutement.",
  },
  {
    title: "Réduction des Coûts",
    description: "Externalisez votre prospection et réduisez vos coûts de 40 à 60% par rapport à une équipe interne, sans sacrifier la qualité.",
  },
]

export default function ProspectionPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-background to-background" />
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-amber-100/30 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
              <Search className="h-10 w-10" />
            </div>
            <div>
              <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Nos Services
              </span>
              <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
                Prospection Commerciale
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Générez un flux constant de leads qualifiés grâce à nos campagnes d'appels ciblées. Nous remplissons votre pipeline commercial pour que vous puissiez vous concentrer sur la conclusion.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  Démarrer ma Campagne
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
              Une offre complète pour générer et qualifier vos prospects.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md hover:border-amber-200">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
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
                <CheckCircle2 className="h-6 w-6 text-amber-500" />
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
            Notre équipe analyse vos besoins gratuitement et vous propose une stratégie de prospection sur mesure.
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
