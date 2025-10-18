import React, { JSX } from 'react'
import { Mail, Linkedin, Github, Heart, Youtube } from 'lucide-react'

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Mail, href: 'mailto:angelnavafierro@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/angel-nava-38851632a/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Angel-S-Nava', label: 'GitHub' },
    { icon: Youtube, href: 'https://www.youtube.com/@AngelNavaFI', label: 'YouTube' },
  ]

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              [Angel Nava]
            </h3>
            <p className="text-text/70 leading-relaxed">
              Freelancer specialized in digital marketing and web development. I help businesses and personal brands enhance their online presence with effective and personalized solutions.
            </p>
          </div>

          <div>
            <h4 className="text-text font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {/* anchor normal — usa scroll-behavior: smooth en globals.css */}
                  <a href={link.href} className="text-text/70 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text font-semibold mb-4">Follow me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-text/70 hover:text-accent hover:border-accent transition-all hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text/60 text-sm text-center md:text-left">
              {currentYear} Angel Santiago Nava Fierro. All rights reserved.
            </p>
            <p className="text-text/60 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-accent-secondary" /> and clean code
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
