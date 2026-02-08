"use client"

import { MapPin, FileText, Zap, Award, Wrench, LifeBuoy } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

const reasons = [
  {
    icon: MapPin,
    title: "Proximite",
    description:
      "Zahir Connect est une entreprise a taille humaine basee a Marrakech, garantissant un accompagnement personnalise et reactif.",
  },
  {
    icon: FileText,
    title: "Reporting",
    description:
      "Un reporting detaille et a la carte, en fonction de vos besoins specifiques pour un suivi transparent de vos campagnes.",
  },
  {
    icon: Zap,
    title: "Efficacite",
    description:
      "Nos equipes sont efficaces, reactives et disponibles pour assurer la performance optimale de vos operations.",
  },
  {
    icon: Award,
    title: "Expertise",
    description:
      "Une parfaite maitrise et une connaissance approfondie du marche du telemarketing et de la relation client.",
  },
  {
    icon: Wrench,
    title: "Outils Innovants",
    description:
      "Nos outils innovants et collaboratifs nous permettent de repondre a l'ensemble de vos projets avec precision.",
  },
  {
    icon: LifeBuoy,
    title: "Support Continu",
    description:
      "Une assistance et un support complet avant, pendant et apres vos campagnes pour garantir votre satisfaction.",
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
            Pourquoi Nous Choisir
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            L'Excellence au Service de Votre Business
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Notre centre d'appels a Marrakech vous offre un service de telemarketing offshore de qualite, grace a notre expertise dans le domaine du call center.
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
