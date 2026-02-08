"use client"

import React, { useState } from "react"
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [formState, setFormState] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ nom: "", email: "", telephone: "", sujet: "", message: "" })
    }, 3000)
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
            Parlons de Votre Projet
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {"Contactez-nous des maintenant pour decouvrir comment nous pouvons propulser votre entreprise vers de nouveaux sommets."}
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
                Nos Coordonnees
              </h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Telephone</p>
                    <p className="text-sm text-muted-foreground">+212 524 00 00 00</p>
                    <p className="text-sm text-muted-foreground">+33 1 76 00 00 00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">contact@zahirconnect.ma</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Adresse</p>
                    <p className="text-sm text-muted-foreground">
                      Boulevard Mohammed V, Gueliz
                      <br />
                      Marrakech, Maroc
                    </p>
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

            {/* Map embed placeholder */}
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Zahir Connect Location - Marrakech"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54253.48823394364!2d-8.05!3d31.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale transition-all hover:grayscale-0"
              />
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
                Demander un Devis Gratuit
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nom" className="mb-1.5 block text-sm font-medium text-foreground">
                    Nom Complet
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
                  <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium text-foreground">
                    Telephone
                  </label>
                  <input
                    id="telephone"
                    type="tel"
                    value={formState.telephone}
                    onChange={(e) => setFormState({ ...formState, telephone: e.target.value })}
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="+212 6XX XXX XXX"
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
                    <option value="">Selectionnez un service</option>
                    <option value="telemarketing">Telemarketing</option>
                    <option value="service-client">Service Client</option>
                    <option value="prise-rdv">Prise de Rendez-vous</option>
                    <option value="televente">Televente</option>
                    <option value="support">Support Technique</option>
                    <option value="bpo">Externalisation BPO</option>
                    <option value="autre">Autre</option>
                  </select>
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
                    placeholder="Decrivez votre projet..."
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={submitted}
                className={cn(
                  "mt-6 flex w-full items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold transition-all",
                  submitted
                    ? "bg-green-500 text-foreground"
                    : "bg-primary text-primary-foreground hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
                )}
              >
                {submitted ? (
                  "Message Envoye !"
                ) : (
                  <>
                    Envoyer le Message
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
