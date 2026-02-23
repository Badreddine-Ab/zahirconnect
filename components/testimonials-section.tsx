"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "Cela fait plus de 5 ans que je travaille au sein de Zahir Connect et je peux vous dire que c'est l'expérience qui a fait de moi la professionnelle que je suis. J'ai un immense plaisir à venir chaque jour au travail.",
    author: "Fatima Z.",
    role: "Responsable RH",
  },
  {
    quote:
      "J'ai commencé au sein de Zahir Connect en tant qu'agent et le système de promotion a fait que je suis devenu aujourd'hui formateur. Aujourd'hui je ne cesse de me développer et de me découvrir en participant quotidiennement au bonheur de mes futurs agents.",
    author: "Youssef A.",
    role: "Formateur",
  },
  {
    quote:
      "Pour moi l'expérience de centre d'appel était juste une occupation, mais quand j'ai rejoint Zahir Connect, j'ai vraiment découvert la passion de ce métier et les différents acquis qu'il vous fait apprendre. C'est une expérience à part.",
    author: "Sara M.",
    role: "Agent Commercial",
  },
  {
    quote:
      "Zahir Connect a transformé notre approche de la relation client. Leur équipe est réactive, professionnelle et toujours à l'écoute de nos besoins. Les résultats ont dépassé nos attentes.",
    author: "Pierre D.",
    role: "Directeur Commercial, France",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % testimonials.length),
    []
  )
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length),
    []
  )

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section id="temoignages" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Témoignages
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Ce que disent nos collaborateurs
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <Quote className="absolute -left-4 -top-4 h-16 w-16 text-primary/10" />

          <div className="relative min-h-[200px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={cn(
                  "absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700",
                  i === current ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
                )}
              >
                <p className="mb-8 text-lg leading-relaxed text-foreground md:text-xl">
                  {`"${t.quote}"`}
                </p>
                <div>
                  <p className="font-display text-lg font-semibold text-primary">
                    {t.author}
                  </p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots + arrows */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500",
                    i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                  )}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
