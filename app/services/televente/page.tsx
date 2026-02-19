import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TrendingUp, Zap, Heart, BarChart2, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Zap,
    title: "Conversion Optimisée",
    description: "Scripts de vente éprouvés et agents formés aux techniques de persuasion pour maximiser votre taux de conversion à chaque appel.",
  },
  {
    icon: Heart,
    title: "Fidélisation Client",
    description: "Programmes de rétention et de cross-selling conçus pour augmenter la valeur vie client et réduire le churn.",
  },
  {
    icon: BarChart2,
    title: "Suivi des Performances",
    description: "Monitoring en temps réel du chiffre d'affaires généré, du panier moyen et des KPIs de vente pour ajuster la stratégie.",
  },
]

const benefits = [
  {
    title: "Revenus Additionnels Directs",
    description: "Nos agents génèrent des ventes directes et des upsells qui impactent immédiatement votre chiffre d'affaires.",
  },
  {
    title: "Expertise Sectorielle",
    description: "Équipes spécialisées par secteur (assurance, télécom, e-commerce) avec une connaissance approfondie de vos produits.",
  },
  {
    title: "Disponibilité Étendue",
    description: "Opérations 6j/7 avec des plages horaires adaptées à votre clientèle pour ne manquer aucune opportunité.",
  },
]

export default function TeleventePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-background to-background" />
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-emerald-100/30 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <TrendingUp className="h-10 w-10" />
            </div>
            <div>
              <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Nos Services
              </span>
              <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
                Télévente
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Boostez vos ventes avec des équipes expertes en conversion. Vente directe, upselling et fidélisation — nos agents deviennent le prolongement de votre force commerciale.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  Booster mes Ventes
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
              Une approche commerciale complète pour maximiser vos revenus.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md hover:border-emerald-200">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
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
                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
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
            Découvrez comment nos équipes de télévente peuvent augmenter votre chiffre d'affaires dès le premier mois.
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
