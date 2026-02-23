"use client"

import { MapPin, FileText, Zap, Award, Wrench, LifeBuoy } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

const reasons = [
  {
    icon: MapPin,
    title: "Proximité",
    description:
      "Zahir Connect est une entreprise à taille humaine basée à Marrakech, garantissant un accompagnement personnalisé et réactif.",
  },
  {
    icon: FileText,
    title: "Reporting",
    description:
      "Un reporting détaillé et à la carte, en fonction de vos besoins spécifiques pour un suivi transparent de vos campagnes.",
  },
  {
    icon: Zap,
    title: "Efficacité",
    description:
      "Nos équipes sont efficaces, réactives et disponibles pour assurer la performance optimale de vos opérations.",
  },
  {
    icon: Award,
    title: "Expertise",
    description:
      "Une parfaite maîtrise et une connaissance approfondie du marché du télémarketing et de la relation client.",
  },
  {
    icon: Wrench,
    title: "Outils innovants",
    description:
      "Nos outils innovants et collaboratifs nous permettent de répondre à l'ensemble de vos projets avec précision.",
  },
  {
    icon: LifeBuoy,
    title: "Support continu",
    description:
      "Une assistance et un support complet avant, pendant et après vos campagnes pour garantir votre satisfaction.",
  },
]

export function WhyChooseUs() {
  const { ref, isInView } = useInView({ threshold: 0.15 })

  return (
    <section id="pourquoi" ref={ref} className="relative py-24">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute left-1/2 top-0 h-px w-1/2 bg-gradient-to-r from-primary/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Pourquoi nous choisir
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            L'excellence au service de votre business
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Notre centre d'appels à Marrakech vous offre un service de télémarketing offshore de qualité, grâce à notre expertise dans le domaine du call center.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={cn(
                "group relative flex gap-4 rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-700 hover:border-primary/40 hover:bg-card",
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20">
                <reason.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
