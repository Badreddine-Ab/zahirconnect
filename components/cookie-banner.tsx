"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem("zc_cookie_consent")
      if (!consent) setVisible(true)
    } catch {}
  }, [])

  function accept() {
    try { localStorage.setItem("zc_cookie_consent", "accepted") } catch {}
    setVisible(false)
    window.dispatchEvent(new Event("zc:consent-accepted"))
  }

  function decline() {
    try { localStorage.setItem("zc_cookie_consent", "declined") } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      aria-modal="false"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md"
    >
      <div className="rounded-2xl border border-border bg-card shadow-2xl shadow-black/20 p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <Cookie className="h-4 w-4 text-primary" />
            </div>
            <p className="font-display text-sm font-semibold text-foreground">
              Cookies &amp; confidentialité
            </p>
          </div>
          <button
            onClick={decline}
            aria-label="Fermer sans accepter"
            className="mt-0.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="text-xs leading-relaxed text-muted-foreground mb-5">
          Ce site utilise uniquement des cookies fonctionnels. Avec votre accord,
          nous chargeons également Google Maps sur la page de contact.
          Aucune donnée publicitaire ou analytique n&apos;est collectée.{" "}
          <Link
            href="/politique-confidentialite"
            className="text-primary underline-offset-2 hover:underline"
          >
            Politique de confidentialité
          </Link>
        </p>

        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            onClick={accept}
            className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Accepter
          </button>
          <button
            onClick={decline}
            className="flex-1 rounded-lg border border-border px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Continuer sans accepter
          </button>
        </div>
      </div>
    </div>
  )
}