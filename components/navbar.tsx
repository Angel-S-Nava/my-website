"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"

// Importa los assets desde la misma carpeta que este archivo
import logoLight from "./logo-light.svg"
import logoDark from "./logo-dark.svg"

function resolveImportSrc(imp: any): string {
  // dependiendo de la configuración, el import puede ser:
  // - una string con la url (imp === "/_next/static/media/...")
  // - un objecto { src: "...", height, width } (Next image static import)
  if (!imp) return ""
  if (typeof imp === "string") return imp
  if (typeof imp === "object" && "src" in imp) return imp.src
  return String(imp)
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = mounted ? (resolvedTheme ?? "light") : "light"

  const lightSrc = resolveImportSrc(logoLight)
  const darkSrc = resolveImportSrc(logoDark)

  const logoSrc =
    currentTheme === "dark"
      ? darkSrc || lightSrc
      : lightSrc || darkSrc

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Our Process" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="Home" className="flex items-center">
            {/* usamos <img> para evitar preloads automáticos */}
            <img
              src={logoSrc}
              alt="Navamkt logo"
              className="object-contain h-8 md:h-10"
              width={160}
              height={40}
              decoding="async"
              loading="eager"
              onError={(e) => {
                // Por si acaso: si algo falla, evitar imagen rota
                const el = e.currentTarget as HTMLImageElement
                el.style.visibility = "hidden"
              }}
            />
            <p className={`text-2xl font-bold ${
            currentTheme === "dark"
              ? "text-gray-100" 
              : "text-gray-800"
            }`}>navamkt</p>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
