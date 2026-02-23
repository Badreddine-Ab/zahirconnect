"use client"

import Image from "next/image"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

const highlights = [
  "Équipe hautement qualifiée et multilingue",
  "Technologies de pointe et outils collaboratifs",
  "Accompagnement personnalisé pour chaque client",
  "Flexibilité et adaptation rapide à vos besoins",
  "Localisation stratégique à Marrakech, Maroc",
  "Conformité aux normes internationales de qualité",
]

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="apropos" ref={ref} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image side */}
          <div
            className={cn(
              "relative transition-all duration-1000",
              isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            )}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/about.jpg"
                alt="Zahir Connect - Notre équipe à Marrakech"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 rounded-xl border border-border bg-card p-5 shadow-2xl shadow-primary/10 animate-float md:-right-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <span className="font-display text-lg font-bold">10+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Années</p>
                  <p className="text-xs text-muted-foreground">{"d'expérience"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div
            className={cn(
              "transition-all duration-1000 delay-200",
              isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            )}
          >
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              À propos de nous
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
              Qui sommes-nous ?
            </h2>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Zahir Connect est un centre d'appels basé à Marrakech, spécialisé dans le télémarketing offshore et la gestion de la relation client. Notre équipe dédiée s'engage à vous accompagner efficacement dans la réalisation de vos objectifs commerciaux.
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              Avec une approche personnalisée et des technologies de pointe, nous avons su nous affirmer en tant qu'entreprise de référence, adaptée rapidement aux exigences de nos clients dans des délais très courts.
            </p>

            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <div
                  key={item}
                  className={cn(
                    "flex items-start gap-2 transition-all duration-500",
                    isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  )}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Contactez-nous
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
