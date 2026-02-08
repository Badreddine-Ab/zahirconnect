"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Solutions Call Center", href: "#services" },
  { label: "Services IT", href: "/it-services" },
  { label: "Pourquoi Nous", href: "#pourquoi" },
  { label: "A Propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getHref = (link: { href: string }) => {
    if (link.href.startsWith("/")) return link.href
    return isHome ? link.href : `/${link.href}`
  }

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-secondary/80 border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-6">
            <a href="tel:+212524000000" className="flex items-center gap-2 transition-colors hover:text-primary">
              <Phone className="h-3.5 w-3.5" />
              <span>+212 524 00 00 00</span>
            </a>
            <a href="mailto:contact@zahirconnect.ma" className="flex items-center gap-2 transition-colors hover:text-primary">
              <Mail className="h-3.5 w-3.5" />
              <span>contact@zahirconnect.ma</span>
            </a>
          </div>
          <span>Marrakech, Maroc</span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500",
          isScrolled
            ? "bg-background/95 shadow-lg shadow-primary/5 backdrop-blur-xl"
            : "bg-background/70 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <img
              src="/images/logo.jpeg"
              alt="Zahir Connect Logo"
              width="48"
              height="48"
              className="h-12 w-12 rounded-lg object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold leading-tight text-foreground">
                Zahir Connect
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary">
                Contact Solutions
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={getHref(link)}
                className={cn(
                  "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground",
                  pathname === link.href ? "text-primary bg-secondary/50" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={isHome ? "#contact" : "/#contact"}
            className="hidden rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 lg:block"
          >
            Demander un Devis
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "overflow-hidden border-t border-border transition-all duration-300 lg:hidden",
            isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-1 bg-background px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={getHref(link)}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={isHome ? "#contact" : "/#contact"}
              onClick={() => setIsMobileOpen(false)}
              className="mt-2 rounded-lg bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Demander un Devis
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
