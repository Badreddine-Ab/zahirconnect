"use client"

import { ArrowRight, Headphones } from "lucide-react"
import Link from "next/link"

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
          Discutons de votre projet
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Chaque grande aventure commence par une simple conversation. Notre équipe est là pour vous écouter et bâtir ensemble la solution qui vous correspond.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
          >
            Commencer la conversation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+212690192593"
            className="rounded-lg border border-border bg-secondary/50 px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
          >
            +212 690 192 593
          </a>
        </div>
      </div>
    </section>
  )
}
