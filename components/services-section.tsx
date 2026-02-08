"use client"

import { useEffect, useRef, useState } from "react"
import {
  Headphones,
  PhoneCall,
  CalendarCheck,
  ShoppingCart,
  Monitor,
  FileSearch,
  BarChart3,
  Users,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    icon: PhoneCall,
    title: "Telemarketing",
    description:
      "Campagnes d'appels sortants strategiques pour generer des leads qualifies et developper votre portefeuille client.",
  },
  {
    icon: Headphones,
    title: "Service Client",
    description:
      "Accueil telephonique professionnel et gestion des reclamations pour renforcer la satisfaction de vos clients.",
  },
  {
    icon: CalendarCheck,
    title: "Prise de Rendez-vous",
    description:
      "Planification optimisee de rendez-vous qualifies pour vos equipes commerciales avec un taux de conversion eleve.",
  },
  {
    icon: ShoppingCart,
    title: "Televente",
    description:
      "Vente a distance de vos produits et services avec des equipes formees aux techniques de vente avancees.",
  },
  {
    icon: Monitor,
    title: "Support Technique",
    description:
      "Assistance technique multicanal pour resoudre efficacement les problemes de vos utilisateurs et clients.",
  },
  {
    icon: FileSearch,
    title: "Qualification de Fichiers",
    description:
      "Enrichissement et mise a jour de vos bases de donnees pour des campagnes marketing plus performantes.",
  },
  {
    icon: BarChart3,
    title: "Enquetes & Sondages",
    description:
      "Collecte de donnees et etudes de marche par telephone pour orienter vos decisions strategiques.",
  },
  {
    icon: Users,
    title: "Externalisation BPO",
    description:
      "Prise en charge complete de vos processus metier pour vous permettre de vous concentrer sur votre coeur d'activite.",
  },
]

export function ServicesSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="services" ref={ref} className="relative overflow-hidden py-24">
      {/* BG glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Nos Services
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Des Solutions Completes Pour Votre Entreprise
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Nous offrons une gamme complete de services personnalises pour repondre a vos besoins en matiere de communication et de developpement commercial.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5",
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Hover glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
