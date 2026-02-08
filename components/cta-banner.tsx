"use client"

import { ArrowRight, Headphones } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* BG decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      <div className="absolute -left-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-20 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary animate-pulse-glow">
          <Headphones className="h-8 w-8" />
        </div>
        <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
          Pret a Booster Votre Business ?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Rejoignez les entreprises qui ont choisi Zahir Connect pour externaliser leur relation client. Demandez votre devis gratuit des maintenant.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
          >
            Demander un Devis Gratuit
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="tel:+212524000000"
            className="rounded-lg border border-border bg-secondary/50 px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
          >
            +212 524 00 00 00
          </a>
        </div>
      </div>
    </section>
  )
}
