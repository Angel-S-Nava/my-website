'use client'

import React, { useState, useEffect, JSX } from 'react'
import { Menu, X } from 'lucide-react'

type NavLink = { name: string; href: string; isExternal?: boolean }

export default function Navbar(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Portfolio', href: 'https://github.com/Angel-S-Nava/Portfolio', isExternal: true },
  ]

  const handleNavClick = (href: string, isExternal = false) => {
    setIsMobileMenuOpen(false)

    if (isExternal) {
      window.open(href, '_blank', 'noopener,noreferrer')
      return
    }

    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = href.startsWith('#') ? href : `#${href}`
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#home')
              }}
              className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Angel Nava
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href, !!link.isExternal)
                }}
                className="text-text hover:text-accent transition-colors duration-300 font-medium"
                {...(link.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((s) => !s)}
            className="md:hidden text-text hover:text-accent transition-colors p-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="px-4 pt-2 pb-4 space-y-3 bg-background/98 backdrop-blur-sm border-t border-primary/20">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href, !!link.isExternal)}
              className="w-full text-left text-text hover:text-accent transition-colors duration-300 font-medium py-2"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
