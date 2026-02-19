import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Code2, Globe, Smartphone, Shield, Cloud, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Globe,
    title: "Sites & Applications Web",
    description: "Conception et développement de sites vitrines, plateformes e-commerce et applications web sur mesure avec les technologies les plus performantes.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobiles",
    description: "Applications iOS et Android natives ou cross-platform (React Native, Flutter) avec une expérience utilisateur soignée et intuitive.",
  },
  {
    icon: Shield,
    title: "Sécurité Informatique",
    description: "Audit de sécurité, mise en conformité RGPD, protection contre les cyberattaques et formation de vos équipes aux bonnes pratiques.",
  },
  {
    icon: Cloud,
    title: "Hébergement Cloud",
    description: "Infrastructure cloud scalable sur AWS, Azure ou OVH. Migration, optimisation des coûts et gestion continue de votre infrastructure.",
  },
]

const benefits = [
  {
    title: "Expertise Full-Stack",
    description: "Une équipe complète couvrant le front-end, back-end, mobile et infrastructure — un seul interlocuteur pour tous vos besoins digitaux.",
  },
  {
    title: "Délais Maîtrisés",
    description: "Méthodologie agile avec sprints hebdomadaires, démonstrations régulières et livraisons ponctuelles selon le planning défini.",
  },
  {
    title: "Support Long Terme",
    description: "Accompagnement post-livraison avec maintenance évolutive, mises à jour de sécurité et support technique réactif.",
  },
]

export default function SolutionsDigitalesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-background to-background" />
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-violet-100/30 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
              <Code2 className="h-10 w-10" />
            </div>
            <div>
              <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Nos Services
              </span>
              <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
                Solutions Digitales
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                De l'idée à la mise en production : nous concevons et développons des solutions digitales sur mesure — sites web, applications mobiles, sécurité et infrastructure cloud.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  Lancer mon Projet Digital
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
              Un écosystème digital complet pour accompagner votre transformation numérique.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md hover:border-violet-200">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
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
                <CheckCircle2 className="h-6 w-6 text-violet-500" />
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
            Partagez votre vision avec notre équipe technique et obtenez une estimation gratuite sous 48h.
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
