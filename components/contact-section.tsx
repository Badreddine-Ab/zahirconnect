"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Send, Clock, Map } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

type Status = "idle" | "loading" | "success" | "error"

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [formState, setFormState] = useState({
    nom: "",
    prenom: "",
    email: "",
    indicatif: "+212",
    telephone: "",
    sujet: "",
    message: "",
  })
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<Status>("idle")
  const [mapConsent, setMapConsent] = useState(false)

  // Sync map consent with cookie banner decision
  useEffect(() => {
    try {
      if (localStorage.getItem("zc_cookie_consent") === "accepted") {
        setMapConsent(true)
      }
    } catch {}

    const handler = () => setMapConsent(true)
    window.addEventListener("zc:consent-accepted", handler)
    return () => window.removeEventListener("zc:consent-accepted", handler)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) return
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          telephone: `${formState.indicatif} ${formState.telephone}`,
        }),
      })
      if (!res.ok) throw new Error("upstream")
      setStatus("success")
      setFormState({ nom: "", prenom: "", email: "", indicatif: "+212", telephone: "", sujet: "", message: "" })
      setConsent(false)
      setTimeout(() => setStatus("idle"), 5000)
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  return (
    <section id="contact" ref={ref} className="relative py-24">
      <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Parlons de votre projet
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Contactez-nous dès maintenant pour découvrir comment nous pouvons propulser votre entreprise vers de nouveaux sommets."}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div
            className={cn(
              "flex flex-col gap-6 lg:col-span-2 transition-all duration-700",
              isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            )}
          >
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-6 font-display text-xl font-semibold text-foreground">
                Nos coordonnées
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Téléphone</p>
                    <a href="tel:+212690192593" className="text-sm text-muted-foreground transition-colors hover:text-primary">+212 690 192 593</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <a href="mailto:contact@zahirconnect.com" className="text-sm text-muted-foreground transition-colors hover:text-primary">contact@zahirconnect.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Adresse</p>
                    <a
                      href="https://maps.app.goo.gl/WqsiiiCsZKQAnw7k6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      Centre d'affaires At Taoufiq 5, 4ème étage
                      <br />
                      Bureau 20, Marrakech
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Horaires</p>
                    <p className="text-sm text-muted-foreground">
                      Lun - Ven : 08h00 - 20h00
                      <br />
                      Sam : 09h00 - 14h00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lazy-loaded map */}
            <div className="overflow-hidden rounded-xl border border-border">
              {mapConsent ? (
                <iframe
                  title="Zahir Connect — Centre d'affaires At Taoufiq 5, Bureau 20, Marrakech"
                  src="https://maps.google.com/maps?q=Centre+d%27affaires+At+Taoufiq+5%2C+Marrakech%2C+Maroc&output=embed&hl=fr&z=17"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <button
                  onClick={() => setMapConsent(true)}
                  className="group flex h-[220px] w-full flex-col items-center justify-center gap-3 bg-secondary/60 text-center transition-colors hover:bg-secondary"
                  aria-label="Afficher la carte Google Maps"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-sm transition-transform group-hover:scale-110">
                    <Map className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Afficher la carte</p>
                    <p className="text-xs text-muted-foreground">Chargera Google Maps</p>
                  </div>
                </button>
              )}
              <a
                href="https://maps.app.goo.gl/WqsiiiCsZKQAnw7k6"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-card px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                Ouvrir dans Google Maps
              </a>
            </div>
          </div>

          {/* Form */}
          <div
            className={cn(
              "lg:col-span-3 transition-all duration-700 delay-200",
              isInView ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            )}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-card p-8"
            >
              <h3 className="mb-6 font-display text-xl font-semibold text-foreground">
                Nous contacter
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nom" className="mb-1.5 block text-sm font-medium text-foreground">
                    Nom
                  </label>
                  <input
                    id="nom"
                    type="text"
                    value={formState.nom}
                    onChange={(e) => setFormState({ ...formState, nom: e.target.value })}
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="prenom" className="mb-1.5 block text-sm font-medium text-foreground">
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    type="text"
                    value={formState.prenom}
                    onChange={(e) => setFormState({ ...formState, prenom: e.target.value })}
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="sujet" className="mb-1.5 block text-sm font-medium text-foreground">
                    Sujet
                  </label>
                  <select
                    id="sujet"
                    value={formState.sujet}
                    onChange={(e) => setFormState({ ...formState, sujet: e.target.value })}
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="telemarketing">Télémarketing</option>
                    <option value="service-client">Service client</option>
                    <option value="prise-rdv">Prise de rendez-vous</option>
                    <option value="televente">Télévente</option>
                    <option value="support">Support technique</option>
                    <option value="bpo">Externalisation BPO</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Téléphone
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formState.indicatif}
                      onChange={(e) => setFormState({ ...formState, indicatif: e.target.value })}
                      className="w-32 rounded-lg border border-border bg-secondary/50 px-3 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="+212">🇲🇦 +212</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+32">🇧🇪 +32</option>
                      <option value="+41">🇨🇭 +41</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+49">🇩🇪 +49</option>
                    </select>
                    <input
                      id="telephone"
                      type="tel"
                      value={formState.telephone}
                      onChange={(e) => setFormState({ ...formState, telephone: e.target.value })}
                      className="flex-1 rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="6XX XXX XXX"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Décrivez votre projet..."
                    required
                  />
                </div>
              </div>

              {/* GDPR consent checkbox */}
              <div className="mt-5 flex items-start gap-3">
                <input
                  id="contact-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-0.5 h-4 w-4 cursor-pointer accent-primary"
                />
                <label htmlFor="contact-consent" className="cursor-pointer text-xs leading-relaxed text-muted-foreground">
                  J&apos;accepte que mes données soient traitées par Zahir Connect pour répondre à ma demande,
                  conformément à la{" "}
                  <Link href="/politique-confidentialite" className="text-primary underline-offset-2 hover:underline">
                    politique de confidentialité
                  </Link>
                  . Ces données seront conservées 12 mois maximum.
                </label>
              </div>

              {/* Status messages */}
              {status === "error" && (
                <p className="mt-4 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-xs text-destructive">
                  Une erreur est survenue. Veuillez réessayer ou nous écrire directement à contact@zahirconnect.com
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={cn(
                  "mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold transition-all",
                  status === "success"
                    ? "bg-green-500 text-white"
                    : status === "loading"
                    ? "cursor-not-allowed bg-primary/60 text-primary-foreground"
                    : "bg-primary text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
                )}
              >
                {status === "success" ? (
                  "Message envoyé !"
                ) : status === "loading" ? (
                  "Envoi en cours…"
                ) : (
                  <>
                    Envoyer le message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
