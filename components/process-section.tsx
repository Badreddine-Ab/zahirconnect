"use client"

import { Search, FileText, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    icon: Search,
    title: "Diagnostic Gratuit",
    description: "Analyse approfondie de vos besoins et définition de vos objectifs ensemble.",
  },
  {
    icon: FileText,
    title: "Proposition Sur Mesure",
    description: "Offre personnalisée avec un plan d'action détaillé et des engagements clairs.",
  },
  {
    icon: TrendingUp,
    title: "Suivi Actif",
    description: "Optimisation continue et reporting régulier pour garantir vos résultats.",
  },
]

export function ProcessSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={cn(
            "mb-16 text-center transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Notre Processus
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Comment Ça Marche ?
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Un processus simple et efficace pour lancer vos operations en toute serenite.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={cn(
                "group relative flex flex-col items-center text-center transition-all duration-700",
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Connecting arrow between steps */}
              {i < steps.length - 1 && (
                <div className="absolute left-[calc(50%+3.5rem)] top-10 hidden lg:block w-[calc(100%-7rem)] h-px">
                  <svg viewBox="0 0 100 4" className="w-full h-full" preserveAspectRatio="none">
                    <line
                      x1="0" y1="2" x2="100" y2="2"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeDasharray="4 3"
                      className="text-primary/40"
                    />
                    <polygon points="98,0 100,2 98,4" className="fill-primary/40" />
                  </svg>
                </div>
              )}

              {/* Icon circle */}
              <div
                className={cn(
                  "relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground",
                  "shadow-lg shadow-primary/20 transition-all duration-300",
                  "group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/30"
                )}
              >
                <step.icon className="h-9 w-9 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Card */}
              <div
                className={cn(
                  "w-full rounded-2xl border border-border bg-card p-6 transition-all duration-300",
                  "group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10"
                )}
              >
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
