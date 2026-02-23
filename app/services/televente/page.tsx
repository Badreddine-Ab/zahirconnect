import type { Metadata } from 'next'
import { Footer } from "@/components/footer"
import { TrendingUp, Zap, Heart, BarChart2, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: 'Télévente - Boostez votre Chiffre d\'Affaires',
  description: "Augmentez vos ventes avec les équipes de télévente de Zahir Connect. Scripts éprouvés, fidélisation client, opérations 6j/7. Centre d'appel expert à Marrakech.",
  alternates: { canonical: '/services/televente' },
  openGraph: {
    title: 'Télévente | Zahir Connect',
    description: "Experts en conversion téléphonique — vente directe, upselling et fidélisation depuis Marrakech.",
    url: '/services/televente',
  },
  twitter: {
    title: 'Télévente — Boostez votre Chiffre d\'Affaires | Zahir Connect',
    description: "Augmentez vos ventes avec nos équipes de télévente expertes. Centre d'appel à Marrakech.",
  },
}
import Link from "next/link"

const faqs = [
  {
    q: "Comment fonctionne la télévente externalisée ?",
    a: "Nos agents de télévente, formés à vos produits et à vos arguments de vente, contactent directement vos prospects ou clients pour conclure des ventes, proposer des upsells ou fidéliser. Vous recevez un reporting quotidien des ventes générées et du chiffre d'affaires produit.",
  },
  {
    q: "Quels secteurs sont compatibles avec la télévente ?",
    a: "La télévente fonctionne particulièrement bien dans les secteurs de l'assurance, la téléphonie, l'énergie, l'e-commerce, l'immobilier et les services B2B. Zahir Connect dispose d'équipes spécialisées par secteur avec une connaissance approfondie des argumentaires métier.",
  },
  {
    q: "Combien de temps pour voir les premiers résultats ?",
    a: "Les premières ventes sont généralement enregistrées dès la première semaine de campagne. Les performances s'améliorent ensuite progressivement à mesure que les agents se perfectionnent sur votre produit et que les scripts sont optimisés.",
  },
  {
    q: "Quelle est la différence entre télévente et prospection commerciale ?",
    a: "La prospection vise à générer des leads et des rendez-vous qualifiés pour votre équipe commerciale. La télévente, elle, va jusqu'à la conclusion de la vente par téléphone. Les deux services sont complémentaires et peuvent être combinés.",
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Télévente',
    description: "Service de télévente avec scripts éprouvés, fidélisation client et monitoring des performances. Opérations 6j/7.",
    provider: {
      '@type': 'LocalBusiness',
      name: 'Zahir Connect',
      url: 'https://zahirconnect.ma',
      telephone: '+212690192593',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bureau 18, Centre d\'affaires Bergis, 3 Avenue Safi',
        addressLocality: 'Marrakech',
        addressCountry: 'MA',
      },
    },
    serviceType: 'Télévente',
    areaServed: { '@type': 'Country', name: 'Maroc' },
    url: 'https://zahirconnect.ma/services/televente',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://zahirconnect.ma' },
      { '@type': 'ListItem', position: 2, name: 'Nos Services', item: 'https://zahirconnect.ma/services' },
      { '@type': 'ListItem', position: 3, name: 'Télévente', item: 'https://zahirconnect.ma/services/televente' },
    ],
  },
]

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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

      {/* FAQ */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
              Questions fréquentes
            </h2>
            <p className="text-muted-foreground">Tout ce que vous devez savoir sur notre service de télévente.</p>
          </div>
          <div className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-6 cursor-pointer">
                <summary className="flex items-center justify-between gap-4 font-display font-semibold text-foreground list-none">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
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
