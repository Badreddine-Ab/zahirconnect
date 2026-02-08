"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare, Settings, Rocket, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consultation",
    description: "Nous analysons vos besoins et definissons ensemble les objectifs de votre projet de telemarketing.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Mise en Place",
    description: "Configuration des outils, formation des equipes et preparation des scripts et argumentaires.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Lancement",
    description: "Demarrage des operations avec un suivi quotidien et des ajustements en temps reel.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Optimisation",
    description: "Analyse des performances, reporting detaille et optimisation continue pour maximiser vos resultats.",
  },
]

export function ProcessSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 })

  return (
    <section ref={ref} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Notre Processus
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Comment Ca Marche ?
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Un processus simple et efficace pour lancer vos operations de telemarketing en toute serenite.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={cn(
                "group relative text-center transition-all duration-700",
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-full -translate-x-1/2 bg-gradient-to-r from-primary/30 to-transparent lg:block" />
              )}

              <div className="relative mx-auto mb-4 flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 rounded-2xl border border-border bg-card transition-all group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/10" />
                <div className="relative flex flex-col items-center">
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                  <step.icon className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
