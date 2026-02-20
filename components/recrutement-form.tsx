"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView as useFramerInView } from "framer-motion"
import {
  Users,
  TrendingUp,
  GraduationCap,
  Banknote,
  Clock,
  MapPin,
  CheckCircle2,
  Send,
  Loader2,
  Sparkles,
} from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Animation variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
}

// ─── Data ────────────────────────────────────────────────────────────────────

const benefits = [
  { icon: GraduationCap, label: "Formation complète offerte" },
  { icon: TrendingUp, label: "Evolution rapide" },
  { icon: Banknote, label: "Salaire compétitif + primes" },
  { icon: Clock, label: "Horaires flexibles" },
  { icon: Users, label: "Equipe soudée de 300+" },
  { icon: MapPin, label: "Marrakech centre" },
]

const perks = [
  "Aucune expérience nécessaire — nous formons tout le monde",
  "Environnement moderne et bienveillant",
  "Primes sur performance dès le premier mois",
  "Contrat CDI/CDD selon profil",
  "Montée en compétences garantie",
]

const stats = [
  { value: 300, suffix: "+", label: "Collaborateurs actifs" },
  { value: 98, suffix: "%", label: "Taux de satisfaction" },
]

const experienceOptions = [
  { value: "", label: "Sélectionnez votre expérience" },
  { value: "aucune", label: "Aucune expérience" },
  { value: "moins-1-an", label: "Moins d'1 an" },
  { value: "1-2-ans", label: "1–2 ans" },
  { value: "3-5-ans", label: "3–5 ans" },
  { value: "plus-5-ans", label: "+5 ans" },
]

// ─── Animated counter ────────────────────────────────────────────────────────

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useFramerInView(ref, { once: true, margin: "-60px" })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1400
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

// ─── Zellige SVG (light version) ─────────────────────────────────────────────

function ZelligeGrid() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="zellige-light" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <circle cx="24" cy="24" r="1.8" fill="#d97706" />
          <circle cx="0"  cy="0"  r="1.8" fill="#d97706" />
          <circle cx="48" cy="0"  r="1.8" fill="#d97706" />
          <circle cx="0"  cy="48" r="1.8" fill="#d97706" />
          <circle cx="48" cy="48" r="1.8" fill="#d97706" />
          <circle cx="24" cy="0"  r="0.9" fill="#d97706" />
          <circle cx="24" cy="48" r="0.9" fill="#d97706" />
          <circle cx="0"  cy="24" r="0.9" fill="#d97706" />
          <circle cx="48" cy="24" r="0.9" fill="#d97706" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#zellige-light)" />
    </svg>
  )
}

// ─── Floating orbs ────────────────────────────────────────────────────────────

function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full bg-amber-200/40 blur-[80px]"
        animate={{ scale: [1, 1.12, 1], x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-orange-100/50 blur-[100px]"
        animate={{ scale: [1, 1.08, 1], x: [0, -18, 0], y: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100/30 blur-[60px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </div>
  )
}

// ─── Types ───────────────────────────────────────────────────────────────────

type FormState = {
  nom: string
  prenom: string
  telephone: string
  ville: string
  email: string
  experience: string
}

type Status = "idle" | "loading" | "success" | "error"

// ─── Main component ───────────────────────────────────────────────────────────

export function RecrutementForm() {
  const [form, setForm] = useState<FormState>({
    nom: "",
    prenom: "",
    telephone: "",
    ville: "",
    email: "",
    experience: "",
  })
  const [status, setStatus] = useState<Status>("idle")

  function update(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL!, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(form),
      })
      setStatus("success")
      setForm({ nom: "", prenom: "", telephone: "", ville: "", email: "", experience: "" })
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 shadow-sm transition-all duration-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 hover:border-amber-300"
  const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50/70 via-white to-orange-50/40 py-28 md:py-36">
        <ZelligeGrid />
        <FloatingOrbs />

        {/* Decorative arc at bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />

        <motion.div
          className="relative mx-auto max-w-4xl px-6 text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              Recrutement ouvert
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mb-6 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance"
          >
            Construisez Votre{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Carrière
              </span>
              {/* animated underline */}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>{" "}
            avec Nous
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Rejoignez une équipe de 300+ collaborateurs au coeur de Marrakech.
            Que vous soyez débutant ou expérimenté, nous avons un poste fait pour vous.
          </motion.p>

          {/* CTA scroll hint */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-10 flex justify-center"
          >
            <motion.div
              className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-amber-300/60 pt-1.5"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-1.5 w-1 rounded-full bg-amber-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Benefits strip ───────────────────────────────────────────────── */}
      <section className="border-y border-border bg-white py-5">
        <motion.div
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2.5 px-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {benefits.map(({ icon: Icon, label }) => (
            <motion.span
              key={label}
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-flex cursor-default items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm"
            >
              <Icon className="h-3.5 w-3.5 text-amber-600" />
              {label}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* ── Form section ─────────────────────────────────────────────────── */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">

            {/* Left: motivational copy */}
            <motion.div
              className="flex flex-col gap-8 lg:col-span-2"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <div>
                <span className="mb-3 inline-block rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Pourquoi nous rejoindre
                </span>
                <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl text-balance">
                  Un emploi qui vous{" "}
                  <span className="text-amber-600">propulse</span>
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Zahir Connect est bien plus qu&apos;un centre d&apos;appels — c&apos;est
                  un tremplin. Nous investissons dans nos collaborateurs dès le premier jour.
                </p>
              </div>

              {/* Perks list */}
              <motion.ul
                className="flex flex-col gap-3"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {perks.map((perk, i) => (
                  <motion.li
                    key={perk}
                    variants={fadeUp}
                    custom={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    {perk}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ value, suffix, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                    className="rounded-xl border border-border bg-card p-4 shadow-sm"
                  >
                    <p className="font-display text-2xl font-bold text-foreground">
                      <Counter target={value} suffix={suffix} />
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className="rounded-xl border border-border bg-card p-4 shadow-sm"
                >
                  <p className="font-display text-2xl font-bold text-foreground">&lt; 48h</p>
                  <p className="mt-1 text-xs text-muted-foreground">Réponse garantie</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className="rounded-xl border border-border bg-card p-4 shadow-sm"
                >
                  <p className="font-display text-2xl font-bold text-foreground">CDI/CDD</p>
                  <p className="mt-1 text-xs text-muted-foreground">Contrats disponibles</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: form card */}
            <motion.div
              className="lg:col-span-3"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center justify-center gap-6 rounded-xl border border-green-200 bg-green-50/60 p-12 text-center shadow-sm"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.15 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
                    >
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </motion.div>
                    <div>
                      <h3 className="mb-2 font-display text-2xl font-bold text-foreground">
                        Candidature envoyée !
                      </h3>
                      <p className="text-muted-foreground">
                        Merci pour votre intérêt. Notre équipe RH vous contactera
                        dans les 48 heures.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:scale-[1.02]"
                    >
                      Soumettre une autre candidature
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35 }}
                    className="rounded-xl border border-border bg-card p-8 shadow-sm"
                  >
                    <div className="mb-7 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100">
                        <Sparkles className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          Postuler maintenant
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Réponse sous 48h garantie
                        </p>
                      </div>
                    </div>

                    <motion.div
                      className="grid gap-5 sm:grid-cols-2"
                      variants={stagger}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Nom */}
                      <motion.div variants={fadeUp} custom={0}>
                        <label htmlFor="nom" className={labelClass}>
                          Nom <span className="text-amber-500">*</span>
                        </label>
                        <input
                          id="nom"
                          type="text"
                          value={form.nom}
                          onChange={update("nom")}
                          className={inputClass}
                          placeholder="Votre nom"
                          required
                        />
                      </motion.div>

                      {/* Prénom */}
                      <motion.div variants={fadeUp} custom={1}>
                        <label htmlFor="prenom" className={labelClass}>
                          Prénom <span className="text-amber-500">*</span>
                        </label>
                        <input
                          id="prenom"
                          type="text"
                          value={form.prenom}
                          onChange={update("prenom")}
                          className={inputClass}
                          placeholder="Votre prénom"
                          required
                        />
                      </motion.div>

                      {/* Téléphone */}
                      <motion.div variants={fadeUp} custom={2}>
                        <label htmlFor="telephone" className={labelClass}>
                          Numéro de téléphone <span className="text-amber-500">*</span>
                        </label>
                        <input
                          id="telephone"
                          type="tel"
                          value={form.telephone}
                          onChange={update("telephone")}
                          className={inputClass}
                          placeholder="+212 6XX XXX XXX"
                          required
                        />
                      </motion.div>

                      {/* Ville */}
                      <motion.div variants={fadeUp} custom={3}>
                        <label htmlFor="ville" className={labelClass}>
                          Ville <span className="text-amber-500">*</span>
                        </label>
                        <input
                          id="ville"
                          type="text"
                          value={form.ville}
                          onChange={update("ville")}
                          className={inputClass}
                          placeholder="Votre ville"
                          required
                        />
                      </motion.div>

                      {/* Email */}
                      <motion.div variants={fadeUp} custom={4}>
                        <label htmlFor="email" className={labelClass}>
                          Email <span className="text-amber-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={update("email")}
                          className={inputClass}
                          placeholder="votre@email.com"
                          required
                        />
                      </motion.div>

                      {/* Expérience */}
                      <motion.div variants={fadeUp} custom={5}>
                        <label htmlFor="experience" className={labelClass}>
                          Expérience <span className="text-amber-500">*</span>
                        </label>
                        <select
                          id="experience"
                          value={form.experience}
                          onChange={update("experience")}
                          className={inputClass}
                          required
                        >
                          {experienceOptions.map(({ value, label }) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>
                      </motion.div>
                    </motion.div>

                    <AnimatePresence>
                      {status === "error" && (
                        <motion.p
                          key="err"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 overflow-hidden rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
                        >
                          Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      whileHover={status !== "loading" ? { scale: 1.02, y: -1 } : {}}
                      whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className={cn(
                        "mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold shadow-sm transition-shadow",
                        status === "loading"
                          ? "cursor-not-allowed bg-amber-400/60 text-white"
                          : "bg-amber-500 text-white hover:shadow-amber-300/50 hover:shadow-md"
                      )}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          Envoyer ma candidature
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </motion.button>

                    <p className="mt-4 text-center text-xs text-muted-foreground">
                      En soumettant ce formulaire, vous acceptez d&apos;être contacté par notre équipe RH.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
