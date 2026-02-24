import type { Metadata } from 'next'
import { Footer } from "@/components/footer"
import { Layers, Headphones, FileSpreadsheet, Calculator, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: 'Externalisation BPO - Service Clients & Administratif',
  description: "Externalisez vos processus support avec Zahir Connect : service clients multicanal, gestion administrative et pré-comptabilité. Réduisez vos coûts jusqu'à 60%. Marrakech.",
  alternates: { canonical: '/services/bpo' },
  openGraph: {
    title: 'Externalisation BPO | Zahir Connect',
    description: "Concentrez-vous sur votre coeur de métier — confiez-nous votre service clients, administration et pré-comptabilité.",
    url: '/services/bpo',
  },
  twitter: {
    title: 'Externalisation BPO - Service Clients & Admin | Zahir Connect',
    description: "Réduisez vos coûts jusqu'à 60% en externalisant vos processus support. Expert BPO à Marrakech.",
  },
}
import Link from "next/link"

const faqs = [
  {
    q: "Qu'est-ce que l'externalisation BPO ?",
    a: "Le BPO (Business Process Outsourcing) consiste à confier certains processus non-stratégiques de votre entreprise à un prestataire externe spécialisé. Chez Zahir Connect, nous prenons en charge votre service clients, votre gestion administrative et votre pré-comptabilité pour que vous puissiez vous concentrer sur votre cœur de métier.",
  },
  {
    q: "Quels processus peut-on externaliser avec Zahir Connect ?",
    a: "Nous prenons en charge : la gestion multicanale du service clients (appels, emails, chat), le traitement des documents et la saisie de données, la gestion des dossiers administratifs, la saisie des factures, les rapprochements bancaires et les relances clients. Chaque périmètre est défini sur mesure selon vos besoins.",
  },
  {
    q: "Comment sont sécurisées mes données lors d'une externalisation ?",
    a: "La sécurité des données est notre priorité. Nous appliquons des accords de confidentialité (NDA) stricts, utilisons des connexions sécurisées (VPN), et formons nos agents aux bonnes pratiques de gestion des données sensibles. Nous sommes conformes aux exigences de nos clients européens.",
  },
  {
    q: "Quel est le délai de mise en place d'une prestation BPO ?",
    a: "En fonction de la complexité du périmètre, le démarrage d'une prestation BPO prend entre 2 et 4 semaines. Cette période inclut l'audit des processus, la formation des équipes, la mise en place des outils et les tests avant le démarrage en production.",
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
    name: 'Externalisation BPO',
    description: "Externalisation des processus métier : service clients multicanal, gestion administrative et pré-comptabilité. Réduction de coûts jusqu'à 60%.",
    provider: {
      '@type': 'LocalBusiness',
      name: 'Zahir Connect',
      url: 'https://zahirconnect.ma',
      telephone: '+212690192593',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Centre d\'affaires At Taoufiq 5, 4ème étage, Bureau 20',
        addressLocality: 'Marrakech',
        addressCountry: 'MA',
      },
    },
    serviceType: 'Business Process Outsourcing',
    areaServed: { '@type': 'Country', name: 'Maroc' },
    url: 'https://zahirconnect.ma/services/bpo',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://zahirconnect.ma' },
      { '@type': 'ListItem', position: 2, name: 'Nos Services', item: 'https://zahirconnect.ma/services' },
      { '@type': 'ListItem', position: 3, name: 'Externalisation BPO', item: 'https://zahirconnect.ma/services/bpo' },
    ],
  },
]

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
    title: "Concentrez-vous sur l'essentiel",
    description: "En externalisant vos processus support, vos équipes internes peuvent se consacrer à votre cœur de métier et à la stratégie.",
  },
  {
    title: "Réduction des coûts",
    description: "Optimisez vos coûts et payez à la carte. Choisissez le volume qui vous correspond et payez uniquement les heures travaillées sans charges sociales ni infrastructures.",
  },
  {
    title: "Continuité de service",
    description: "Nos équipes assurent la continuité de vos opérations même pendant les congés ou les pics d'activité, sans rupture de service.",
  },
]

export default function BpoPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
                  Externaliser mes processus
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

      {/* FAQ */}
      <section className="py-20 bg-secondary/20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
              Questions fréquentes
            </h2>
            <p className="text-muted-foreground">Tout ce que vous devez savoir sur notre service BPO.</p>
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
            Analysons ensemble vos processus et définissons le périmètre d'externalisation optimal pour votre activité.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Commencer la conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
