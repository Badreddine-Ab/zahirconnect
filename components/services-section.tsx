"use client"

import { Search, TrendingUp, Layers, Code2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "Prospection Commerciale",
    description:
      "Campagnes d'appels ciblées pour générer des leads qualifiés et remplir votre pipeline commercial avec des prospects à fort potentiel.",
    tags: ["Génération de leads", "Prise de RDV", "Cold calling", "Qualification fichiers"],
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    iconHover: "group-hover:bg-amber-500 group-hover:text-white",
    borderHover: "hover:border-amber-300",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    glowColor: "group-hover:shadow-amber-100",
    link: "/services/prospection",
  },
  {
    icon: TrendingUp,
    title: "Télévente",
    description:
      "Équipes formées aux techniques de conversion avancées pour booster votre chiffre d'affaires et fidéliser vos clients à distance.",
    tags: ["Vente directe", "Upselling & Cross-sell", "Fidélisation", "Recouvrement"],
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    iconHover: "group-hover:bg-emerald-500 group-hover:text-white",
    borderHover: "hover:border-emerald-300",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    glowColor: "group-hover:shadow-emerald-100",
    link: "/services/televente",
  },
  {
    icon: Layers,
    title: "Externalisation BPO",
    description:
      "Prise en charge complète de vos processus métier pour vous concentrer sur votre cœur d'activité avec sérénité et efficacité.",
    tags: ["Service clients", "Gestion administrative", "Gestion pré-comptable"],
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50",
    iconHover: "group-hover:bg-sky-500 group-hover:text-white",
    borderHover: "hover:border-sky-300",
    tagColor: "bg-sky-50 text-sky-700 border-sky-200",
    glowColor: "group-hover:shadow-sky-100",
    link: "/services/bpo",
  },
  {
    icon: Code2,
    title: "Solutions Digitales",
    description:
      "De la conception à la mise en production : applications web & mobile, infrastructure cloud, DevOps et cybersécurité sur mesure.",
    tags: ["Sites & Applications Web", "Apps Mobiles", "Sécurité Informatique", "Hébergement Cloud"],
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    iconHover: "group-hover:bg-violet-500 group-hover:text-white",
    borderHover: "hover:border-violet-300",
    tagColor: "bg-violet-50 text-violet-700 border-violet-200",
    glowColor: "group-hover:shadow-violet-100",
    link: "/services/solutions-digitales",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="services" ref={ref} className="relative overflow-hidden py-28">
      {/* Subtle background accents */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div
          className={cn(
            "mb-20 text-center transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Nos Services
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Des solutions complètes pour votre entreprise
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Quatre pôles d'expertise complémentaires pour accélérer votre croissance et digitaliser vos opérations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card",
                "transition-all duration-500 ease-out",
                "hover:-translate-y-2 hover:shadow-xl",
                service.borderHover,
                `hover:shadow-2xl ${service.glowColor}`,
                isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              )}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Top accent line that grows on hover */}
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/40 transition-all duration-500 group-hover:w-full" />

              <div className="flex flex-1 flex-col p-7">

                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",
                      service.iconBg,
                      service.iconColor,
                      service.iconHover,
                      "group-hover:scale-110 group-hover:rotate-3"
                    )}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 font-display text-xl font-bold text-foreground leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Tags — hidden by default, slide in on hover */}
                <div
                  className={cn(
                    "mb-6 flex flex-wrap gap-2 overflow-hidden transition-all duration-500",
                    "max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100"
                  )}
                >
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "rounded-full border px-2.5 py-0.5 text-xs font-medium",
                        service.tagColor
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                <Link
                  href={service.link}
                  className="group/link flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
                >
                  En savoir plus
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
