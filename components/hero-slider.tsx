"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "/images/hero-1.jpg",
    tag: "Centre d'appels · Marrakech",
    title: "Votre partenaire en télémarketing offshore",
    description:
      "Zahir Connect vous offre un service de télémarketing offshore de qualité supérieure. Notre expertise et notre passion pour l'excellence font de nous le choix idéal pour votre entreprise.",
    stat: { value: "10+", label: "Ans d'expérience" },
  },
  {
    image: "/images/hero-2.jpg",
    tag: "Excellence & performance",
    title: "Des solutions sur mesure pour votre croissance",
    description:
      "Nous personnalisons notre approche pour comprendre et traiter au mieux votre projet. Chaque client bénéficie d'un accompagnement dédié et d'une stratégie adaptée.",
    stat: { value: "Devis", label: "Gratuit" },
  },
  {
    image: "/images/hero-3.jpg",
    tag: "Expertise éprouvée",
    title: "Une équipe dédiée à votre réussite",
    description:
      "Des agents qualifiés, des technologies de pointe et un management d'excellence pour garantir les meilleurs résultats à nos partenaires.",
    stat: { value: "6j/7", label: "Disponibilité" },
  },
]

const DURATION = 6000

export function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [progressKey, setProgressKey] = useState(0)

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrent(index)
      setProgressKey((k) => k + 1)
      setTimeout(() => setIsAnimating(false), 700)
    },
    [isAnimating]
  )

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, DURATION)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section
      id="accueil"
      className="relative flex h-[calc(100vh-5rem)] lg:h-[calc(100vh-7.25rem)] min-h-[520px] overflow-hidden bg-[#F7F6F2]"
    >
      {/* ── BACKGROUND DECOR ────────────────────────── */}
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Warm golden ambient glow */}
      <div className="pointer-events-none absolute left-[25%] top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.12] blur-[120px]" />
      {/* Right warm wash */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[48%] hidden lg:block bg-gradient-to-l from-amber-50/60 to-transparent" />
      {/* Vertical separator */}
      <div className="pointer-events-none absolute left-[58%] inset-y-8 hidden lg:block w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

      {/* ── LEFT CONTENT ────────────────────────────── */}
      <div className="relative z-10 flex w-full flex-col justify-center px-8 pb-16 pt-8 md:px-12 lg:w-[58%] lg:px-14 xl:px-20">

        {/* Slide counter */}
        <div className="mb-6 flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary/60 uppercase">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <div className="h-px w-16 bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            className="flex flex-col gap-5"
          >
            {/* Tag pill */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.05 } }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                <span className="h-1 w-1 animate-pulse rounded-full bg-primary" />
                {slide.tag}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }}
              className="font-display text-4xl font-black leading-[1.06] tracking-tight text-foreground md:text-5xl lg:text-[3.1rem] xl:text-[3.6rem]"
            >
              {slide.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15 } }}
              className="max-w-md text-sm leading-relaxed text-foreground/55 md:text-[15px]"
            >
              {slide.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <a
                href="/contact"
                className="group flex items-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/25"
              >
                Contactez-nous
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="/services"
                className="rounded-xl border border-slate-300 bg-white/70 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-slate-400 hover:bg-white"
              >
                Nos Services
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } }}
              className="flex items-center gap-8 pt-1"
            >
              {[
                { value: "10+", label: "Ans d'expérience" },
                { value: "6j/7", label: "Disponibilité" },
                { value: "Devis", label: "Gratuit" },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="font-display text-2xl font-black text-primary">{s.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-foreground/40">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── RIGHT IMAGE (desktop only) ──────────────── */}
      <div className="relative hidden lg:flex lg:w-[42%] items-center justify-center py-8 pr-8 xl:pr-14">
        {/* Decorative corner accents */}
        <div className="pointer-events-none absolute left-4 top-10 h-20 w-20 rounded-xl border border-primary/25" />
        <div className="pointer-events-none absolute bottom-14 right-4 h-20 w-20 rounded-xl border border-primary/15" />

        {/* Image frame */}
        <div className="relative h-[82%] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-2xl shadow-slate-300/50">
          {slides.map((s, i) => (
            <div
              key={i}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                i === current ? "opacity-100" : "opacity-0"
              )}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="42vw"
              />
            </div>
          ))}
          {/* Subtle overlay on image */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>

        {/* Floating stat badge */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { delay: 0.45, duration: 0.4, ease: "easeOut" } }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="absolute bottom-16 -left-2 flex flex-col gap-0.5 rounded-xl border border-slate-200 bg-white/95 px-5 py-3.5 shadow-lg"
          >
            <span className="text-2xl font-black text-primary leading-none">{slide.stat.value}</span>
            <span className="text-[10px] uppercase tracking-widest text-foreground/45 mt-0.5">{slide.stat.label}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── BOTTOM NAVIGATION BAR ───────────────────── */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center gap-4 border-t border-slate-200 bg-white/70 px-8 py-3.5 backdrop-blur-sm md:px-12 lg:px-14 xl:px-20">
        {/* Slide dot indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                "block h-[2px] rounded-full transition-all duration-500",
                i === current ? "w-8 bg-primary" : "w-4 bg-slate-300 hover:bg-slate-400"
              )}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-px flex-1 overflow-hidden rounded-full bg-slate-200">
          <div
            key={progressKey}
            className="h-full rounded-full bg-primary/60"
            style={{ width: "0%", transition: `width ${DURATION}ms linear` }}
            ref={(el) => {
              if (!el) return
              void el.offsetWidth
              el.style.width = "100%"
            }}
          />
        </div>

        {/* Arrow controls */}
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={prev}
            aria-label="Précédent"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Suivant"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
