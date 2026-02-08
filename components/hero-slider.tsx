"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/hero-1.jpg",
    subtitle: "Centre d'Appels a Marrakech",
    title: "Votre Partenaire en Telemarketing Offshore",
    description:
      "Zahir Connect vous offre un service de telemarketing offshore de qualite superieure. Notre expertise et notre passion pour l'excellence font de nous le choix ideal pour votre entreprise.",
  },
  {
    image: "/images/hero-2.jpg",
    subtitle: "Excellence & Performance",
    title: "Des Solutions Sur Mesure Pour Votre Croissance",
    description:
      "Nous personnalisons notre approche pour comprendre et traiter au mieux votre projet. Chaque client beneficie d'un accompagnement dedie et d'une strategie adaptee.",
  },
  {
    image: "/images/hero-3.jpg",
    subtitle: "Expertise Depuis Des Annees",
    title: "Une Equipe Dediee a Votre Reussite",
    description:
      "Plus de 300 collaborateurs qualifies, des technologies de pointe et un management d'excellence pour garantir les meilleurs resultats a nos partenaires.",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrent(index)
      setTimeout(() => setIsAnimating(false), 800)
    },
    [isAnimating]
  )

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="accueil" className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-in-out",
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={cn(
                "absolute transition-all duration-700",
                i === current
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0 pointer-events-none"
              )}
            >
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                {slide.subtitle}
              </span>
              <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                {slide.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  Contactez-nous
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#services"
                  className="rounded-lg border border-border bg-secondary/50 px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
                >
                  Nos Services
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === current ? "w-10 bg-primary" : "w-4 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="animate-marquee flex whitespace-nowrap py-3">
          {Array.from({ length: 2 }).map((_, dupIndex) => (
            <div key={dupIndex} className="flex items-center gap-8 px-4">
              {[
                "Telemarketing",
                "Service Client",
                "Prise de RDV",
                "Televente",
                "Support Technique",
                "Back Office",
                "Qualification de Fichiers",
                "Enquetes & Sondages",
              ].map((item) => (
                <span key={`${dupIndex}-${item}`} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
