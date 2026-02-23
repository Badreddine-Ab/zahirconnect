'use client';

import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  services: [
    { label: "Prospection Commerciale", href: "/services/prospection" },
    { label: "Télévente", href: "/services/televente" },
    { label: "Externalisation BPO", href: "/services/bpo" },
    { label: "Solutions Digitales", href: "/services/solutions-digitales" },
  ],
  entreprise: [
    { label: "À propos", href: "/a-propos" },
    { label: "Nos Services", href: "/services" },
    { label: "Pourquoi Nous", href: "/pourquoi-nous" },
    { label: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl">
                <Image
                  src="/images/zahir-connect-logo.png"
                  alt="Zahir Connect Logo"
                  width={400}
                  height={400}
                  className="h-full w-full scale-[4] translate-y-0.5 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-foreground">
                  Zahir Connect
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary">
                  Contact Solutions
                </span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Zahir Connect - Centre d'appels à Marrakech offrant des services de télémarketing offshore de qualité supérieure pour développer votre entreprise.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+212690192593" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Phone className="h-4 w-4" />
                +212 690 192 593
              </a>
              <a href="mailto:contact@zahirconnect.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4" />
                contact@zahirconnect.com
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Marrakech, Maroc
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Entreprise
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.entreprise.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Restez connecté
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Recevez nos dernières actualités et offres directement dans votre boîte mail.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                OK
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} Zahir Connect. Tous droits réservés.`}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Mentions Légales
            </Link>
            <Link href="/politique-confidentialite" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
